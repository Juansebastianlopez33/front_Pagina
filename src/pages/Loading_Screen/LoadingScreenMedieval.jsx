import React from 'react';
import { useTranslation } from 'react-i18next'; // Importar hook
import './LoadingScreen.css'; 

const LoadingScreenMedieval = () => {
    const { t } = useTranslation(); // Inicializar hook

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h1 className="modal-title">{t('loading_screen.title')}</h1>
                <p className="modal-message">
                    {t('loading_screen.message')}
                </p>
                <div className="loader"></div>
            </div>
        </div>
    );
};

export default LoadingScreenMedieval;