import { useTranslation } from 'react-i18next'; // Importar hook

const Loader = () => {
    const { t } = useTranslation(); // Inicializar hook

    return (
        <div className="loader">
            {t('common.loading')}
        </div>
    );
};

export default Loader;