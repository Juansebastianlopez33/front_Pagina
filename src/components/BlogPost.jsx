import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next'; // Importar hook
import Comment from './Comment';
import ConfirmationModal from '../pages/Blog/Confirmation/ConfirmationModal';
import { io } from 'socket.io-client';
import '../pages/Blog/Blog.css';

const BlogPost = ({ post, currentUser, token, onDeletePost, onEditClick, showNotification }) => {
    const { t, i18n } = useTranslation(); // Inicializar hook
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

    // ... (El useEffect del socket se mantiene igual)
    useEffect(() => {
        const newSocket = io(API_URL);
        setSocket(newSocket);
        newSocket.on('connect', () => {
            newSocket.emit('join_room', { room: `publicacion_${post.id}` });
        });
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
        newSocket.on('comment_added', data => handleCommentEvent(data, 'added'));
        newSocket.on('comment_updated', data => handleCommentEvent(data, 'updated'));
        newSocket.on('comment_deleted', data => handleCommentEvent(data, 'deleted'));
        newSocket.on('like_update', data => {
            if (data.publicacion_id === post.id) {
                setLikeCount(data.likes);
                if (typeof data.user_has_liked !== 'undefined') {
                    setUserHasLiked(data.user_has_liked);
                }
                setIsLiking(false);
            }
        });
        return () => {
            newSocket.emit('leave_room', { room: `publicacion_${post.id}` });
            newSocket.disconnect();
        };
    }, [API_URL, post.id, currentUser?.id]);


    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch(`${API_URL}/blog/publicaciones/${post.id}/comentarios`, {
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
            showNotification(t('blog_post.notifications.empty_comment_error'), "error");
            return;
        }
        apiRequest(
            '/blog/comentar-publicacion', 'POST',
            { publicacion_id: post.id, comentario: newComment },
            t('blog_post.notifications.add_comment_success'),
            t('blog_post.notifications.add_comment_error')
        ).then(() => setNewComment('')).catch(() => {});
    };

    const handleEditComment = (commentId, updatedText) => {
        apiRequest(`/blog/editar-comentario/${commentId}`, 'PUT', { texto: updatedText }, 
            t('blog_post.notifications.edit_comment_success'), 
            t('blog_post.notifications.edit_comment_error'));
    };

    const handleDeleteComment = (commentId) => {
        setModalState({
            isOpen: true,
            title: t('blog_post.delete_comment_modal.title'),
            message: t('blog_post.delete_comment_modal.message'),
            onConfirm: () => {
                apiRequest(`/blog/eliminar-comentario/${commentId}`, 'DELETE', null, 
                    t('blog_post.notifications.delete_comment_success'), 
                    t('blog_post.notifications.delete_comment_error'));
            }
        });
    };

    const handleDeletePost = () => {
        setModalState({
            isOpen: true,
            title: t('blog_post.delete_post_modal.title'),
            message: t('blog_post.delete_post_modal.message'),
            onConfirm: () => onDeletePost(post.id)
        });
    };

    const handleLike = () => {
        if (isLiking) return;
        if (!currentUser || !isUserVerified) {
            showNotification(t('blog_post.notifications.like_auth_error'), "error");
            return;
        }
        setIsLiking(true);
        const method = userHasLiked ? 'DELETE' : 'POST';
        const endpoint = `/blog/publicaciones/${post.id}/${userHasLiked ? 'unlike' : 'like'}`;
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

    return (
        <>
            <ConfirmationModal
                isOpen={modalState.isOpen}
                onClose={handleCloseModal}
                onConfirm={handleConfirmModal}
                title={modalState.title}
                message={modalState.message}
            />
            <article className="blog-post">
                <header className="post-header">
                    <h1 className="post-title">{post.titulo}</h1>
                    <div className="post-meta">
                        <span className="post-author">
                            {t('blog_post.post_meta_by')} {post.autor_username} {post.autor_verificado && <span className="verified-badge" title={t('blog_post.verified_account_tooltip')}>✔</span>}
                        </span>
                        <span className="post-date">
                            {t('blog_post.post_meta_on')} {new Date(post.created_at).toLocaleDateString(locale)}
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
                            title={userHasLiked ? t('blog_post.unlike_tooltip') : t('blog_post.like_tooltip')}
                        >
                            <span className="like-icon">{userHasLiked ? '❤' : '🤍'}</span>
                            <span>{likeCount}</span>
                        </button>
                        <div className="interaction-count" title={t('blog_post.comments_count_tooltip')}>
                            <span className="icon">💬</span>
                            <span>{comments.length}</span>
                        </div>
                    </div>
                    {isPostOwner && (
                        <div className="owner-actions">
                            <button onClick={() => onEditClick(post.id)} className="action-button edit" title={t('blog_post.edit_post_tooltip')}>
                                <span>✏️</span><span>{t('blog_post.edit_post_button')}</span>
                            </button>
                            <button onClick={handleDeletePost} className="action-button delete" title={t('blog_post.delete_post_tooltip')}>
                                <span>🗑️</span><span>{t('blog_post.delete_post_button')}</span>
                            </button>
                        </div>
                    )}
                </div>

                <section className="comments-section">
                    <h3>{t('blog_post.comments_title')}</h3>
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
                            <p className="no-comments">{t('blog_post.no_comments')}</p>
                        )}
                    </div>

                    {currentUser && isUserVerified ? (
                        <form onSubmit={handleAddComment} className="add-comment-form">
                            <textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder={t('blog_post.add_comment_placeholder')}
                                rows="2"
                                className="comment-textarea"
                                maxLength={500}
                            />
                            <div className="comment-input-controls">
                                <span className="character-count">{newComment.length}/500</span>
                                <button type="submit" className="comment-submit-button" disabled={!newComment.trim()}>{t('blog_post.send_button')}</button>
                            </div>
                        </form>
                    ) : (
                        <p className={!currentUser ? "login-prompt" : "verification-warning"}>
                            {!currentUser ? t('blog_post.login_to_comment') : t('blog_post.verify_to_comment')}
                        </p>
                    )}
                </section>
            </article>
        </>
    );
};

export default BlogPost;