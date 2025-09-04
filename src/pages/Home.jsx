import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 

// Componentes
import Header from "../components/Header";
import Footer from "../components/Footer";
import Leaderboard from "../pages/Leaderboard/Leaderboard";
import TypingEffect from '../components/TypingEffect';
import GameSetupModal from "../components/GameSetupModal/GameSetupModal"; // ✅ nuevo modal del juego

function Home() {
    const { isAuthenticated } = useAuth(); 
    const navigate = useNavigate();
    
    const [isTypingDone, setIsTypingDone] = useState(false);
    const fullTitle = "Biienvenidos a Gods of Eternia";

    // ✅ nuevo estado para el modal
    const [isGameModalOpen, setIsGameModalOpen] = useState(false);

    useEffect(() => {
        document.title = 'Inicio | Gods Of Eternia';
    }, []);

    // ✅ ahora el botón abre el modal en lugar de navegar directo
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
                                    <>
                                        Bienvenidos a <span>Gods of Eternia</span>
                                    </>
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
                            Sumérgete en un mundo épico de fantasía medieval donde los dioses caminan entre los mortales.
                        </p>
                        <div className="btn-container">
                            <button 
                                className="play-button" 
                                onClick={handlePlayClick}
                            >
                                Jugar Ahora
                            </button>
                            <Leaderboard />
                        </div>
                    </div>
                </section>

                <section className="feature-section">
                    <div className="feature-content">
                        <h2>Desde el Escritorio del Cronista</h2>
                        <p>
                            Explora las leyendas, hazañas y misterios de Eternia contados por sus propios héroes.
                        </p>
                        <Link to="/blog">
                            <button className="feature-button">Ir al Blog</button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />

            {/* ✅ Modal del juego */}
            <GameSetupModal
                isOpen={isGameModalOpen}
                onClose={() => setIsGameModalOpen(false)}
            />
        </div>
    );
}

export default Home;
