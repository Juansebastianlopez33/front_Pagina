import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next'; // Importar hook
import './CameraModal.css';

// Las funciones de ayuda (dataURLtoFile, applyMedievalFilter) no contienen texto visible,
// por lo que se mantienen exactamente igual.
const dataURLtoFile = (dataurl, filename) => {
    let arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
}

const applyMedievalFilter = (canvas, context) => {
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i], g = data[i + 1], b = data[i + 2];
        const tr = 0.393 * r + 0.769 * g + 0.189 * b;
        const tg = 0.349 * r + 0.686 * g + 0.168 * b;
        const tb = 0.272 * r + 0.534 * g + 0.131 * b;
        data[i] = Math.min(255, tr * 1.1);
        data[i + 1] = Math.min(255, tg * 0.95);
        data[i + 2] = Math.min(255, tb * 0.7);
    }
    context.putImageData(imageData, 0, 0);
    const gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2);
    gradient.addColorStop(0, 'rgba(0,0,0,0)');
    gradient.addColorStop(0.7, 'rgba(0,0,0,0.1)');
    gradient.addColorStop(1, 'rgba(139,69,19,0.4)');
    context.globalCompositeOperation = 'multiply';
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.globalCompositeOperation = 'overlay';
    context.fillStyle = 'rgba(160,82,45,0.1)';
    for (let x = 0; x < canvas.width; x += 4) {
        for (let y = 0; y < canvas.height; y += 4) {
            if (Math.random() > 0.7) {
                context.fillStyle = `rgba(139,69,19,${Math.random() * 0.1})`;
                context.fillRect(x, y, 2, 2);
            }
        }
    }
    context.globalCompositeOperation = 'source-over';
    context.globalCompositeOperation = 'overlay';
    context.fillStyle = 'rgba(101,67,33,0.15)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.globalCompositeOperation = 'source-over';
};

const CameraModal = ({ show, onClose, onCapture }) => {
    const { t } = useTranslation(); // Inicializar hook
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const streamRef = useRef(null);
    const [error, setError] = useState(null);
    const [capturedImage, setCapturedImage] = useState(null);
    const [isCameraReady, setIsCameraReady] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const stopStream = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
        }
    };

    const startCamera = async () => {
        setError(null);
        setIsLoading(true);
        setIsCameraReady(false);
        try {
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                throw new Error(t('camera_modal.errors.unsupported_browser'));
            }
            stopStream();
            const constraints = { video: { width: { ideal: 1280 }, height: { ideal: 720 }, facingMode: "user" }, audio: false };
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            if (!videoRef.current) {
                stream.getTracks().forEach(track => track.stop());
                return;
            }
            streamRef.current = stream;
            videoRef.current.srcObject = stream;
            await new Promise(resolve => {
                videoRef.current.onloadedmetadata = () => {
                    setIsCameraReady(true);
                    setIsLoading(false);
                    resolve();
                };
            });
        } catch (err) {
            stopStream();
            setIsLoading(false);
            setIsCameraReady(false);
            
            let errorMessage;
            switch(err.name) {
                case "NotAllowedError": errorMessage = t('camera_modal.errors.permission_denied'); break;
                case "NotFoundError": case "DevicesNotFoundError": errorMessage = t('camera_modal.errors.not_found'); break;
                case "NotReadableError": case "TrackStartError": errorMessage = t('camera_modal.errors.in_use'); break;
                case "OverconstrainedError": errorMessage = t('camera_modal.errors.not_compatible'); break;
                case "SecurityError": errorMessage = t('camera_modal.errors.security_error'); break;
                case "AbortError": errorMessage = t('camera_modal.errors.timeout'); break;
                default: errorMessage = err.message.includes("Timeout") ? t('camera_modal.errors.timeout') : t('camera_modal.errors.generic', { message: err.message });
            }
            setError(errorMessage);
        }
    };

    useEffect(() => {
        if (show && !capturedImage) {
            startCamera();
        } else {
            stopStream();
        }
        return () => stopStream();
    }, [show, capturedImage]);

    const handleCapture = () => {
        if (!videoRef.current || !canvasRef.current || !isCameraReady) {
            setError(t('camera_modal.errors.not_ready'));
            return;
        }
        try {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.save();
            context.translate(canvas.width, 0);
            context.scale(-1, 1);
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            context.restore();
            applyMedievalFilter(canvas, context);
            const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
            setCapturedImage(dataUrl);
            stopStream();
            setIsCameraReady(false);
        } catch (err) {
            setError(t('camera_modal.errors.capture_failed'));
        }
    };

    const handleConfirm = () => {
        if (!capturedImage) return;
        const imageFile = dataURLtoFile(capturedImage, 'medieval_capture.jpg');
        onCapture(imageFile);
        setCapturedImage(null);
        onClose();
    };

    const handleRetake = () => {
        setCapturedImage(null);
        setError(null);
    };

    const handleClose = () => {
        setCapturedImage(null);
        setError(null);
        stopStream();
        onClose();
    };

    if (!show) return null;

    return (
        <div className="camera-modal-overlay" onClick={handleClose}>
            <div className="camera-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>{capturedImage ? t('camera_modal.title_captured') : t('camera_modal.title_capturing')}</h3>
                    <p className="medieval-subtitle">
                        {capturedImage ? t('camera_modal.subtitle_captured') : isLoading ? t('camera_modal.subtitle_loading') : t('camera_modal.subtitle_ready')}
                    </p>
                </div>
                
                {error ? (
                    <div className="error-message">
                        {error}
                        <button onClick={startCamera} className="retry-button" disabled={isLoading}>
                            {isLoading ? t('camera_modal.retrying_button') : t('camera_modal.retry_button')}
                        </button>
                    </div>
                ) : (
                    <div className="camera-view-wrapper">
                        <video ref={videoRef} autoPlay playsInline muted className={`camera-video ${capturedImage ? 'hidden' : ''}`}></video>
                        {(isLoading || (!isCameraReady && !capturedImage)) && (
                            <div className="camera-loading-message">
                                <div className="loading-spinner"></div>
                                {isLoading ? t('camera_modal.camera_loading') : t('camera_modal.loading')}
                            </div>
                        )}
                        {capturedImage && 
                            <img src={capturedImage} alt={t('camera_modal.alt_text_preview')} className="medieval-preview" />
                        }
                        <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
                        {!capturedImage && isCameraReady && (
                            <div className="medieval-overlay">
                                <div className="corner-decoration top-left"></div>
                                <div className="corner-decoration top-right"></div>
                                <div className="corner-decoration bottom-left"></div>
                                <div className="corner-decoration bottom-right"></div>
                            </div>
                        )}
                    </div>
                )}
                <div className="modal-content-right">
                    <div className="camera-modal-actions">
                        {capturedImage ? (
                            <>
                                <button onClick={handleConfirm} className="modal-button confirm">
                                    {t('camera_modal.confirm_button')}
                                </button>
                                <button onClick={handleRetake} className="modal-button retake">
                                    {t('camera_modal.retake_button')}
                                </button>
                            </>
                        ) : (
                            <>
                                <button onClick={handleCapture} className="modal-button capture" disabled={!!error || !isCameraReady || isLoading}>
                                    {isLoading ? t('camera_modal.capture_loading_button') : t('camera_modal.capture_button')}
                                </button>
                                <button onClick={handleClose} className="modal-button cancel">
                                    {t('camera_modal.cancel_button')}
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CameraModal;