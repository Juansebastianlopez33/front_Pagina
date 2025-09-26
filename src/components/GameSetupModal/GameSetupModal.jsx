import React, { useEffect, useRef, useCallback } from 'react';
<<<<<<< HEAD
import GameSetup from '../../pages/GameSetup/GameSetup';
=======
import GameSetup from '../../pages/GameSetup/GameSetup'; // 👈 Ajusta si la ruta es distinta
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
import './GameSetupModal.css';

const GameSetupModal = ({ isOpen, onClose }) => {
    const modalRef = useRef();
<<<<<<< HEAD
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
=======

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
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeGameSetup();
            }
        },
        [closeGameSetup]
    );

<<<<<<< HEAD
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
=======
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
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
            <div ref={modalRef} className="game-setup-modal-content">
                <button
                    className="game-setup-modal-close-button"
                    onClick={closeGameSetup}
<<<<<<< HEAD
                    aria-label="Cerrar" // <-- Buena práctica para accesibilidad
                >
                    &times; 
=======
                >
                    X
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                </button>
                <GameSetup onClose={closeGameSetup} />
            </div>
        </div>
    );
};

<<<<<<< HEAD
export default GameSetupModal;
=======
export default GameSetupModal;
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
