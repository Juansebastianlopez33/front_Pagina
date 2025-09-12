import { useTranslation } from 'react-i18next';
import "./about.css";
import juanPhoto from "../../assets/juan.jpeg";
import ianPhoto from "../../assets/ian.jpeg";
import brayanPhoto from "../../assets/brayan.jpg";

const About = () => {
  // Inicializamos el hook de traducción
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <ul className="about-cards">
        <li className="card-item">
          <img className="card-photo" src={brayanPhoto} alt={t('about.brayan_alt')} />
          <h2>{t('about.brayan_name')}</h2>
          <p>{t('about.brayan_bio')}</p>
        </li>
        <li className="card-item">
          <img className="card-photo" src={juanPhoto} alt={t('about.sebastian_alt')} />
          <h2>{t('about.sebastian_name')}</h2>
          <p>{t('about.sebastian_bio')}</p>
        </li>
        <li className="card-item">
          <img className="card-photo" src={ianPhoto} alt={t('about.ian_alt')} />
          <h2>{t('about.ian_name')}</h2>
          <p>{t('about.ian_bio')}</p>
        </li>
      </ul>
    </div>
  );
};

export default About;