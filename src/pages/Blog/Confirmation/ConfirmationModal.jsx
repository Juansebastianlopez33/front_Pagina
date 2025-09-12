import React from 'react';
import { useTranslation } from 'react-i18next'; // Importar hook
import './ConfirmationModal.css';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message }) => {
    const { t } = useTranslation(); // Inicializar hook

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content forge" onClick={(e) => e.stopPropagation()}>
                
                <div className="modal-decoration-top"></div>
                <div className="embers" aria-hidden="true"></div>
                <div className="ashes" aria-hidden="true"></div>

                <h2 className="modal-title">{title}</h2>
                <div className="modal-divider"></div>
                <p className="modal-message">{message}</p>

                <div className="modal-actions">
                    <button onClick={onClose} className="modal-button cancel">
                        {/* Texto del botón traducido */}
                        <span className="button-text">{t('confirmation_modal.cancel_button')}</span>
                    </button>
                    
                    <button onClick={onConfirm} className="modal-button confirm">
                        {/* Texto del botón traducido */}
                        <span className="button-text">{t('confirmation_modal.confirm_button')}</span>
                    </button>
                </div>
                
                <div className="modal-decoration-bottom"></div>
            </div>
        </div>
    );
};

export default ConfirmationModal;