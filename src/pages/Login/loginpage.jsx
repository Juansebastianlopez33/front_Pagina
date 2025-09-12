import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTranslation } from 'react-i18next'; // Importar hook
import "./loginpage.css";

const Login = () => {
    const { t } = useTranslation(); // Inicializar hook
    const navigate = useNavigate();
    const { login, isAuthenticated } = useAuth();
    const API_URL = import.meta.env.VITE_API_URL;

    // Estados para el login principal
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [isLoginLoading, setIsLoginLoading] = useState(false);

    // Estados para el modal de recuperación
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [resetEmail, setResetEmail] = useState("");
    const [resetMessage, setResetEmailMessage] = useState("");
    const [resetError, setResetError] = useState("");
    const [isResetLoading, setIsResetLoading] = useState(false);
    const [resetStep, setResetStep] = useState('enterEmail');
    const [resetCode, setResetCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {
        document.title = t('login.document_title');
    }, [t]);

    useEffect(() => {
        if (isAuthenticated && !isLoginLoading) {
            navigate("/"); 
        }
    }, [isAuthenticated, isLoginLoading, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setIsLoginLoading(true);

        if (!email || !email.includes('@') || !email.includes('.')) {
            setError(t('login.errors.invalid_email'));
            setIsLoginLoading(false);
            return;
        }
        if (!API_URL) {
            setError(t('login.errors.api_not_configured'));
            setIsLoginLoading(false);
            return;
        }

        try {
            const response = await fetch(`${API_URL}/login`, { 
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();

            if (response.ok && data.access_token && data.refresh_token) {
                login(data.access_token, data.refresh_token);
                const userData = { ...data.user, access_token: data.access_token, refresh_token: data.refresh_token };
                localStorage.setItem("goe_user", JSON.stringify(userData));
            } else {
                setError(data.error || data.message || t('login.errors.login_failed'));
            }
        } catch (err) {
            setError(t('login.errors.connection_error'));
        } finally {
            setIsLoginLoading(false);
        }
    };

    const handleApiCall = async (apiFunction, onSuccess) => {
        setIsResetLoading(true);
        setResetError("");
        setResetEmailMessage("");
        try {
            const data = await apiFunction();
            onSuccess(data);
        } catch (error) {
            const errorMessage = error.error || error.message || t('login.errors.api_call_error');
            setResetError(errorMessage);
        } finally {
            setIsResetLoading(false);
        }
    };

    const resetModalStates = () => {
        setResetEmail(""); setResetError(""); setResetEmailMessage("");
        setResetStep('enterEmail'); setResetCode(""); setNewPassword("");
        setConfirmPassword(""); setShowNewPassword(false); setShowConfirmPassword(false);
    };

    const openForgotPasswordModal = () => {
        resetModalStates();
        setShowForgotPassword(true);
    };

    const closeForgotPasswordModal = () => setShowForgotPassword(false);

    const handleRequestCode = (e) => {
        e.preventDefault();
        setResetError("");
        if (!resetEmail || !resetEmail.includes('@') || !resetEmail.includes('.')) {
            setResetError(t('login.errors.invalid_email'));
            return;
        }
        const apiFunction = async () => {
            const response = await fetch(`${API_URL}/request-password-reset`, { 
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: resetEmail }),
            });
            const data = await response.json();
            if (!response.ok) throw data;
            return data;
        };
        const onSuccess = (data) => {
            setResetStep('enterCode');
            setResetEmailMessage(data.message || t('login.success.code_sent'));
        };
        handleApiCall(apiFunction, onSuccess);
    };

    const handleResetWithCode = (e) => {
        e.preventDefault();
        setResetError("");
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(newPassword)) {
            setResetError(t('login.errors.password_requirements'));
            return;
        }
        if (newPassword !== confirmPassword) {
            setResetError(t('login.errors.password_mismatch'));
            return;
        }
        if (resetCode.length !== 6) {
            setResetError(t('login.errors.invalid_code'));
            return;
        }
        
        const apiFunction = async () => {
            const response = await fetch(`${API_URL}/reset-password`, { 
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: resetEmail, token: resetCode, new_password: newPassword }),
            });
            const data = await response.json();
            if (!response.ok) throw data;
            return data;
        };
        const onSuccess = (data) => {
            setResetEmailMessage(data.message || t('login.success.password_updated'));
            setTimeout(() => closeForgotPasswordModal(), 2000);
        };
        handleApiCall(apiFunction, onSuccess);
    };

    return (
        <div className="login-container">
            <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="login-box">
                <h2>{t('login.login_title')}</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleLogin} noValidate>
                    <div className="password-container">
                        <input type="email" placeholder={t('login.email_placeholder')} value={email} onChange={(e) => setEmail(e.target.value)} className="password-input" required />
                        <span className="eye-button" style={{ visibility: 'hidden' }}><FaEye /></span>
                    </div>
                    <div className="password-container">
                        <input type={showPassword ? "text" : "password"} placeholder={t('login.password_placeholder')} value={password} onChange={(e) => setPassword(e.target.value)} className="password-input" required />
                        <span className="eye-button" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <button type="submit" disabled={isLoginLoading}>
                        {isLoginLoading ? t('login.submit_button_loading') : t('login.submit_button')}
                    </button>
                </form>
                <div className="forgot-password" onClick={openForgotPasswordModal}>
                    {t('login.forgot_password_link')}
                </div>
            </motion.div>

            <AnimatePresence>
                {showForgotPassword && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="modal-overlay" onClick={closeForgotPasswordModal}>
                        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.3 }} className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-header">
                                <h3>{t('login.modal_title')}</h3>
                                <FaTimes className="close-button" onClick={closeForgotPasswordModal} />
                            </div>
                            <div className="modal-body">
                                {resetMessage && <p className="success-message">{resetMessage}</p>}
                                {resetError && <p className="error-message">{resetError}</p>}
                                
                                {resetStep === 'enterEmail' ? (
                                    <form onSubmit={handleRequestCode} noValidate>
                                        <p>{t('login.modal_step1_intro')}</p>
                                        <div className="password-container">
                                            <input type="email" placeholder={t('login.modal_email_placeholder')} value={resetEmail} onChange={(e) => setResetEmail(e.target.value)} className="password-input" required disabled={isResetLoading} />
                                        </div>
                                        <div className="modal-buttons">
                                            <button type="submit" className="submit-button" disabled={isResetLoading}>
                                                {isResetLoading ? t('login.modal_sending_code_button') : t('login.modal_send_code_button')}
                                            </button>
                                        </div>
                                    </form>
                                ) : (
                                    <form onSubmit={handleResetWithCode}>
                                        <p>{t('login.modal_step2_intro')}</p>
                                        <div className="password-container">
                                            <input type="text" placeholder={t('login.modal_code_placeholder')} value={resetCode} onChange={(e) => setResetCode(e.target.value)} className="password-input" required disabled={isResetLoading} />
                                        </div>
                                        <div className="password-container">
                                            <input type={showNewPassword ? "text" : "password"} placeholder={t('login.modal_new_password_placeholder')} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="password-input" required disabled={isResetLoading} />
                                            <span className="eye-button" onClick={() => setShowNewPassword(!showNewPassword)}>
                                                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                                            </span>
                                        </div>
                                        <div className="password-container">
                                            <input type={showConfirmPassword ? "text" : "password"} placeholder={t('login.modal_confirm_password_placeholder')} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="password-input" required disabled={isResetLoading} />
                                            <span className="eye-button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                            </span>
                                        </div>
                                        <div className="modal-buttons">
                                            <button type="submit" className="submit-button" disabled={isResetLoading}>
                                                {isResetLoading ? t('login.modal_resetting_button') : t('login.modal_reset_button')}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Login;