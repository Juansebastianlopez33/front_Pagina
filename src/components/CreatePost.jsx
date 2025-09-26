import React, { useState, useEffect, useRef } from "react";
<<<<<<< HEAD
import { useTranslation } from 'react-i18next'; // Importar hook

const CreatePost = ({ onPostCreated, postToEdit, onCancelEdit, onCancelCreate, showNotification, currentUser, categories }) => {
    const { t } = useTranslation(); // Inicializar hook
=======

const CreatePost = ({ onPostCreated, postToEdit, onCancelEdit, onCancelCreate, showNotification, currentUser, categories }) => {
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedCategoryId, setSelectedCategoryId] = useState('');
    const fileInputRef = useRef(null);

    const isEditing = !!postToEdit;

    useEffect(() => {
        if (isEditing && postToEdit) {
            setTitle(postToEdit.titulo || '');
            setContent(postToEdit.texto || ''); 
            setSelectedCategoryId(postToEdit.categoria_id || postToEdit.categoria?.id || '');
            setImagePreview(
                postToEdit.imagen_url || 
                (postToEdit.imagenes && postToEdit.imagenes.length > 0 ? postToEdit.imagenes[0].url : '') || ''
            );
            setImageFile(null);
        } else {
            setTitle('');
            setContent('');
            setImageFile(null);
            setImagePreview('');
            setSelectedCategoryId('');
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        }
    }, [isEditing, postToEdit]);

    const API_URL = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem('access_token');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        } else {
            setImageFile(null);
            setImagePreview('');
        }
    };

    const handleClearImage = () => {
        setImageFile(null);
        setImagePreview('');
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleCancel = () => {
        if (isEditing) {
            onCancelEdit?.();
        } else {
            onCancelCreate?.();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!currentUser?.verificado) {
<<<<<<< HEAD
            showNotification(t('create_post.notifications.verification_needed'), "error");
=======
            showNotification("Debes verificar tu cuenta para poder publicar.", "error");
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
            setIsSubmitting(false);
            return;
        }

        if (!title.trim() || !content.trim() || !selectedCategoryId) {
<<<<<<< HEAD
            showNotification(t('create_post.notifications.fill_all_fields'), "error");
=======
            showNotification("Por favor, rellena todos los campos obligatorios.", "error");
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
            setIsSubmitting(false);
            return;
        }

        const formData = new FormData();
        formData.append('titulo', title);
        formData.append('texto', content);
        formData.append('categoria_id', selectedCategoryId);
<<<<<<< HEAD
=======

>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
        if (imageFile) {
            formData.append('imagen', imageFile); 
        }

        const method = isEditing ? 'PUT' : 'POST';
        const urlPath = isEditing ? `/blog/editar-publicacion/${postToEdit.id}` : '/blog/crear-publicacion';
<<<<<<< HEAD
        const successMessage = isEditing ? t('create_post.notifications.update_success') : t('create_post.notifications.create_success');
        const errorMessage = isEditing ? t('create_post.notifications.update_error') : t('create_post.notifications.create_error');
=======
        const successMessage = isEditing ? 'Crónica actualizada exitosamente!' : 'Crónica publicada exitosamente!';
        const errorMessage = isEditing ? 'Error al actualizar la crónica.' : 'Error al publicar la crónica.';
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2

        try {
            const url = new URL(urlPath, API_URL);
            const response = await fetch(url.href, {
                method,
                headers: { 'Authorization': `Bearer ${token}` },
                body: formData
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.error || errorMessage);

            showNotification(successMessage, 'success');
<<<<<<< HEAD
            if (!isEditing) onPostCreated();
            handleCancel();
        } catch (error) {
            console.error("Error in handleSubmit:", error);
=======

            if (!isEditing) onPostCreated();

            handleCancel();
        } catch (error) {
            console.error("Error en handleSubmit:", error);
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
            showNotification(error.message || errorMessage, 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const defaultImagePlaceholder = "https://placehold.co/800x450/3c2f21/F0F0F0?text=Estandarte";

    return (
        <div className="create-post-container">
<<<<<<< HEAD
            <h2>{isEditing ? t('create_post.edit_title') : t('create_post.create_title')}</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="title">{t('create_post.title_label')}</label>
=======
            <h2>{isEditing ? 'Editar Crónica' : 'Forjar Nueva Crónica'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="title">Título de la Crónica:</label>
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
<<<<<<< HEAD
                        placeholder={t('create_post.title_placeholder')}
=======
                        placeholder="Un título épico para tu aventura..."
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                        maxLength={100}
                        required
                        disabled={isSubmitting}
                    />
                    <div className="character-count">{title.length}/100</div>
                </div>

                <div className="input-group">
<<<<<<< HEAD
                    <label htmlFor="content">{t('create_post.content_label')}</label>
=======
                    <label htmlFor="content">Contenido de la Crónica:</label>
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
<<<<<<< HEAD
                        placeholder={t('create_post.content_placeholder')}
=======
                        placeholder="Detalla tu gesta, tus descubrimientos o tus reflexiones..."
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                        rows="8"
                        maxLength={2000}
                        required
                        disabled={isSubmitting}
                    ></textarea>
                    <div className="character-count">{content.length}/2000</div>
                </div>

                <div className="input-group select-wrapper">
<<<<<<< HEAD
                    <label htmlFor="category">{t('create_post.category_label')}</label>
=======
                    <label htmlFor="category">Categoría:</label>
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                    <select
                        id="category"
                        value={selectedCategoryId}
                        onChange={(e) => setSelectedCategoryId(e.target.value)}
                        required
                        disabled={isSubmitting}
                    >
<<<<<<< HEAD
                        <option value="">{t('create_post.category_select')}</option>
=======
                        <option value="">Selecciona una categoría...</option>
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="input-group">
                    <label htmlFor="imageUpload" className="image-upload-label">
<<<<<<< HEAD
                        {imagePreview ? t('create_post.image_change') : t('create_post.image_select')}
=======
                        {imagePreview ? 'Cambiar Estandarte' : 'Seleccionar Estandarte'}
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                    </label>
                    <input
                        id="imageUpload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        disabled={isSubmitting}
                        ref={fileInputRef}
                    />
                    <p className="image-recommendation">
<<<<<<< HEAD
                        {t('create_post.image_recommendation')}
=======
                        Recomendado: imagen de 800px de ancho.
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                    </p>
                    {imagePreview && (
                        <div className="image-preview-container">
                            <img src={imagePreview} alt="Vista previa" className="image-preview" onError={(e) => { e.target.onerror = null; e.target.src = defaultImagePlaceholder; }} />
                            <button type="button" onClick={handleClearImage} className="clear-image-button" disabled={isSubmitting}>
<<<<<<< HEAD
                                {t('create_post.image_clear')}
=======
                                Borrar Imagen
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                            </button>
                        </div>
                    )}
                </div>

                <div className="button-group">
                    <button type="button" className="cancel-button" onClick={handleCancel} disabled={isSubmitting}>
<<<<<<< HEAD
                        {t('create_post.cancel_button')}
                    </button>
                    <button type="submit" className="save-button" disabled={isSubmitting}>
                        {isSubmitting 
                            ? (isEditing ? t('create_post.submit_button_saving') : t('create_post.submit_button_publishing')) 
                            : (isEditing ? t('create_post.submit_button_save_changes') : t('create_post.submit_button_publish'))}
=======
                        Cancelar
                    </button>
                    <button type="submit" className="save-button" disabled={isSubmitting}>
                        {isSubmitting ? (isEditing ? 'Guardando...' : 'Publicando...') : (isEditing ? 'Guardar Cambios' : 'Publicar Crónica')}
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreatePost;