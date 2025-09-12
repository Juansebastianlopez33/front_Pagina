import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 
import { useTranslation } from 'react-i18next'; // Importar hook

// Componentes
import Header from "../components/Header";
import Footer from "../components/Footer";
import Leaderboard from "../pages/Leaderboard/Leaderboard";
import TypingEffect from '../components/TypingEffect';
import GameSetupModal from "../components/GameSetupModal/GameSetupModal";

function Home() {
    const { t } = useTranslation(); // Inicializar hook
    const { isAuthenticated } = useAuth(); 
    const navigate = useNavigate();
    
    const [isTypingDone, setIsTypingDone] = useState(false);
    const [isGameModalOpen, setIsGameModalOpen] = useState(false);

    // Usamos la clave de traducción para el título animado
    const fullTitle = t('home.welcome_title');

    useEffect(() => {
        document.title = t('home.document_title');
    }, [t]);

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
                                    // Usamos dangerouslySetInnerHTML para renderizar el <span> de "Gods of Eternia" si es necesario
                                    <span dangerouslySetInnerHTML={{ __html: t('home.welcome_title').replace('Gods of Eternia', '<span>Gods of Eternia</span>') }} />
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
                            {t('home.welcome_subtitle')}
                        </p>
                        <div className="btn-container">
                            <button 
                                className="play-button" 
                                onClick={handlePlayClick}
                            >
                                {t('home.play_button')}
                            </button>
                            <Leaderboard />
                        </div>
                    </div>
                </section>

                <section className="feature-section">
                    <div className="feature-content">
                        <h2>{t('home.feature_title')}</h2>
                        <p>
                           {t('home.feature_subtitle')}
                        </p>
                        <Link to="/blog">
                            <button className="feature-button">{t('home.blog_button')}</button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />

            <GameSetupModal
                isOpen={isGameModalOpen}
                onClose={() => setIsGameModalOpen(false)}
            />
        </div>
    );
}

export default Home;