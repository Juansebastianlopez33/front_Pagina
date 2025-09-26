import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 
<<<<<<< HEAD
import { useTranslation } from 'react-i18next'; // Importar hook
=======
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2

// Componentes
import Header from "../components/Header";
import Footer from "../components/Footer";
import Leaderboard from "../pages/Leaderboard/Leaderboard";
import TypingEffect from '../components/TypingEffect';
<<<<<<< HEAD
import GameSetupModal from "../components/GameSetupModal/GameSetupModal";

function Home() {
    const { t } = useTranslation(); // Inicializar hook
=======
import GameSetupModal from "../components/GameSetupModal/GameSetupModal"; // ✅ nuevo modal del juego

function Home() {
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
    const { isAuthenticated } = useAuth(); 
    const navigate = useNavigate();
    
    const [isTypingDone, setIsTypingDone] = useState(false);
<<<<<<< HEAD
    const [isGameModalOpen, setIsGameModalOpen] = useState(false);

    // Usamos la clave de traducción para el título animado
    const fullTitle = t('home.welcome_title');

    useEffect(() => {
        document.title = t('home.document_title');
    }, [t]);

=======
    const fullTitle = "Biienvenidos a Gods of Eternia";

    // ✅ nuevo estado para el modal
    const [isGameModalOpen, setIsGameModalOpen] = useState(false);

    useEffect(() => {
        document.title = 'Inicio | Gods Of Eternia';
    }, []);

    // ✅ ahora el botón abre el modal en lugar de navegar directo
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
    const handlePlayClick = () => {
        if (isAuthenticated) {
            setIsGameModalOpen(true);
        } else {
            navigate("/register");
        }
    };

    return (
        <div className="page-container">
            <Header />
            <main className="content">
                <section className="hero-section">
                    <div className="hero-content">
                        <div className="typing-container">
                            <h2>
                                {isTypingDone ? (
<<<<<<< HEAD
                                    // Usamos dangerouslySetInnerHTML para renderizar el <span> de "Gods of Eternia" si es necesario
                                    <span dangerouslySetInnerHTML={{ __html: t('home.welcome_title').replace('Gods of Eternia', '<span>Gods of Eternia</span>') }} />
=======
                                    <>
                                        Bienvenidos a <span>Gods of Eternia</span>
                                    </>
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                                ) : (
                                    <>
                                        <TypingEffect
                                            text={fullTitle}
                                            speed={80}
                                            onComplete={() => setIsTypingDone(true)}
                                        />
                                        <span className="typing-cursor"></span>
                                    </>
                                )}
                            </h2>
                        </div>
                        
                        <p className="subtitle">
<<<<<<< HEAD
                            {t('home.welcome_subtitle')}
=======
                            Sumérgete en un mundo épico de fantasía medieval donde los dioses caminan entre los mortales.
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                        </p>
                        <div className="btn-container">
                            <button 
                                className="play-button" 
                                onClick={handlePlayClick}
                            >
<<<<<<< HEAD
                                {t('home.play_button')}
=======
                                Jugar Ahora
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                            </button>
                            <Leaderboard />
                        </div>
                    </div>
                </section>

                <section className="feature-section">
                    <div className="feature-content">
<<<<<<< HEAD
                        <h2>{t('home.feature_title')}</h2>
                        <p>
                           {t('home.feature_subtitle')}
                        </p>
                        <Link to="/blog">
                            <button className="feature-button">{t('home.blog_button')}</button>
=======
                        <h2>Desde el Escritorio del Cronista</h2>
                        <p>
                            Explora las leyendas, hazañas y misterios de Eternia contados por sus propios héroes.
                        </p>
                        <Link to="/blog">
                            <button className="feature-button">Ir al Blog</button>
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />

<<<<<<< HEAD
=======
            {/* ✅ Modal del juego */}
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
            <GameSetupModal
                isOpen={isGameModalOpen}
                onClose={() => setIsGameModalOpen(false)}
            />
        </div>
    );
}

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
