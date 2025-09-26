import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
<<<<<<< HEAD
import { useTranslation } from 'react-i18next'; // Importar el hook
=======
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
import BlogPost from '../../components/BlogPost';
import CreatePost from '../../components/CreatePost';
import { useAuth } from '../../context/AuthContext';
import './Blog.css';
import { io } from 'socket.io-client';

const BlogPage = () => {
<<<<<<< HEAD
    const { t } = useTranslation(); // Inicializar el hook
=======
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user, token } = useAuth();
    const [notification, setNotification] = useState({ message: '', type: '' });
    const [isCreating, setIsCreating] = useState(false);
    const [selectedPostId, setSelectedPostId] = useState(null);
<<<<<<< HEAD
    const [postToEdit, setPostToEdit] = useState(null);
    const [categories, setCategories] = useState([]);
    const [selectedFilterCategory, setSelectedFilterCategory] = useState(null);
=======

    // edición
    const [postToEdit, setPostToEdit] = useState(null);

    // categorías
    const [categories, setCategories] = useState([]);
    const [selectedFilterCategory, setSelectedFilterCategory] = useState(null);

>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
    const API_URL = import.meta.env.VITE_API_URL;

    const buildApiUrl = useCallback((path) => {
        let baseUrl = API_URL.replace(/\/+$/, '');
        let cleanedPath = path.replace(/^\/+/g, '');
        return `${baseUrl}/${cleanedPath}`;
    }, [API_URL]);

    useEffect(() => {
<<<<<<< HEAD
        // Título del documento traducido
        document.title = t('blog.document_title');
    }, [t]);
=======
        document.title = 'Crónicas de Eternia | Blog';
    }, []);
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2

    useEffect(() => {
        if (!notification.message) return;
        const timerId = setTimeout(() => {
            setNotification({ message: '', type: '' });
        }, 3000);
        return () => clearTimeout(timerId);
    }, [notification]);

    const showNotification = useCallback((message, type) => {
        setNotification({ message, type });
    }, []);

    const fetchCategories = useCallback(async () => {
        try {
            const url = buildApiUrl('/blog/categorias');
            const response = await fetch(url);
<<<<<<< HEAD
            if (!response.ok) throw new Error(t('blog.notifications.load_categories_error'));
=======
            if (!response.ok) throw new Error("No se pudieron cargar las categorías.");
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            showNotification(error.message, 'error');
        }
<<<<<<< HEAD
    }, [buildApiUrl, showNotification, t]);
=======
    }, [buildApiUrl, showNotification]);
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2

    const fetchPosts = useCallback(async (categoryId = null) => {
        setLoading(true);
        try {
            let url = buildApiUrl('/blog/publicaciones');
            if (categoryId) url = `${url}?categoria_id=${categoryId}`;
            const response = await fetch(url);
<<<<<<< HEAD
            if (!response.ok) throw new Error(t('blog.notifications.load_posts_error'));
=======
            if (!response.ok) throw new Error("No se pudieron cargar las crónicas.");
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            showNotification(error.message, 'error');
        } finally {
            setLoading(false);
        }
<<<<<<< HEAD
    }, [buildApiUrl, showNotification, t]);
=======
    }, [buildApiUrl, showNotification]);
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2

    useEffect(() => {
        fetchPosts();
        fetchCategories();
<<<<<<< HEAD
        const socket = io(API_URL);

        socket.on('connect', () => console.log('Conectado a Socket.IO'));
        socket.on('disconnect', () => console.log('Desconectado de Socket.IO'));

=======

        const socket = io(API_URL);

        socket.on('connect', () => {
            console.log('Conectado a Socket.IO');
        });

        socket.on('disconnect', () => {
            console.log('Desconectado de Socket.IO');
        });

        // 🔥 batch updates
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
        socket.on('batched_publication_updates', (updatedPostsList) => {
            setPosts(prevPosts => {
                const updatedPostsMap = new Map(prevPosts.map(post => [post.id, post]));
                updatedPostsList.forEach(updatedPost => {
                    updatedPostsMap.set(updatedPost.id, updatedPost);
                });
                return Array.from(updatedPostsMap.values()).sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            });
<<<<<<< HEAD
            showNotification(t('blog.notifications.posts_updated'), 'info');
        });

        socket.on('publication_updated_instant', (updatedPost) => {
            setPosts(prevPosts => {
                 const updatedPostsMap = new Map(prevPosts.map(post => [post.id, post]));
                 updatedPostsMap.set(updatedPost.id, updatedPost);
                 return Array.from(updatedPostsMap.values()).sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            });
            showNotification(t('blog.notifications.post_edited'), 'info');
=======
            showNotification('Se han actualizado algunas crónicas.', 'info');
        });

        // 🔥 instant update
        socket.on('publication_updated_instant', (updatedPost) => {
            setPosts(prevPosts => {
                const updatedPostsMap = new Map(prevPosts.map(post => [post.id, post]));
                updatedPostsMap.set(updatedPost.id, updatedPost);
                return Array.from(updatedPostsMap.values()).sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            });
            showNotification('Una crónica ha sido editada.', 'info');
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
        });

        socket.on('publication_deleted', (data) => {
            setPosts(prevPosts => prevPosts.filter(post => post.id !== data.id));
<<<<<<< HEAD
            showNotification(t('blog.notifications.post_deleted'), 'info');
=======
            showNotification('Una crónica ha sido eliminada.', 'info');
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
            if (selectedPostId === data.id) {
                setSelectedPostId(null);
            }
        });

<<<<<<< HEAD
        return () => socket.disconnect();
    }, [fetchPosts, fetchCategories, API_URL, showNotification, selectedPostId, t]);
=======
        return () => {
            socket.disconnect();
        };
    }, [fetchPosts, fetchCategories, API_URL, showNotification, selectedPostId]);
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2

    const handlePostCreated = useCallback(async () => {
        fetchPosts(selectedFilterCategory);
        setIsCreating(false);
    }, [fetchPosts, selectedFilterCategory]);

    const handleEditClick = (postId) => {
        const post = posts.find(p => p.id === postId);
        setPostToEdit(post);
    };

    const handleCancelEdit = () => {
        setPostToEdit(null);
    };

    const handlePostUpdated = async () => {
        setPostToEdit(null);
    };

    const handleDeletePost = async (postId) => {
        if (!token) {
<<<<<<< HEAD
            showNotification(t('blog.notifications.login_required'), "error");
=======
            showNotification("Debes iniciar sesión.", "error");
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
            return;
        }
        try {
            const urlDelete = buildApiUrl(`/blog/eliminar-publicacion/${postId}`);
            const response = await fetch(urlDelete, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` },
            });
<<<<<<< HEAD
            if (!response.ok) throw new Error(t('blog.notifications.delete_error'));
            showNotification(t('blog.notifications.delete_success'), 'success');
=======

            if (!response.ok) throw new Error("Error al borrar publicación");
            showNotification('La crónica ha sido borrada.', 'success');
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
        } catch (error) {
            showNotification(error.message, 'error');
        }
    };

<<<<<<< HEAD
    const handleViewMore = (postId) => setSelectedPostId(postId);
    const handleBackToList = () => setSelectedPostId(null);
=======
    const handleViewMore = (postId) => {
        setSelectedPostId(postId);
    };

    const handleBackToList = () => {
        setSelectedPostId(null);
    };
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2

    const handleCategoryFilterChange = (categoryId) => {
        setSelectedFilterCategory(categoryId);
        fetchPosts(categoryId);
    };

    const truncateText = (text, maxLength = 150) => {
        if (!text) return '';
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength).trim() + '...';
    };

    if (loading) {
<<<<<<< HEAD
        return <div className="loading-screen">{t('blog.loading')}</div>;
=======
        return <div className="loading-screen">Cargando crónicas de Eternia...</div>;
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
    }

    const selectedPost = selectedPostId ? posts.find(post => post.id === selectedPostId) : null;

    return (
        <React.Fragment>
            <div className={`notification ${notification.type} ${notification.message ? 'show' : ''}`}>
                {notification.message}
            </div>

            <div className="blog-container">
                <div className="blog-header">
<<<<<<< HEAD
                    <h1>{t('blog.title')}</h1>
                    {user && !isCreating && !selectedPostId && (
                        <button className="create-new-post-button" onClick={() => setIsCreating(true)}>
                            {t('blog.create_button')}
=======
                    <h1>Crónicas de Eternia</h1>
                    {user && !isCreating && !selectedPostId && (
                        <button className="create-new-post-button" onClick={() => setIsCreating(true)}>
                            + Forjar Nueva Crónica
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                        </button>
                    )}
                    {selectedPostId && (
                        <button className="back-to-list-button" onClick={handleBackToList}>
<<<<<<< HEAD
                            {t('blog.back_button')}
=======
                            ← Volver a Crónicas
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                        </button>
                    )}
                </div>

                {!selectedPostId && (
                    <div className="category-navbar">
                        <button
                            className={`category-button ${selectedFilterCategory === null ? 'active' : ''}`}
                            onClick={() => handleCategoryFilterChange(null)}
                        >
<<<<<<< HEAD
                            {t('blog.all_posts')}
=======
                            Todas las Crónicas
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                        </button>
                        {categories.map(category => (
                            <button
                                key={category.id}
                                className={`category-button ${selectedFilterCategory === category.id ? 'active' : ''}`}
                                onClick={() => handleCategoryFilterChange(category.id)}
                            >
                                {category.nombre}
                            </button>
                        ))}
                    </div>
                )}

                {selectedPost ? (
<<<<<<< HEAD
                     <BlogPost
                         key={selectedPost.id}
                         post={selectedPost}
                         currentUser={user}
                         token={token}
                         onDeletePost={handleDeletePost}
                         onEditClick={handleEditClick}
                         showNotification={showNotification}
                         onBackToList={handleBackToList}
                     />
=======
                    <BlogPost
                        key={selectedPost.id}
                        post={selectedPost}
                        currentUser={user}
                        token={token}
                        onDeletePost={handleDeletePost}
                        onEditClick={handleEditClick}
                        showNotification={showNotification}
                        onBackToList={handleBackToList}
                    />
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                ) : (
                    <>
                        {posts.length > 0 ? (
                            <div className="post-list-grid">
                                {posts.map((post) => (
                                    <article key={post.id} className="blog-post-card">
                                        {post.imageUrl && (
                                            <div className="card-image-container">
                                                <img
                                                    src={post.imageUrl}
                                                    alt={post.title}
                                                    className="card-image"
                                                    loading="lazy"
                                                />
                                            </div>
                                        )}
                                        <div className="card-content">
                                            {post.categoria_nombre && (
                                                <span className="card-category">
                                                    {post.categoria_nombre}
                                                </span>
                                            )}
                                            <h3 className="card-title">{post.title}</h3>
                                            {post.content && (
                                                <p className="card-description">
                                                    {truncateText(post.content)}
                                                </p>
                                            )}
                                            <button
                                                className="view-more-button"
                                                onClick={() => handleViewMore(post.id)}
                                            >
<<<<<<< HEAD
                                                {t('blog.read_button')}
=======
                                                ⚔️ Leer Crónica
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                                            </button>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <div className="empty-state">
<<<<<<< HEAD
                                <p>{t('blog.empty_state')}</p>
=======
                                <p>🏰 Aún no se han escrito crónicas. ¡Sé el primero en forjar una leyenda! ⚔️</p>
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                            </div>
                        )}
                        <AnimatePresence>
                            {isCreating && (
                                <motion.div
                                    className="create-post-modal-overlay"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setIsCreating(false)}
                                >
                                    <motion.div
                                        className="create-post-modal-content"
                                        initial={{ y: -50, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -50, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <CreatePost
                                            onPostCreated={handlePostCreated}
                                            onCancelCreate={() => setIsCreating(false)}
                                            showNotification={showNotification}
                                            currentUser={user}
                                            categories={categories}
                                        />
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </>
                )}

<<<<<<< HEAD
                <AnimatePresence>
                    {postToEdit && (
                         <motion.div
=======
                {/* Modal de edición */}
                <AnimatePresence>
                    {postToEdit && (
                        <motion.div
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                            className="create-post-modal-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleCancelEdit}
                        >
                            <motion.div
                                className="create-post-modal-content"
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -50, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <CreatePost
                                    postToEdit={postToEdit}
                                    onCancelEdit={handleCancelEdit}
                                    onPostCreated={handlePostUpdated}
                                    showNotification={showNotification}
                                    currentUser={user}
                                    categories={categories}
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </React.Fragment>
    );
};

export default BlogPage;