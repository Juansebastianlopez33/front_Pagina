import React from 'react';
<<<<<<< HEAD
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
=======
import './LoadingScreen.css'; // Importamos los estilos

const LoadingScreenMedieval = () => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h1 className="modal-title">Preparando el Reino</h1>
                <p className="modal-message">
                    Los dragones están calentando sus llamas y los caballeros afilan sus espadas...
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                </p>
                <div className="loader"></div>
            </div>
        </div>
    );
};

export default LoadingScreenMedieval;