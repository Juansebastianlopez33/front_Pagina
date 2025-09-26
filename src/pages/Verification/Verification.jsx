import { useState, useEffect } from "react";
<<<<<<< HEAD
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Importar hook
import "./Verification.css";

const Verification = ({ prefilledEmail = "" }) => {
    const { t } = useTranslation(); // Inicializar hook
=======
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Verification.css";

const Verification = ({ prefilledEmail = "" }) => {
    // CAMBIO: Leemos la variable de entorno
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
    const API_URL = import.meta.env.VITE_API_URL;

    const [loading, setLoading] = useState(true);
    const [code, setCode] = useState("");
    const [email, setEmail] = useState(prefilledEmail);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
<<<<<<< HEAD
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = t('verification.document_title');
        setTimeout(() => setLoading(false), 1000);
    }, [t]); 
=======
    const [isSubmitting, setIsSubmitting] = useState(false); // MEJORA: Estado de carga para el botón
    const navigate = useNavigate();

    useEffect(() => {
        // MEJORA: Unificamos los efectos que se ejecutan solo al montar el componente
        document.title = 'Verificación | Gods Of Eternia';
        setTimeout(() => setLoading(false), 1000);
    }, []); // MEJORA: Añadido el array de dependencias vacío
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");
<<<<<<< HEAD
        setIsSubmitting(true);

        try {
            const response = await fetch(`${API_URL}/verificar`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: email,
                    verification_code: code 
                }),
            });
            const data = await response.json();
            if (response.ok) {
                setMessage(data.message); // El mensaje de éxito viene de la API
                setTimeout(() => navigate("/login"), 1500);
            } else {
                setError(data.error || t('verification.errors.generic'));
            }
        } catch (err) {
            setError(t('verification.errors.connection_error'));
        } finally {
            setIsSubmitting(false);
=======
        setIsSubmitting(true); // MEJORA: Activar loading

        try {
            // CAMBIO: Usamos la variable API_URL
            const response = await fetch(`${API_URL}/verificar`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                // AJUSTE CLAVE AQUÍ: Ahora enviamos 'email' y 'verification_code'
                body: JSON.stringify({
                    email: email, // ¡Añadido el email!
                    verification_code: code // Cambiado de 'codigo' a 'verification_code' para coincidir con el backend
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                setTimeout(() => {
                    navigate("/login");
                }, 1500);
            } else {
                setError(data.error || "Error de verificación");
            }
        } catch (err) {
            console.error("Error al conectar con el servidor de verificación:", err);
            setError("Error al conectar con el servidor. Verifica que esté activo.");
        } finally {
            setIsSubmitting(false); // MEJORA: Desactivar loading en cualquier caso
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
        }
    };

    return (
        <div className="verification-container">
            {loading ? (
<<<<<<< HEAD
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="loading-screen">
                    {t('verification.loading')}
                </motion.div>
            ) : (
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="verification-box">
                    <h2>{t('verification.title')}</h2>
                    <p>{t('verification.instruction')}</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder={t('verification.email_placeholder')}
=======
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="loading-screen"
                >
                    Cargando...
                </motion.div>
            ) : (
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="verification-box"
                >
                    <h2>Verificación - Gods of Eternia</h2>
                    <p>Ingresa tu correo y el código que te enviamos.</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Correo electrónico"
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            maxLength="6"
<<<<<<< HEAD
                            placeholder={t('verification.code_placeholder')}
=======
                            placeholder="Código de verificación"
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                            required
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
<<<<<<< HEAD
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? t('verification.submit_button_loading') : t('verification.submit_button')}
                        </button>
                    </form>
=======
                        {/* MEJORA: Deshabilitamos el botón y cambiamos el texto mientras carga */}
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Verificando..." : "Verificar"}
                        </button>
                    </form>

>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                    {message && <p className="success">{message}</p>}
                    {error && <p className="error">{error}</p>}
                </motion.div>
            )}
        </div>
    );
};

<<<<<<< HEAD
export default Verification;
=======
export default Verification;
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
