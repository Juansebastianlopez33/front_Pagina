import React, { useState, useEffect, useRef } from 'react';
<<<<<<< HEAD
import { useTranslation } from 'react-i18next'; // Importar hook
import './CameraModal.css';

// Las funciones de ayuda (dataURLtoFile, applyMedievalFilter) no contienen texto visible,
// por lo que se mantienen exactamente igual.
=======
import './CameraModal.css';

// Función de ayuda para convertir el DataURL de la imagen capturada a un objeto File
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
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

<<<<<<< HEAD
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
=======
// Función para aplicar filtro medieval
const applyMedievalFilter = (canvas, context) => {
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    // Aplicar efecto sepia y ajustes de color medievales
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        // Fórmula sepia mejorada con toque medieval
        const tr = 0.393 * r + 0.769 * g + 0.189 * b;
        const tg = 0.349 * r + 0.686 * g + 0.168 * b;
        const tb = 0.272 * r + 0.534 * g + 0.131 * b;
        
        // Ajustar para tono más cálido y dorado (medieval)
        data[i] = Math.min(255, tr * 1.1); // Más rojo/dorado
        data[i + 1] = Math.min(255, tg * 0.95); // Menos verde
        data[i + 2] = Math.min(255, tb * 0.7); // Menos azul para tono cálido
    }
    
    context.putImageData(imageData, 0, 0);
    
    // Aplicar viñeta medieval
    const gradient = context.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
    );
    gradient.addColorStop(0, 'rgba(0,0,0,0)');
    gradient.addColorStop(0.7, 'rgba(0,0,0,0.1)');
    gradient.addColorStop(1, 'rgba(139,69,19,0.4)'); // Viñeta marrón medieval
    
    context.globalCompositeOperation = 'multiply';
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Añadir textura de pergamino
    context.globalCompositeOperation = 'overlay';
    context.fillStyle = 'rgba(160,82,45,0.1)'; // Color pergamino
    
    // Crear patrón de textura simple
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
    for (let x = 0; x < canvas.width; x += 4) {
        for (let y = 0; y < canvas.height; y += 4) {
            if (Math.random() > 0.7) {
                context.fillStyle = `rgba(139,69,19,${Math.random() * 0.1})`;
                context.fillRect(x, y, 2, 2);
            }
        }
    }
<<<<<<< HEAD
    context.globalCompositeOperation = 'source-over';
    context.globalCompositeOperation = 'overlay';
    context.fillStyle = 'rgba(101,67,33,0.15)';
=======
    
    // Resetear el modo de composición
    context.globalCompositeOperation = 'source-over';
    
    // Ajustar contraste final
    context.globalCompositeOperation = 'overlay';
    context.fillStyle = 'rgba(101,67,33,0.15)'; // Overlay dorado medieval
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.globalCompositeOperation = 'source-over';
};

const CameraModal = ({ show, onClose, onCapture }) => {
<<<<<<< HEAD
    const { t } = useTranslation(); // Inicializar hook
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
=======
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const previewCanvasRef = useRef(null);
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
    const streamRef = useRef(null);
    const [error, setError] = useState(null);
    const [capturedImage, setCapturedImage] = useState(null);
    const [isCameraReady, setIsCameraReady] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

<<<<<<< HEAD
    const stopStream = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
=======
    // Función para detener el stream
    const stopStream = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => {
                track.stop();
            });
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
            streamRef.current = null;
        }
    };

<<<<<<< HEAD
=======
    // Función para iniciar la cámara con mejor manejo de errores
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
    const startCamera = async () => {
        setError(null);
        setIsLoading(true);
        setIsCameraReady(false);
<<<<<<< HEAD
        try {
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                throw new Error(t('camera_modal.errors.unsupported_browser'));
            }
            stopStream();
            const constraints = { video: { width: { ideal: 1280 }, height: { ideal: 720 }, facingMode: "user" }, audio: false };
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
=======

        try {
            // Verificar soporte del navegador
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                throw new Error("Tu navegador no soporta la API de cámara o estás en un entorno no seguro (requiere HTTPS).");
            }

            // Detener cualquier stream existente
            stopStream();

            // Configuraciones más flexibles para evitar timeouts
            const constraints = {
                video: {
                    width: { 
                        ideal: 1280, 
                        max: 1920,
                        min: 320 
                    },
                    height: { 
                        ideal: 720, 
                        max: 1080,
                        min: 240 
                    },
                    facingMode: "user",
                    frameRate: { ideal: 30, max: 30 }
                },
                audio: false // Asegurar que no pida audio
            };

            console.log('Solicitando acceso a la cámara...');
            
            // Usar Promise.race para timeout manual
            const streamPromise = navigator.mediaDevices.getUserMedia(constraints);
            const timeoutPromise = new Promise((_, reject) => {
                setTimeout(() => reject(new Error('Timeout: La cámara tardó demasiado en responder')), 30000);
            });

            const stream = await Promise.race([streamPromise, timeoutPromise]);
            
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
            if (!videoRef.current) {
                stream.getTracks().forEach(track => track.stop());
                return;
            }
<<<<<<< HEAD
            streamRef.current = stream;
            videoRef.current.srcObject = stream;
            await new Promise(resolve => {
                videoRef.current.onloadedmetadata = () => {
=======

            streamRef.current = stream;
            videoRef.current.srcObject = stream;

            // Esperar a que el video esté listo
            await new Promise((resolve, reject) => {
                const video = videoRef.current;
                if (!video) {
                    reject(new Error('Elemento de video no disponible'));
                    return;
                }

                const onLoadedMetadata = () => {
                    console.log('Video metadata cargada');
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                    setIsCameraReady(true);
                    setIsLoading(false);
                    resolve();
                };
<<<<<<< HEAD
            });
        } catch (err) {
=======

                const onError = (e) => {
                    console.error('Error en el video:', e);
                    reject(new Error('Error al cargar el video'));
                };

                video.addEventListener('loadedmetadata', onLoadedMetadata, { once: true });
                video.addEventListener('error', onError, { once: true });

                // Timeout para loadedmetadata
                setTimeout(() => {
                    reject(new Error('Timeout esperando metadata del video'));
                }, 5000);

                video.play().catch(reject);
            });

        } catch (err) {
            console.error("Error al acceder a la cámara:", err);
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
            stopStream();
            setIsLoading(false);
            setIsCameraReady(false);
            
<<<<<<< HEAD
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
=======
            let errorMessage = "Error desconocido al acceder a la cámara.";
            
            if (err.name === "NotAllowedError" || err.message.includes("denied")) {
                errorMessage = "Permiso de cámara denegado. Por favor, permite el acceso a la cámara en tu navegador.";
            } else if (err.name === "NotFoundError" || err.name === "DevicesNotFoundError") {
                errorMessage = "No se encontró ninguna cámara. Asegúrate de que tienes una conectada y funcionando.";
            } else if (err.name === "NotReadableError" || err.name === "TrackStartError") {
                errorMessage = "La cámara está siendo usada por otra aplicación. Cierra otras aplicaciones que puedan estar usando la cámara.";
            } else if (err.name === "OverconstrainedError") {
                errorMessage = "La configuración de cámara solicitada no es compatible. Intenta con otra cámara.";
            } else if (err.name === "SecurityError") {
                errorMessage = "Error de seguridad. Asegúrate de estar en una conexión segura (HTTPS).";
            } else if (err.name === "AbortError" || err.message.includes("Timeout")) {
                errorMessage = "La cámara tardó demasiado en responder. Intenta recargar la página o reiniciar tu navegador.";
            } else {
                errorMessage = `Error: ${err.message}`;
            }
            
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
            setError(errorMessage);
        }
    };

    useEffect(() => {
        if (show && !capturedImage) {
            startCamera();
        } else {
            stopStream();
<<<<<<< HEAD
        }
        return () => stopStream();
=======
            setIsCameraReady(false);
            setIsLoading(false);
        }

        // Cleanup al desmontar el componente
        return () => {
            stopStream();
        };
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
    }, [show, capturedImage]);

    const handleCapture = () => {
        if (!videoRef.current || !canvasRef.current || !isCameraReady) {
<<<<<<< HEAD
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
=======
            setError("La cámara no está lista para capturar. Espera un momento e intenta de nuevo.");
            return;
        }

        try {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            
            // Usar las dimensiones reales del video
            canvas.width = video.videoWidth || video.clientWidth;
            canvas.height = video.videoHeight || video.clientHeight;

            const context = canvas.getContext('2d');
            
            // Limpiar el canvas
            context.clearRect(0, 0, canvas.width, canvas.height);
            
            // Transformación para efecto espejo
            context.save();
            context.translate(canvas.width, 0);
            context.scale(-1, 1);

            // Dibuja la imagen del video en el canvas
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            context.restore();
            
            // Aplicar el filtro medieval
            applyMedievalFilter(canvas, context);
            
            const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
            setCapturedImage(dataUrl);

            // Detener el stream después de capturar
            stopStream();
            setIsCameraReady(false);
        } catch (err) {
            console.error('Error al capturar:', err);
            setError('Error al capturar la imagen. Intenta de nuevo.');
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
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
<<<<<<< HEAD
=======
        // Reiniciar la cámara
        setTimeout(() => {
            if (show) {
                startCamera();
            }
        }, 100);
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
    };

    const handleClose = () => {
        setCapturedImage(null);
        setError(null);
        stopStream();
        onClose();
    };

<<<<<<< HEAD
    if (!show) return null;
=======
    if (!show) {
        return null;
    }
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2

    return (
        <div className="camera-modal-overlay" onClick={handleClose}>
            <div className="camera-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
<<<<<<< HEAD
                    <h3>{capturedImage ? t('camera_modal.title_captured') : t('camera_modal.title_capturing')}</h3>
                    <p className="medieval-subtitle">
                        {capturedImage ? t('camera_modal.subtitle_captured') : isLoading ? t('camera_modal.subtitle_loading') : t('camera_modal.subtitle_ready')}
=======
                    <h3>{capturedImage ? "Retrato Medieval" : "Cámara del Cronista"}</h3>
                    <p className="medieval-subtitle">
                        {capturedImage 
                            ? "Tu retrato ha sido bendecido con la esencia medieval" 
                            : isLoading 
                                ? "Preparando la cámara mágica..." 
                                : "Prepárate para tu retrato épico"
                        }
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                    </p>
                </div>
                
                {error ? (
                    <div className="error-message">
                        {error}
<<<<<<< HEAD
                        <button onClick={startCamera} className="retry-button" disabled={isLoading}>
                            {isLoading ? t('camera_modal.retrying_button') : t('camera_modal.retry_button')}
=======
                        <button 
                            onClick={startCamera} 
                            className="retry-button"
                            disabled={isLoading}
                        >
                            {isLoading ? "Intentando..." : "🔄 Reintentar"}
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                        </button>
                    </div>
                ) : (
                    <div className="camera-view-wrapper">
<<<<<<< HEAD
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
=======
                        <video 
                            ref={videoRef} 
                            autoPlay 
                            playsInline 
                            muted
                            className={`camera-video ${capturedImage ? 'hidden' : ''}`}
                        ></video>
                        
                        {(isLoading || (!isCameraReady && !capturedImage)) && (
                            <div className="camera-loading-message">
                                <div className="loading-spinner"></div>
                                {isLoading ? "Iniciando cámara..." : "Cargando..."}
                            </div>
                        )}

                        {capturedImage && 
                            <img 
                                src={capturedImage} 
                                alt="Retrato Medieval" 
                                className="medieval-preview"
                            />
                        }
                        
                        <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
                        <canvas ref={previewCanvasRef} style={{ display: 'none' }}></canvas>
                        
                        {/* Overlay decorativo medieval cuando está capturando */}
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
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
<<<<<<< HEAD
=======

>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                <div className="modal-content-right">
                    <div className="camera-modal-actions">
                        {capturedImage ? (
                            <>
                                <button onClick={handleConfirm} className="modal-button confirm">
<<<<<<< HEAD
                                    {t('camera_modal.confirm_button')}
                                </button>
                                <button onClick={handleRetake} className="modal-button retake">
                                    {t('camera_modal.retake_button')}
=======
                                    ⚔️ Usar este Retrato
                                </button>
                                <button onClick={handleRetake} className="modal-button retake">
                                    🔄 Nuevo Retrato
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                                </button>
                            </>
                        ) : (
                            <>
<<<<<<< HEAD
                                <button onClick={handleCapture} className="modal-button capture" disabled={!!error || !isCameraReady || isLoading}>
                                    {isLoading ? t('camera_modal.capture_loading_button') : t('camera_modal.capture_button')}
                                </button>
                                <button onClick={handleClose} className="modal-button cancel">
                                    {t('camera_modal.cancel_button')}
=======
                                <button 
                                    onClick={handleCapture} 
                                    className="modal-button capture" 
                                    disabled={!!error || !isCameraReady || isLoading}
                                >
                                    {isLoading ? "⏳ Cargando..." : "📸 Crear Retrato Medieval"}
                                </button>
                                <button onClick={handleClose} className="modal-button cancel">
                                    ❌ Cancelar
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
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