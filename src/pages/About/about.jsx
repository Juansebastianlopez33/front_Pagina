<<<<<<< HEAD
import { useTranslation } from 'react-i18next';
import "./about.css";
import juanPhoto from "../../assets/juan.jpeg";
import ianPhoto from "../../assets/ian.jpeg";
import brayanPhoto from "../../assets/brayan.jpg";

const About = () => {
  // Inicializamos el hook de traducción
  const { t } = useTranslation();

=======
import "./about.css";
// Si tu archivo actual está en 'src/pages/About/',
// necesitas subir dos niveles (../../) para llegar a 'src',
// y luego bajar a 'assets/'.
import juanPhoto from "../../assets/juan.jpeg";   // CORREGIDO: de .jpg a .jpeg
import ianPhoto from "../../assets/ian.jpeg";   // Esta ya estaba bien
import brayanPhoto from "../../assets/brayan.jpg"; // CORREGIDO: de .jpg a .webp


const About = () => {
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
  return (
    <div className="about-container">
      <ul className="about-cards">
        <li className="card-item">
<<<<<<< HEAD
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
=======
          <img className="card-photo" src={brayanPhoto} alt="Foto de Brayan" />
          <h2>Brayan Penagos</h2>
          <p>¡Hola! Soy desarrollador Front-End. Me apasiona ser el puente entre el diseño creativo y la funcionalidad técnica, construyendo experiencias web que no solo se vean bien, sino que se sientan increíbles para el usuario.</p>
        </li>
        <li className="card-item">
          <img className="card-photo" src={juanPhoto} alt="Foto de Sebastián" />
          <h2>Sebastián López</h2>
          <p>Hola, soy un desarrollador que se enfoca en backend, esforzándome al máximo
            para que todos nuestros usuarios tengan una experiencia optimizada y segura.
          </p>
        </li>
        <li className="card-item">
          <img className="card-photo" src={ianPhoto} alt="Foto de Ian" />
          <h2>Ian Morales</h2>
          <p>Me encanta la programación y la resolución de problemas. Siempre busco mejorar y aprender más sobre el desarrollo web.</p>
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
        </li>
      </ul>
    </div>
  );
};

<<<<<<< HEAD
export default About;
=======
export default About;
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
