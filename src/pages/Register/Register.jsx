import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next'; // Importar hook
import Verification from "../Verification/Verification";
import "./Register.css";

const Register = () => {
    const { t } = useTranslation(); // Inicializar hook
    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        document.title = t('register.document_title');
    }, [t]);

    const [isRegistered, setIsRegistered] = useState(false);
    const [registrationEmail, setRegistrationEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ username: "", email: "", password: "", descripcion: "" });
    const [error, setError] = useState("");
    const [passwordStrength, setPasswordStrength] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // La función ahora devuelve claves de traducción en lugar de texto
    const validatePassword = (password) => {
        if (password.length < 8) return "register.validation.min_length";
        if (!/[A-Z]/.test(password)) return "register.validation.uppercase";
        if (!/[a-z]/.test(password)) return "register.validation.lowercase";
        if (!/[0-9]/.test(password)) return "register.validation.number";
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return "register.validation.special_char";
        
        const commonPasswords = ["123456", "password", "123456789", "12345678", "12345", "1234567", "1234567890", "qwerty", "abc123", "password123", "admin", "letmein", "welcome", "monkey", "1234", "dragon", "sunshine", "master", "123123", "football", "iloveyou", "admin123", "welcome123", "password1"];
        if (commonPasswords.includes(password.toLowerCase())) {
            return "register.validation.common_password";
        }
        return "";
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (name === "password") {
            const strengthKey = validatePassword(value);
            setPasswordStrength(strengthKey ? t(strengthKey) : ""); // Traducimos la clave
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");
        const passwordErrorKey = validatePassword(formData.password);
        if (passwordErrorKey) {
            setError(t(passwordErrorKey)); // Traducimos la clave
            return;
        }
        setIsLoading(true);
        try {
            const response = await fetch(`${API_URL}/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                setIsRegistered(true);
                setRegistrationEmail(formData.email);
            } else {
                setError(data.error || t('register.errors.generic'));
            }
        } catch (err) {
            setError(t('register.errors.connection_error'));
        } finally {
            setIsLoading(false);
        }
    };

    if (isRegistered) {
        return <Verification prefilledEmail={registrationEmail} />;
    }

    return (
        <div className="register-container">
            <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="register-box">
                <h2>{t('register.form_title')}</h2>
                {error && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="error-message">
                        <span className="error-icon">⚠️</span>{error}
                    </motion.div>
                )}
                <form onSubmit={handleRegister}>
                    <div className="password-container">
                        <input type="text" name="username" placeholder={t('register.username_placeholder')} required value={formData.username} onChange={handleChange} />
                        <span className="eye-button" style={{ visibility: 'hidden' }}><FaEye /></span>
                    </div>
                    <div className="password-container">
                        <input type="email" name="email" placeholder={t('register.email_placeholder')} required value={formData.email} onChange={handleChange} />
                        <span className="eye-button" style={{ visibility: 'hidden' }}><FaEye /></span>
                    </div>
                    <div className="password-container">
                        <input type={showPassword ? "text" : "password"} name="password" placeholder={t('register.password_placeholder')} required className="password-input" value={formData.password} onChange={handleChange} />
                        <span className="eye-button" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    {passwordStrength && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="password-strength-message">
                            {passwordStrength}
                        </motion.div>
                    )}
                    {formData.password && !passwordStrength && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="password-strong-message">
                            {t('register.password_strong')}
                        </motion.div>
                    )}

                    <button type="submit" disabled={isLoading}>
                        {isLoading ? t('register.submit_button_loading') : t('register.submit_button')}
                    </button>
                </form>

                <div className="verify-container">
                    <span className="verify-text">{t('register.already_registered_text')}</span>
                    <button type="button" className="verify-button" onClick={() => setIsRegistered(true)}>
                        {t('register.verify_account_button')}
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default Register;