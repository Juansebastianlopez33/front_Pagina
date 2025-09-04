import React, { useEffect, useRef, useCallback } from 'react';
import GameSetup from '../../pages/GameSetup/GameSetup'; // 👈 Ajusta si la ruta es distinta
import './GameSetupModal.css';

const GameSetupModal = ({ isOpen, onClose }) => {
    const modalRef = useRef();

    // Función para cerrar el modal
    const closeGameSetup = useCallback(() => {
        if (modalRef.current) {
            modalRef.current.classList.add('game-setup-modal-closing');
            modalRef.current.addEventListener(
                'animationend',
                () => {
                    onClose(); // 👈 usamos la prop, no navegamos fijo
                },
                { once: true }
            );
        } else {
            onClose();
        }
    }, [onClose]);

    // Manejador para cerrar al hacer clic fuera del contenido
    const handleOutsideClick = useCallback(
        (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeGameSetup();
            }
        },
        [closeGameSetup]
    );

    // Efecto para listeners y clase body
    useEffect(() => {
        if (!isOpen) return;

        document.body.classList.add('game-setup-modal-open');
        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeGameSetup();
        });

        return () => {
            document.body.classList.remove('game-setup-modal-open');
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, handleOutsideClick, closeGameSetup]);

    if (!isOpen) return null; // 👈 evita renderizar si no está abierto

    return (
        <div className="game-setup-modal-overlay">
            <div ref={modalRef} className="game-setup-modal-content">
                <button
                    className="game-setup-modal-close-button"
                    onClick={closeGameSetup}
                >
                    X
                </button>
                <GameSetup onClose={closeGameSetup} />
            </div>
        </div>
    );
};

export default GameSetupModal;
