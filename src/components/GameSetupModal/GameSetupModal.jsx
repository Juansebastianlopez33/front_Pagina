import React, { useEffect, useRef, useCallback } from 'react';
import GameSetup from '../../pages/GameSetup/GameSetup';
import './GameSetupModal.css';

const GameSetupModal = ({ isOpen, onClose }) => {
    const modalRef = useRef();
    const overlayRef = useRef(); // <-- CORRECCIÓN: Añadimos una ref para el overlay

    const closeGameSetup = useCallback(() => {
        // <-- CORRECCIÓN: Lógica de cierre simplificada y corregida
        if (modalRef.current && overlayRef.current) {
            // Añadimos la clase '.closing' que SÍ existe en tu CSS
            modalRef.current.classList.add('closing');
            overlayRef.current.classList.add('closing');

            // Escuchamos el final de la animación en el contenido del modal
            modalRef.current.addEventListener(
                'animationend',
                () => {
                    onClose(); // Llamamos a onClose después de la animación
                },
                { once: true } // El listener se elimina solo después de ejecutarse
            );
        } else {
            onClose(); // Fallback por si las refs no existen
        }
    }, [onClose]);

    const handleOutsideClick = useCallback(
        (event) => {
            // Esta lógica ya era correcta, ahora funcionará al arreglar closeGameSetup
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeGameSetup();
            }
        },
        [closeGameSetup]
    );

    useEffect(() => {
        if (!isOpen) return;

        // CORRECCIÓN: La clase debe coincidir con la del CSS
        document.body.classList.add('modal-open'); 
        
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeGameSetup();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.classList.remove('modal-open');
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleKeyDown); // Limpieza correcta
        };
    }, [isOpen, handleOutsideClick, closeGameSetup]);

    if (!isOpen) return null;

    return (
        <div ref={overlayRef} className="game-setup-modal-overlay">
            <div ref={modalRef} className="game-setup-modal-content">
                <button
                    className="game-setup-modal-close-button"
                    onClick={closeGameSetup}
                    aria-label="Cerrar" // <-- Buena práctica para accesibilidad
                >
                    &times; 
                </button>
                <GameSetup onClose={closeGameSetup} />
            </div>
        </div>
    );
};

export default GameSetupModal;