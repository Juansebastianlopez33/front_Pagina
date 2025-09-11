import React from 'react';
import './ConfirmationModal.css'; // Asegúrate de que la ruta a tu CSS sea correcta

const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message }) => {
    if (!isOpen) {
        return null;
    }

    return (
        // Usamos "modal-overlay" para que coincida con tu CSS
        <div className="modal-overlay" onClick={onClose}>
            {/* Hacemos que el clic dentro del modal no lo cierre */}
            <div className="modal-content forge" onClick={(e) => e.stopPropagation()}>
                
                {/* Elementos decorativos de tu CSS */}
                <div className="modal-decoration-top"></div>

                {/* partículas/brasas decorativas */}
                <div className="embers" aria-hidden="true"></div>
                {/* cenizas cayendo */}
                <div className="ashes" aria-hidden="true"></div>

                {/* Título y mensaje con sus clases correspondientes */}
                <h2 className="modal-title">{title}</h2>
                <div className="modal-divider"></div>
                <p className="modal-message">{message}</p>

                {/* Contenedor de botones */}
                <div className="modal-actions">
                    {/* Botón de Cancelar con clases múltiples */}
                    <button onClick={onClose} className="modal-button cancel">
                        <span className="button-text">Cancelar</span>
                    </button>
                    
                    {/* Botón de Confirmar con clases múltiples */}
                    <button onClick={onConfirm} className="modal-button confirm">
                        <span className="button-text">Confirmar</span>
                    </button>
                </div>
                
                {/* Elementos decorativos de tu CSS */}
                <div className="modal-decoration-bottom"></div>
            </div>
        </div>
    );
};

export default ConfirmationModal;