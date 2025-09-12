import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Importar hook
import "./Verification.css";

const Verification = ({ prefilledEmail = "" }) => {
    const { t } = useTranslation(); // Inicializar hook
    const API_URL = import.meta.env.VITE_API_URL;

    const [loading, setLoading] = useState(true);
    const [code, setCode] = useState("");
    const [email, setEmail] = useState(prefilledEmail);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = t('verification.document_title');
        setTimeout(() => setLoading(false), 1000);
    }, [t]); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");
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
        }
    };

    return (
        <div className="verification-container">
            {loading ? (
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
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            maxLength="6"
                            placeholder={t('verification.code_placeholder')}
                            required
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? t('verification.submit_button_loading') : t('verification.submit_button')}
                        </button>
                    </form>
                    {message && <p className="success">{message}</p>}
                    {error && <p className="error">{error}</p>}
                </motion.div>
            )}
        </div>
    );
};

export default Verification;