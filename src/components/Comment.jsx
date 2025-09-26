import React, { useState, useRef, useEffect } from 'react';
<<<<<<< HEAD
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next'; // Importar hook

const Comment = ({ comment, currentUser, postAuthorId, onDelete, onEdit }) => {
    const { t, i18n } = useTranslation(); // Inicializar hook
=======
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const Comment = ({ comment, currentUser, postAuthorId, onDelete, onEdit }) => {
    // --- Todos los Hooks se declaran aquí arriba, incondicionalmente ---
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(comment?.texto || ''); 
    const textareaRef = useRef(null);

<<<<<<< HEAD
=======
    // ✅ CORRECCIÓN: El useEffect se mueve aquí arriba junto a los otros Hooks
    // para asegurar que se llame en cada renderizado.
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
    useEffect(() => {
        if (isEditing && textareaRef.current) {
            textareaRef.current.focus();
            const len = textareaRef.current.value.length;
            textareaRef.current.setSelectionRange(len, len);
        }
    }, [isEditing]);

<<<<<<< HEAD
    if (!comment || typeof comment.texto !== 'string') {
        console.warn("Invalid comment or comment text is not a string, it will not be rendered.");
        return null; 
    }

=======
    // --- El 'early return' se mantiene, pero DESPUÉS de todas las llamadas a Hooks ---
    if (!comment || typeof comment.texto !== 'string') {
        console.warn("Comentario inválido o texto de comentario no es una cadena, no se renderizará.");
        return null; 
    }

    // --- El resto de la lógica del componente continúa aquí ---
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
    const isCommentOwner = !!currentUser && currentUser.id === comment.autor_id;
    const isPostOwner = !!currentUser && currentUser.id === postAuthorId;
    
    const canDelete = isCommentOwner || isPostOwner;
    const canEdit = isCommentOwner;

    const handleEditClick = () => {
        setEditedText(comment.texto);
        setIsEditing(true);
    };

    const handleSaveEdit = () => {
        if (typeof onEdit === 'function' && editedText.trim() !== '') {
            onEdit(comment.id, editedText.trim());
        } else if (editedText.trim() === '') {
<<<<<<< HEAD
            // Usamos la traducción para el mensaje de error
            console.error(t('comment.empty_comment_error'));
=======
            console.error("El comentario no puede estar vacío.");
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
        }
        setIsEditing(false);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditedText(comment.texto || ''); 
    };

    const formatDate = (dateString) => {
<<<<<<< HEAD
        if (!dateString) return t('comment.date_unknown');
        try {
            const utcDateString = dateString.endsWith('Z') ? dateString : `${dateString}Z`;
            const date = new Date(utcDateString);
            if (isNaN(date.getTime())) return t('comment.date_invalid');
            
            // Hacemos el locale dinámico según el idioma actual
            const locale = i18n.language === 'es' ? 'es-ES' : 'en-US';

            return date.toLocaleString(locale, {
=======
        if (!dateString) return "Fecha desconocida";
        try {
            const utcDateString = dateString.endsWith('Z') ? dateString : `${dateString}Z`;
            const date = new Date(utcDateString);
            if (isNaN(date.getTime())) return "Fecha inválida";
            return date.toLocaleString('es-ES', {
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                year: 'numeric', month: 'long', day: 'numeric',
                hour: '2-digit', minute: '2-digit',
            });
        } catch (error) {
<<<<<<< HEAD
            console.error("Error formatting date:", error);
            return t('comment.date_unknown');
=======
            console.error("Error al formatear la fecha:", error);
            return "Fecha desconocida";
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
        }
    };

    const profilePic = comment.autor_foto_perfil_url || "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg";

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="comment"
        >
            <div className="comment-header">
                <div className="comment-author-info">
<<<<<<< HEAD
                    <img 
                        src={profilePic} 
                        // Alt text traducido y dinámico
                        alt={t('comment.user_avatar_alt', { user: comment.autor_username || t('comment.unknown_user') })} 
                        className="comment-author-avatar" 
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg";
                        }}
                    />
                    <div>
                        <span className="comment-author">
                            {comment.autor_username || t('comment.unknown_user')}{" "}
                            {comment.autor_verificado && <span className="verified-badge" title={t('comment.verified_badge')}>✅</span>}
=======
                    <img src={profilePic} alt={comment.autor_username || 'Usuario'} className="comment-author-avatar" onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg";
                    }}/>
                    <div>
                        <span className="comment-author">
                            {comment.autor_username || 'Usuario Desconocido'}{" "}
                            {comment.autor_verificado && <span className="verified-badge" title="Verificado">✅</span>}
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                        </span>
                        <div className="comment-date">
                            {formatDate(comment.created_at)}{" "}
                            {comment.edited_at && comment.edited_at !== comment.created_at && (
<<<<<<< HEAD
                                <span className="comment-edited-tag">{t('comment.edited_tag')}</span>
=======
                                <span className="comment-edited-tag">(editado)</span>
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                            )}
                        </div>
                    </div>
                </div>
                {(canDelete || canEdit) && !isEditing && (
                    <div className="comment-controls">
                        {canEdit && (
<<<<<<< HEAD
                            <button type="button" onClick={handleEditClick} className="action-button edit" title={t('comment.edit_tooltip')}>
=======
                            <button type="button" onClick={handleEditClick} className="action-button edit" title="Editar comentario">
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                                <span>✏️</span>
                            </button>
                        )}
                        {canDelete && (
<<<<<<< HEAD
                            <button type="button" onClick={() => typeof onDelete === 'function' && onDelete(comment.id)} className="action-button delete" title={t('comment.delete_tooltip')}>
=======
                            <button type="button" onClick={() => typeof onDelete === 'function' && onDelete(comment.id)} className="action-button delete" title="Eliminar comentario">
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                                <span>🗑️</span>
                            </button>
                        )}
                    </div>
                )}
            </div>
            <div className="comment-content">
                {isEditing ? (
                    <div className="add-comment-form" style={{ padding: '15px', marginTop: '10px' }}>
                        <textarea
                            ref={textareaRef}
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value)}
                            maxLength={500}
                            className="comment-textarea"
                        />
                        <div className="comment-input-controls">
                            <span className="character-count">{(editedText || '').length}/500</span>
                            <div className="edit-button-group">
<<<<<<< HEAD
                                <button type="button" onClick={handleSaveEdit} className="action-button save">{t('comment.save_button')}</button>
                                <button type="button" onClick={handleCancelEdit} className="action-button cancel-edit">{t('comment.cancel_button')}</button>
=======
                                <button type="button" onClick={handleSaveEdit} className="action-button save">Guardar</button>
                                <button type="button" onClick={handleCancelEdit} className="action-button cancel-edit">Cancelar</button>
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                            </div>
                        </div>
                    </div>
                ) : (
<<<<<<< HEAD
                    <p>{comment.texto || t('comment.no_text')}</p>
=======
                    <p>{comment.texto || 'No hay texto.'}</p>
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                )}
            </div>
        </motion.div>
    );
};

<<<<<<< HEAD
export default Comment;
=======
export default Comment;
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
