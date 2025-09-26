<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next'; // Importar hook
=======
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
import Comment from './Comment';
import ConfirmationModal from '../pages/Blog/Confirmation/ConfirmationModal';
import { io } from 'socket.io-client';
import '../pages/Blog/Blog.css';

const BlogPost = ({ post, currentUser, token, onDeletePost, onEditClick, showNotification }) => {
<<<<<<< HEAD
    const { t, i18n } = useTranslation(); // Inicializar hook
=======
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [socket, setSocket] = useState(null);
    const [likeCount, setLikeCount] = useState(post.likes || 0);
    const [userHasLiked, setUserHasLiked] = useState(post.currentUserLiked || false);
    const [isLiking, setIsLiking] = useState(false);
    const [modalState, setModalState] = useState({
        isOpen: false,
        title: '',
        message: '',
        onConfirm: () => {}
    });

    const API_URL = import.meta.env.VITE_API_URL;
    const isPostOwner = currentUser && currentUser.id === post.autor_id;
    const isUserVerified = currentUser?.verificado === true;

<<<<<<< HEAD
    // ... (El useEffect del socket se mantiene igual)
    useEffect(() => {
        const newSocket = io(API_URL);
        setSocket(newSocket);
        newSocket.on('connect', () => {
            newSocket.emit('join_room', { room: `publicacion_${post.id}` });
        });
=======
    useEffect(() => {
        const newSocket = io(API_URL);
        setSocket(newSocket);

        newSocket.on('connect', () => {
            newSocket.emit('join_room', { room: `publicacion_${post.id}` });
        });

>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
        const handleCommentEvent = (data, type) => {
            if (data.publicacion_id === post.id) {
                setComments(prevComments => {
                    let updated = [...prevComments];
                    if (type === 'added') {
                        if (!updated.some(c => c.id === data.comment.id)) {
                            updated.push(data.comment);
                        }
                    } else if (type === 'updated') {
                        updated = updated.map(c =>
                            c.id === data.comment.id ? { ...c, texto: data.comment.texto, edited_at: data.comment.edited_at } : c
                        );
                    } else if (type === 'deleted') {
                        updated = updated.filter(c => c.id !== data.id);
                    }
                    return updated.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
                });
            }
        };
<<<<<<< HEAD
        newSocket.on('comment_added', data => handleCommentEvent(data, 'added'));
        newSocket.on('comment_updated', data => handleCommentEvent(data, 'updated'));
        newSocket.on('comment_deleted', data => handleCommentEvent(data, 'deleted'));
=======

        newSocket.on('comment_added', data => handleCommentEvent(data, 'added'));
        newSocket.on('comment_updated', data => handleCommentEvent(data, 'updated'));
        newSocket.on('comment_deleted', data => handleCommentEvent(data, 'deleted'));

>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
        newSocket.on('like_update', data => {
            if (data.publicacion_id === post.id) {
                setLikeCount(data.likes);
                if (typeof data.user_has_liked !== 'undefined') {
                    setUserHasLiked(data.user_has_liked);
                }
                setIsLiking(false);
            }
        });
<<<<<<< HEAD
=======

>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
        return () => {
            newSocket.emit('leave_room', { room: `publicacion_${post.id}` });
            newSocket.disconnect();
        };
    }, [API_URL, post.id, currentUser?.id]);

<<<<<<< HEAD

=======
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch(`${API_URL}/blog/publicaciones/${post.id}/comentarios`, {
<<<<<<< HEAD
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (!response.ok) throw new Error(t('blog_post.notifications.load_comments_error'));
                const data = await response.json();
                setComments(data);
            } catch (error) {
                console.error("Error fetching comments:", error);
            }
        };
        fetchComments();
    }, [post.id, API_URL, token, t]);

    const apiRequest = async (endpoint, method, body, successMessage, errorMessage) => {
        if (!currentUser || !isUserVerified) {
            showNotification(t('blog_post.notifications.action_auth_error'), "error");
=======
                    headers: { 'Authorization': `Bearer ${token}`  }
                });
                if (!response.ok) throw new Error('Error al cargar comentarios.');
                const data = await response.json();
                setComments(data);
            } catch (error) {
                console.error("Error al cargar comentarios:", error);
            }
        };
        fetchComments();
    }, [post.id, API_URL, token]);

    const apiRequest = async (endpoint, method, body, successMessage, errorMessage) => {
        if (!currentUser || !isUserVerified) {
            showNotification("Necesitas iniciar sesión y verificar tu cuenta para realizar esta acción.", "error");
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
            return;
        }
        try {
            const response = await fetch(`${API_URL}${endpoint}`, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: body ? JSON.stringify(body) : null
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || errorMessage);
            if (successMessage) showNotification(successMessage, "success");
            return data;
        } catch (error) {
            console.error(error.message);
            showNotification(error.message, "error");
            throw error;
        }
    };

    const handleAddComment = (e) => {
        e.preventDefault();
        if (!newComment.trim()) {
<<<<<<< HEAD
            showNotification(t('blog_post.notifications.empty_comment_error'), "error");
=======
            showNotification("El comentario no puede estar vacío.", "error");
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
            return;
        }
        apiRequest(
            '/blog/comentar-publicacion', 'POST',
            { publicacion_id: post.id, comentario: newComment },
<<<<<<< HEAD
            t('blog_post.notifications.add_comment_success'),
            t('blog_post.notifications.add_comment_error')
=======
            "Comentario añadido!",
            "Error al añadir comentario."
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
        ).then(() => setNewComment('')).catch(() => {});
    };

    const handleEditComment = (commentId, updatedText) => {
<<<<<<< HEAD
        apiRequest(`/blog/editar-comentario/${commentId}`, 'PUT', { texto: updatedText }, 
            t('blog_post.notifications.edit_comment_success'), 
            t('blog_post.notifications.edit_comment_error'));
=======
        apiRequest(`/blog/editar-comentario/${commentId}`, 'PUT', { texto: updatedText }, "Comentario actualizado!", "Error al editar.");
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
    };

    const handleDeleteComment = (commentId) => {
        setModalState({
            isOpen: true,
<<<<<<< HEAD
            title: t('blog_post.delete_comment_modal.title'),
            message: t('blog_post.delete_comment_modal.message'),
            onConfirm: () => {
                apiRequest(`/blog/eliminar-comentario/${commentId}`, 'DELETE', null, 
                    t('blog_post.notifications.delete_comment_success'), 
                    t('blog_post.notifications.delete_comment_error'));
=======
            title: "Eliminar Comentario",
            message: "¿Estás seguro? Esta acción es irreversible.",
            onConfirm: () => {
                apiRequest(`/blog/eliminar-comentario/${commentId}`, 'DELETE', null, "Comentario eliminado.", "Error al eliminar.");
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
            }
        });
    };

    const handleDeletePost = () => {
        setModalState({
            isOpen: true,
<<<<<<< HEAD
            title: t('blog_post.delete_post_modal.title'),
            message: t('blog_post.delete_post_modal.message'),
            onConfirm: () => onDeletePost(post.id)
=======
            title: "Eliminar Crónica",
            message: "Se eliminará la crónica y todos sus comentarios. ¿Estás seguro?",
            onConfirm: () => {
                onDeletePost(post.id);
            }
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
        });
    };

    const handleLike = () => {
        if (isLiking) return;
        if (!currentUser || !isUserVerified) {
<<<<<<< HEAD
            showNotification(t('blog_post.notifications.like_auth_error'), "error");
=======
            showNotification("Debes iniciar sesión y verificar tu correo para dar 'me gusta'.", "error");
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
            return;
        }
        setIsLiking(true);
        const method = userHasLiked ? 'DELETE' : 'POST';
        const endpoint = `/blog/publicaciones/${post.id}/${userHasLiked ? 'unlike' : 'like'}`;
<<<<<<< HEAD
        apiRequest(endpoint, method, {}, null, t('blog_post.notifications.like_action_error'))
            .catch(() => setIsLiking(false));
    };

    const handleConfirmModal = () => {
        if (typeof modalState.onConfirm === 'function') {
            modalState.onConfirm();
        }
        setModalState({ isOpen: false, title: '', message: '', onConfirm: () => {} });
    };

    const handleCloseModal = () => {
        setModalState({ isOpen: false, title: '', message: '', onConfirm: () => {} });
    };
    
    const defaultImagePlaceholder = "https://placehold.co/800x450/3c2f21/F0F0F0?text=Estandarte";

    const locale = i18n.language === 'es' ? 'es-ES' : 'en-US';

=======
        apiRequest(endpoint, method, {}, null, "Error en la acción 'me gusta'.")
            .catch(() => setIsLiking(false));
    };

    const defaultImagePlaceholder = "https://placehold.co/800x450/3c2f21/F0F0F0?text=Estandarte";

>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
    return (
        <>
            <ConfirmationModal
                isOpen={modalState.isOpen}
<<<<<<< HEAD
                onClose={handleCloseModal}
                onConfirm={handleConfirmModal}
                title={modalState.title}
                message={modalState.message}
            />
=======
                onClose={() => setModalState({ ...modalState, isOpen: false })}
                onConfirm={() => {
                    if (typeof modalState.onConfirm === "function") {
                        modalState.onConfirm();
                    }
                    setModalState({ ...modalState, isOpen: false });
                }}
                title={modalState.title}
                message={modalState.message}
            />

>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
            <article className="blog-post">
                <header className="post-header">
                    <h1 className="post-title">{post.titulo}</h1>
                    <div className="post-meta">
                        <span className="post-author">
<<<<<<< HEAD
                            {t('blog_post.post_meta_by')} {post.autor_username} {post.autor_verificado && <span className="verified-badge" title={t('blog_post.verified_account_tooltip')}>✔</span>}
                        </span>
                        <span className="post-date">
                            {t('blog_post.post_meta_on')} {new Date(post.created_at).toLocaleDateString(locale)}
=======
                            Por {post.autor_username} {post.autor_verificado && <span className="verified-badge" title="Cuenta Verificada">✔</span>}
                        </span>
                        <span className="post-date">
                            el {new Date(post.created_at).toLocaleDateString()}
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                        </span>
                        {post.categoria_nombre && (
                            <span className="post-category">{post.categoria_nombre}</span>
                        )}
                    </div>
                </header>

                {post.imageUrl && (
                    <div className="post-image-container">
                        <img src={post.imageUrl} alt={post.titulo} className="post-image" onError={(e) => { e.target.onerror = null; e.target.src = defaultImagePlaceholder; }}/>
                    </div>
                )}

                <div className="post-content">
                    <p dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                <div className="post-actions-bar">
                    <div className="user-interactions">
                        <button
                            onClick={handleLike}
                            className={`like-button ${userHasLiked ? 'liked' : ''}`}
                            disabled={isLiking || !currentUser || !isUserVerified}
<<<<<<< HEAD
                            title={userHasLiked ? t('blog_post.unlike_tooltip') : t('blog_post.like_tooltip')}
=======
                            title={userHasLiked ? "Quitar 'me gusta'" : "Me gusta"}
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                        >
                            <span className="like-icon">{userHasLiked ? '❤' : '🤍'}</span>
                            <span>{likeCount}</span>
                        </button>
<<<<<<< HEAD
                        <div className="interaction-count" title={t('blog_post.comments_count_tooltip')}>
=======
                        <div className="interaction-count" title="Número de comentarios">
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                            <span className="icon">💬</span>
                            <span>{comments.length}</span>
                        </div>
                    </div>
                    {isPostOwner && (
                        <div className="owner-actions">
<<<<<<< HEAD
                            <button onClick={() => onEditClick(post.id)} className="action-button edit" title={t('blog_post.edit_post_tooltip')}>
                                <span>✏️</span><span>{t('blog_post.edit_post_button')}</span>
                            </button>
                            <button onClick={handleDeletePost} className="action-button delete" title={t('blog_post.delete_post_tooltip')}>
                                <span>🗑️</span><span>{t('blog_post.delete_post_button')}</span>
=======
                            <button onClick={() => onEditClick(post.id)} className="action-button edit" title="Editar crónica">
                                <span>✏️</span><span>Editar</span>
                            </button>
                            <button onClick={handleDeletePost} className="action-button delete" title="Eliminar crónica">
                                <span>🗑️</span><span>Eliminar</span>
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                            </button>
                        </div>
                    )}
                </div>

                <section className="comments-section">
<<<<<<< HEAD
                    <h3>{t('blog_post.comments_title')}</h3>
=======
                    <h3>Comentarios</h3>
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                    <div className="comments-list">
                        {comments.length > 0 ? (
                            <AnimatePresence>
                                {comments.map((comment) => (
                                    <Comment
                                        key={comment.id}
                                        comment={comment}
                                        currentUser={currentUser}
                                        postAuthorId={post.autor_id}
                                        onDelete={handleDeleteComment}
                                        onEdit={handleEditComment}
                                    />
                                ))}
                            </AnimatePresence>
                        ) : (
<<<<<<< HEAD
                            <p className="no-comments">{t('blog_post.no_comments')}</p>
=======
                            <p className="no-comments">Sé el primero en comentar esta crónica.</p>
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                        )}
                    </div>

                    {currentUser && isUserVerified ? (
                        <form onSubmit={handleAddComment} className="add-comment-form">
                            <textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
<<<<<<< HEAD
                                placeholder={t('blog_post.add_comment_placeholder')}
=======
                                placeholder="Añade tu verso a esta crónica..."
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                                rows="2"
                                className="comment-textarea"
                                maxLength={500}
                            />
                            <div className="comment-input-controls">
                                <span className="character-count">{newComment.length}/500</span>
<<<<<<< HEAD
                                <button type="submit" className="comment-submit-button" disabled={!newComment.trim()}>{t('blog_post.send_button')}</button>
=======
                                <button type="submit" className="comment-submit-button" disabled={!newComment.trim()}>Enviar</button>
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                            </div>
                        </form>
                    ) : (
                        <p className={!currentUser ? "login-prompt" : "verification-warning"}>
<<<<<<< HEAD
                            {!currentUser ? t('blog_post.login_to_comment') : t('blog_post.verify_to_comment')}
=======
                            {!currentUser ? "Inicia sesión para poder comentar." : "Necesitas verificar tu correo para poder comentar."}
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                        </p>
                    )}
                </section>
            </article>
        </>
    );
};

export default BlogPost;