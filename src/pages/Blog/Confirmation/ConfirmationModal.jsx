import React from 'react';
import './ConfirmationModal.css'; // Usa tus estilos de modal

const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message }) => {
    if (!isOpen) return null;

    return (
        <div className="confirmation-overlay" onClick={onClose}>
            <div className="confirmation-content" onClick={(e) => e.stopPropagation()}>
                <h2>{title}</h2>
                <p>{message}</p>
                <div className="confirmation-buttons">
                    <button onClick={onConfirm} className="confirm-button">
                        Confirmar
                    </button>
                    <button onClick={onClose} className="cancel-button">
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
