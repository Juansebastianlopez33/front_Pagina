import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
<<<<<<< HEAD
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next'; // Importar hook
=======
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
import Verification from "../Verification/Verification";
import "./Register.css";

const Register = () => {
<<<<<<< HEAD
    const { t } = useTranslation(); // Inicializar hook
    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        document.title = t('register.document_title');
    }, [t]);
=======
    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        document.title = 'Registro | Gods Of Eternia';
    }, []);
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2

    const [isRegistered, setIsRegistered] = useState(false);
    const [registrationEmail, setRegistrationEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);
<<<<<<< HEAD
    const [formData, setFormData] = useState({ username: "", email: "", password: "", descripcion: "" });
=======
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        descripcion: "",
    });
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
    const [error, setError] = useState("");
    const [passwordStrength, setPasswordStrength] = useState("");
    const [isLoading, setIsLoading] = useState(false);

<<<<<<< HEAD
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
=======
    // ... (La función validatePassword no cambia)
    const validatePassword = (password) => {
        if (password.length < 8) {
            return "La contraseña debe tener al menos 8 caracteres";
        }
        if (!/[A-Z]/.test(password)) {
            return "La contraseña debe contener al menos una letra mayúscula";
        }
        if (!/[a-z]/.test(password)) {
            return "La contraseña debe contener al menos una letra minúscula";
        }
        if (!/[0-9]/.test(password)) {
            return "La contraseña debe contener al menos un número";
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return "La contraseña debe contener al menos un carácter especial";
        }
        const commonPasswords = [
            "123456", "password", "123456789", "12345678", "12345", "1234567",
            "1234567890", "qwerty", "abc123", "password123", "admin", "letmein",
            "welcome", "monkey", "1234", "dragon", "sunshine", "master", "123123",
            "football", "iloveyou", "admin123", "welcome123", "password1"
        ];
        if (commonPasswords.includes(password.toLowerCase())) {
            return "Esta contraseña es muy común y fácil de adivinar";
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
        }
        return "";
    };

<<<<<<< HEAD
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (name === "password") {
            const strengthKey = validatePassword(value);
            setPasswordStrength(strengthKey ? t(strengthKey) : ""); // Traducimos la clave
=======

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === "password") {
            const strengthMessage = validatePassword(value);
            setPasswordStrength(strengthMessage);
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");
<<<<<<< HEAD
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
=======

        const passwordError = validatePassword(formData.password);
        if (passwordError) {
            setError(passwordError);
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch(`${API_URL}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
            if (response.ok) {
                setIsRegistered(true);
                setRegistrationEmail(formData.email);
            } else {
<<<<<<< HEAD
                setError(data.error || t('register.errors.generic'));
            }
        } catch (err) {
            setError(t('register.errors.connection_error'));
=======
                setError(data.error || "Error en el registro");
            }
        } catch (err) {
            console.error("Error al conectar con el servidor de registro:", err);
            setError("No se pudo conectar con el servidor. Verifica que esté activo.");
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
        } finally {
            setIsLoading(false);
        }
    };

<<<<<<< HEAD
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
=======
    // Si el usuario se registró o hizo clic en el nuevo botón, muestra la verificación.
    if (isRegistered) {
        // Pasamos el email si viene de un registro exitoso, o un string vacío si no.
        return <Verification prefilledEmail={registrationEmail} />;
    }

    // Renderizado del formulario de registro
    return (
        <div className="register-container">
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="register-box"
            >
                <h2>Registro - Gods of Eternia</h2>

                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="error-message"
                    >
                        <span className="error-icon">⚠️</span>
                        {error}
                    </motion.div>
                )}

                <form onSubmit={handleRegister}>
                    {/* Campos de usuario, email y contraseña (sin cambios) */}
                    <div className="password-container">
                        <input type="text" name="username" placeholder="Usuario" required value={formData.username} onChange={handleChange} />
                        <span className="eye-button" style={{ visibility: 'hidden' }}><FaEye /></span>
                    </div>

                    <div className="password-container">
                        <input type="email" name="email" placeholder="Correo" required value={formData.email} onChange={handleChange} />
                        <span className="eye-button" style={{ visibility: 'hidden' }}><FaEye /></span>
                    </div>

                    <div className="password-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Contraseña"
                            required
                            className="password-input"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <span
                            className="eye-button"
                            onClick={() => setShowPassword(!showPassword)}
                        >
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    {passwordStrength && (
<<<<<<< HEAD
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="password-strength-message">
                            {passwordStrength}
                        </motion.div>
                    )}
                    {formData.password && !passwordStrength && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="password-strong-message">
                            {t('register.password_strong')}
=======
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="password-strength-message"
                        >
                            {passwordStrength}
                        </motion.div>
                    )}

                    {formData.password && !passwordStrength && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="password-strong-message"
                        >
                            ✅ Contraseña segura
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                        </motion.div>
                    )}

                    <button type="submit" disabled={isLoading}>
<<<<<<< HEAD
                        {isLoading ? t('register.submit_button_loading') : t('register.submit_button')}
                    </button>
                </form>

                <div className="verify-container">
                    <span className="verify-text">{t('register.already_registered_text')}</span>
                    <button type="button" className="verify-button" onClick={() => setIsRegistered(true)}>
                        {t('register.verify_account_button')}
                    </button>
                </div>
=======
                        {isLoading ? "Registrando..." : "Registrarse"}
                    </button>
                </form>

                {/* --- NUEVO BOTÓN AÑADIDO AQUÍ --- */}
                <div className="verify-container">
                    <span className="verify-text">¿Ya te registraste?</span>
                    <button
                        type="button"
                        className="verify-button"
                        onClick={() => setIsRegistered(true)}
                    >
                        Verifica tu cuenta
                    </button>
                </div>

                {/* --- FIN DEL NUEVO BOTÓN --- */}

>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
            </motion.div>
        </div>
    );
};

export default Register;