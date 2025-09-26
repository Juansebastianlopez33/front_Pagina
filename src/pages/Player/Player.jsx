<<<<<<< HEAD
import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTranslation } from 'react-i18next'; // Importar hook
=======
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
import CameraModal from "./Modal/CameraModal";
import "./Player.css";
import knightAvatar from '../../assets/knight.png';

<<<<<<< HEAD
const Player = () => {
    const { t } = useTranslation(); // Inicializar hook
    const workerRef = useRef(null);
    const { token, logout, updateUserProfile } = useAuth();
    const navigate = useNavigate();

    // --- ESTADOS ---
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [editing, setEditing] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const [profileImageKey, setProfileImageKey] = useState(Date.now());
    const [profileData, setProfileData] = useState({ username: "", email: "", descripcion: "", puntajes: [] });
    const [editedData, setEditedData] = useState({ username: "", descripcion: "" });
    const [error, setError] = useState(null);
    const [notification, setNotification] = useState({ message: '', type: '' });
    const [showImageOptions, setShowImageOptions] = useState(false);
    const [showCamera, setShowCamera] = useState(false);
    
    const fileInputRef = useRef(null);
    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        workerRef.current = new Worker(new URL('./imageProcessor.worker.js', import.meta.url), { type: 'module' });
        workerRef.current.onmessage = (event) => {
            const { processedFile, error } = event.data;
            if (error) {
                setNotification({ message: t('player_profile.notifications.worker_error'), type: 'error' });
            } else if (processedFile) {
                const newFile = new File([processedFile], 'processed_image.jpeg', { type: 'image/jpeg' });
                const reader = new FileReader();
                reader.onload = (e) => setProfileImage(e.target.result);
                reader.readAsDataURL(newFile);
=======
// --- FUNCIONES DE PROCESAMIENTO DE IMAGEN ---
// Estas funciones se han movido a imageProcessor.worker.js
// para evitar que el hilo principal se bloquee.

// --- COMPONENTE PRINCIPAL ---

const Player = () => {
    // ----------------------------------------------------
    // CAMBIO CLAVE: Referencia para el trabajador web
    // ----------------------------------------------------
    const workerRef = useRef(null);

    // ----------------------------------------------------
    // CAMBIO CLAVE: useEffect para inicializar y gestionar el Web Worker
    // ----------------------------------------------------
    useEffect(() => {
        // La sintaxis de importación de un Web Worker es diferente.
        // Se crea una nueva instancia de Worker directamente.
        workerRef.current = new Worker(new URL('./imageProcessor.worker.js', import.meta.url), { type: 'module' });

        workerRef.current.onmessage = (event) => {
            const { processedFile, error } = event.data;
            if (error) {
                console.error('Error del trabajador:', error);
                setNotification({ message: 'Error al procesar la imagen.', type: 'error' });
            } else if (processedFile) {
                const newFile = new File([processedFile], 'processed_image.jpeg', {
                    type: 'image/jpeg',
                    lastModified: Date.now()
                });

                // PREVIEW LOCAL: Opcional, solo para una respuesta visual instantánea
                const reader = new FileReader();
                reader.onload = (e) => setProfileImage(e.target.result);
                reader.readAsDataURL(newFile);

                // Subir la imagen procesada al servidor
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                handleImageUpload(newFile);
                setError(null);
            }
        };
<<<<<<< HEAD
        return () => workerRef.current?.terminate();
    }, [t]);

    useEffect(() => {
        document.title = t('player_profile.document_title');
    }, [t]);
=======

        return () => {
            if (workerRef.current) {
                workerRef.current.terminate();
            }
        };
    }, []);

    useEffect(() => {
        document.title = 'Jugador | Gods of Eternia';
    }, []);

    const { token, user, logout } = useAuth();
    const navigate = useNavigate();

    // --- ESTADOS DEL COMPONENTE ---
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const [profileImageKey, setProfileImageKey] = useState(Date.now());
    const [profileData, setProfileData] = useState({
        username: "",
        email: "",
        descripcion: "",
        puntajes: [],
    });
    const [editedData, setEditedData] = useState({
        username: "",
        descripcion: "",
    });
    const [error, setError] = useState(null);
    const [notification, setNotification] = useState({ message: '', type: '' });
    const [showImageOptions, setShowImageOptions] = useState(false);
    const [showCamera, setShowCamera] = useState(false);

    const fileInputRef = useRef(null);
    const defaultAvatar = knightAvatar;
    const API_URL = import.meta.env.VITE_API_URL;

    // --- LÓGICA DE LA APLICACIÓN (FUNCIONES) ---
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2

    useEffect(() => {
        if (notification.message && notification.type !== 'loading') {
            const timer = setTimeout(() => setNotification({ message: '', type: '' }), 3000);
            return () => clearTimeout(timer);
        }
    }, [notification]);

    const fetchProfileData = useCallback(async () => {
        setLoading(true);
        setError(null);
<<<<<<< HEAD
        if (!token) { navigate("/login"); return; }
        try {
            const response = await fetch(`${API_URL.replace(/\/$/, '')}/user/perfil`, { headers: { "Authorization": `Bearer ${token}` }});
            const data = await response.json();
=======

        if (!token) {
            navigate("/login");
            return;
        }

        try {
            const response = await fetch(`${API_URL.endsWith('/') ? API_URL.slice(0, -1) : API_URL}/user/perfil`, {
                headers: { "Authorization": `Bearer ${token}` },
            });
            const data = await response.json();

>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
            if (response.ok) {
                setProfileData({
                    username: data.username || "",
                    email: data.email || "",
<<<<<<< HEAD
                    descripcion: data.descripcion || t('player_profile.default_description'),
                    puntajes: data.puntajes || [],
                });
                setProfileImage(data.foto_perfil);
                setProfileImageKey(Date.now());
                updateUserProfile({ username: data.username, foto_perfil: data.foto_perfil });
            } else {
                setError(data.error || t('player_profile.notifications.load_profile_error'));
                if (response.status === 401 || response.status === 403) logout();
            }
        } catch (err) {
            setError(t('player_profile.notifications.server_connection_error'));
        } finally {
            setLoading(false);
        }
    }, [token, navigate, logout, API_URL, updateUserProfile, t]);

    useEffect(() => { fetchProfileData(); }, [fetchProfileData]);

    const handleImageUpload = async (file) => {
        if (!file || !token) return;
        setUploading(true);
        setNotification({ message: t('player_profile.notifications.uploading_image'), type: 'loading' });
        const formData = new FormData();
        formData.append('profile_picture', file);
        try {
            const response = await fetch(`${API_URL.replace(/\/$/, '')}/user/perfil/foto`, { method: 'PUT', headers: { 'Authorization': `Bearer ${token}` }, body: formData });
            const result = await response.json();
            if (response.ok) {
                setProfileImage(result.foto_perfil_url);
                setProfileImageKey(Date.now());
                setNotification({ message: result.message || t('player_profile.notifications.image_updated_success'), type: 'success' });
            } else {
                setNotification({ message: result.error || t('player_profile.notifications.upload_image_error'), type: 'error' });
                fetchProfileData();
            }
        } catch (err) {
            setNotification({ message: t('player_profile.notifications.connection_error'), type: 'error' });
        } finally {
            setUploading(false);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (file.size > 5 * 1024 * 1024) { setNotification({ message: t('player_profile.notifications.image_too_large'), type: 'error' }); return; }
        if (!file.type.startsWith('image/')) { setNotification({ message: t('player_profile.notifications.invalid_file_type'), type: 'error' }); return; }
        setNotification({ message: t('player_profile.notifications.applying_filter'), type: 'loading' });
=======
                    descripcion: data.descripcion || "Un valiente héroe cuya historia está por escribirse...",
                    puntajes: data.puntajes || [],
                });
                setEditedData({ username: data.username, descripcion: data.descripcion });
                setProfileImage(data.foto_perfil);
                setProfileImageKey(Date.now());
            } else {
                setError(data.error || "Error al cargar el perfil.");
                if (response.status === 401 || response.status === 403) logout();
            }
        } catch (err) {
            console.error("Error de conexión:", err);
            setError("No se pudo conectar con el servidor.");
        } finally {
            setLoading(false);
        }
    }, [token, navigate, logout, API_URL, defaultAvatar]);

    useEffect(() => {
        fetchProfileData();
    }, [fetchProfileData]);

    const handleImageUpload = async (file) => {
        if (!file || !token) return;

        setNotification({ message: 'Subiendo imagen...', type: 'loading' });
        const formData = new FormData();
        formData.append('profile_picture', file);

        try {
            const response = await fetch(`${API_URL.endsWith('/') ? API_URL.slice(0, -1) : API_URL}/user/perfil/foto`, {
                method: 'PUT',
                headers: { 'Authorization': `Bearer ${token}` },
                body: formData,
            });
            const result = await response.json();

            if (response.ok) {
                setProfileImage(result.foto_perfil_url);
                setProfileImageKey(Date.now());
                setNotification({ message: result.message || '¡Imagen actualizada con estilo medieval!', type: 'success' });
            } else {
                setNotification({ message: result.error || 'Error al subir la imagen.', type: 'error' });
                fetchProfileData();
            }
        } catch (err) {
            console.error("Error de conexión al subir imagen:", err);
            setNotification({ message: 'Error de conexión.', type: 'error' });
        }
    };

    // ----------------------------------------------------
    // CAMBIO CLAVE: handleImageChange ahora envía el trabajo al worker
    // ----------------------------------------------------
    const handleImageChange = (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;

        if (file.size > 5 * 1024 * 1024) {
            setNotification({ message: "La imagen no puede ser mayor a 5MB", type: 'error' });
            return;
        }
        if (!file.type.startsWith('image/')) {
            setNotification({ message: "Por favor selecciona un archivo de imagen válido.", type: 'error' });
            return;
        }

        setNotification({ message: 'Aplicando filtro medieval...', type: 'loading' });

        // Envía el archivo al trabajador web
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
        workerRef.current.postMessage({ file });
    };

    const handlePhotoCaptured = (imageFile) => {
        if (!imageFile) return;
<<<<<<< HEAD
        const reader = new FileReader();
        reader.onload = (event) => setProfileImage(event.target.result);
        reader.readAsDataURL(imageFile);
        handleImageUpload(imageFile);
    };

    const handleEdit = () => {
        setEditing(true);
        setEditedData({ username: profileData.username, descripcion: profileData.descripcion });
    };
    const handleCancel = () => {
        setEditing(false);
        setEditedData({ username: profileData.username, descripcion: profileData.descripcion });
=======

        // PREVIEW LOCAL: Opcional, solo para una respuesta visual instantánea ANTES de la subida
        const reader = new FileReader();
        reader.onload = (event) => setProfileImage(event.target.result);
        reader.readAsDataURL(imageFile);

        // Subir la imagen capturada al servidor
        handleImageUpload(imageFile);
    };

    const handleProfileImageClick = () => setShowImageOptions(true);
    const handleSelectFromGallery = () => {
        setShowImageOptions(false);
        fileInputRef.current.click();
    };
    const handleTakePhoto = () => {
        setShowImageOptions(false);
        setShowCamera(true);
    };
    const handleEdit = () => setEditing(true);
    const handleCancel = () => {
        setEditing(false);
        setEditedData({
            username: profileData.username,
            descripcion: profileData.descripcion,
        });
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
        setError(null);
    };

    const handleSave = async () => {
<<<<<<< HEAD
        setSaving(true);
        setError(null);
        try {
            const response = await fetch(`${API_URL.replace(/\/$/, '')}/user/perfil`, {
                method: "PUT",
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                body: JSON.stringify(editedData),
            });
            const result = await response.json();
            if (response.ok) {
                await fetchProfileData();
                setEditing(false);
                setNotification({ message: t('player_profile.notifications.profile_updated_success'), type: 'success' });
            } else {
                setError(result.error || t('player_profile.notifications.profile_update_error'));
            }
        } catch (err) {
            setError(t('player_profile.notifications.server_connection_error'));
        } finally {
            setSaving(false);
=======
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${API_URL.endsWith('/') ? API_URL.slice(0, -1) : API_URL}/user/perfil`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(editedData),
            });
            const result = await response.json();

            if (response.ok) {
                await fetchProfileData();
                setEditing(false);
                setNotification({ message: 'Perfil actualizado correctamente.', type: 'success' });
            } else {
                setError(result.error || "Error al actualizar el perfil.");
            }
        } catch (err) {
            console.error("Error de conexión al guardar:", err);
            setError("No se pudo conectar con el servidor.");
        } finally {
            setLoading(false);
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedData((prevData) => ({ ...prevData, [name]: value }));
    };

<<<<<<< HEAD
    const statsData = useMemo(() => [
        { label: t('player_profile.stats.level'), value: 5 },
        { label: t('player_profile.stats.victories'), value: 12 },
        { label: t('player_profile.stats.badges'), value: 'Dragones del Alba' }
    ], [t]);

    if (loading && !profileData.username) {
        return <div className="loading-screen">{t('player_profile.loading_profile')}</div>;
=======
    // --- DATOS PARA RENDERIZAR ---
    const statsData = [
        { label: 'Nivel', value: 5 },
        { label: 'Victorias', value: 12 },
        { label: 'Insignias', value: 'Dragones del Alba' }
    ];

    if (loading && !profileData.username) {
        return <div className="loading-screen">Cargando Perfil...</div>;
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
    }

    return (
        <>
<<<<<<< HEAD
            <div className={`notification ${notification.type} ${notification.message ? 'show' : ''}`}>{notification.message}</div>
            {showImageOptions && (
                <div className="image-options-modal-overlay" onClick={() => setShowImageOptions(false)}>
                    <div className="image-options-modal" onClick={(e) => e.stopPropagation()}>
                        <h3>{t('player_profile.image_modal.title')}</h3>
                        <p className="modal-subtitle">{t('player_profile.image_modal.subtitle')}</p>
                        <button className="modal-button" onClick={() => { setShowImageOptions(false); setShowCamera(true); }}>{t('player_profile.image_modal.capture_button')}</button>
                        <button className="modal-button" onClick={() => { setShowImageOptions(false); fileInputRef.current.click(); }}>{t('player_profile.image_modal.transform_button')}</button>
                        <button className="modal-button cancel" onClick={() => setShowImageOptions(false)}>{t('player_profile.image_modal.cancel_button')}</button>
                    </div>
                </div>
            )}
            <CameraModal show={showCamera} onClose={() => setShowCamera(false)} onCapture={handlePhotoCaptured} />

            <div className="profile-container">
                <div className="profile-box">
                    <h2>{t('player_profile.title')}</h2>
                    {error && <div className="error-message">{error}</div>}
                    <div className="profile-main-content">
                        <div className="profile-image-container">
                            <img src={profileImage?.startsWith("data:") ? profileImage : `${profileImage}?v=${profileImageKey}`} alt={t('player_profile.alt_player_profile')} className="profile-image" onError={(e) => { e.target.src = `${API_URL}/uploads/default-avatar.png`; }} />
                            <div className="image-upload-button" onClick={() => setShowImageOptions(true)} title={t('player_profile.change_image_tooltip')}>🏰</div>
                            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} />
=======
            <div className={`notification ${notification.type} ${notification.message ? 'show' : ''}`}>
                {notification.message}
            </div>

            {showImageOptions && (
                <div className="image-options-modal-overlay" onClick={() => setShowImageOptions(false)}>
                    <div className="image-options-modal" onClick={(e) => e.stopPropagation()}>
                        <h3>🏰 Cambiar Retrato Medieval</h3>
                        <p className="modal-subtitle">Elige cómo crear tu retrato épico</p>
                        <button className="modal-button" onClick={handleTakePhoto}>📸 Capturar Retrato</button>
                        <button className="modal-button" onClick={handleSelectFromGallery}>🖼 Transformar Imagen</button>
                        <button className="modal-button cancel" onClick={() => setShowImageOptions(false)}>❌ Cancelar</button>
                    </div>
                </div>
            )}

            <CameraModal
                show={showCamera}
                onClose={() => setShowCamera(false)}
                onCapture={handlePhotoCaptured}
            />

            <div className="profile-container">
                <div className="profile-box">
                    <h2>Perfil del Héroe</h2>
                    {error && <div className="error-message">{error}</div>}
                    <div className="profile-main-content">
                        <div className="profile-image-container">
                            <img
                                src={
                                    profileImage && profileImage.startsWith("data:")
                                    ? profileImage
                                    : `${profileImage && profileImage !== "null" && profileImage !== "undefined" ? profileImage : ""}?v=${profileImageKey}`
                                }
                                alt="Perfil del jugador"
                                className="profile-image"
                                onError={(e) => { e.target.src = `${API_URL}/uploads/default-avatar.png`; }}
                            />


                            <div className="image-upload-button" onClick={handleProfileImageClick} title="Cambiar imagen">
                                🏰
                            </div>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ display: "none" }}
                            />
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                        </div>
                        <div className="profile-details">
                            {editing ? (
                                <div className="profile-edit">
                                    <div className="input-group">
<<<<<<< HEAD
                                        <label htmlFor="usernameEdit">{t('player_profile.edit_form.username_label')}</label>
                                        <input id="usernameEdit" type="text" name="username" value={editedData.username} onChange={handleChange} maxLength={20} />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="descriptionEdit">{t('player_profile.edit_form.description_label')}</label>
                                        <textarea id="descriptionEdit" name="descripcion" value={editedData.descripcion} onChange={handleChange} maxLength={200} rows={4} placeholder={t('player_profile.edit_form.description_placeholder')} />
                                        <div className="char-counter">{editedData.descripcion?.length || 0}/200</div>
                                    </div>
                                    <div className="button-group">
                                        <button className="save-button" onClick={handleSave} disabled={saving}>{saving ? t('player_profile.edit_form.saving_button') : t('player_profile.edit_form.save_button')}</button>
                                        <button className="cancel-button" onClick={handleCancel} disabled={saving}>{t('player_profile.edit_form.cancel_button')}</button>
=======
                                        <label htmlFor="usernameEdit">Nombre de héroe:</label>
                                        <input
                                            id="usernameEdit" type="text" name="username"
                                            value={editedData.username} onChange={handleChange} maxLength={20}
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="descriptionEdit">Descripción:</label>
                                        <textarea
                                            id="descriptionEdit" name="descripcion"
                                            value={editedData.descripcion} onChange={handleChange}
                                            maxLength={200} rows={4}
                                            placeholder="Describe tu historia como héroe..."
                                        />
                                        <div className="char-counter">{editedData.descripcion?.length || 0}/200</div>
                                    </div>
                                    <div className="button-group">
                                        <button className="save-button" onClick={handleSave} disabled={loading}>
                                            {loading ? 'Guardando...' : '💾 Guardar'}
                                        </button>
                                        <button className="cancel-button" onClick={handleCancel} disabled={loading}>
                                            ❌ Cancelar
                                        </button>
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                                    </div>
                                </div>
                            ) : (
                                <div className="profile-info">
                                    <div className="username-section">
<<<<<<< HEAD
                                        <h3>{profileData.username || t('player_profile.anonymous_hero')}</h3>
                                        <button className="edit-button" onClick={handleEdit} title={t('player_profile.edit_profile_tooltip')}>✏️</button>
                                    </div>
                                    <div className="description"><p>{profileData.descripcion}</p></div>
                                    {profileData.email && <div className="email-info">📧 {profileData.email}</div>}
=======
                                        <h3>{profileData.username || "Héroe Anónimo"}</h3>
                                        <button className="edit-button" onClick={handleEdit} title="Editar perfil">✏️</button>
                                    </div>
                                    <div className="description">
                                        <p>{profileData.descripcion}</p>
                                    </div>
                                    {profileData.email && <div className="email-info">📧 {profileData.email}</div>}
                                    
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                                    <div className="stats">
                                        {statsData.map((stat) => (
                                            <div className="stat" key={stat.label}>
                                                <span className="stat-label">{stat.label}</span>
                                                <span className="stat-value">{stat.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Player;