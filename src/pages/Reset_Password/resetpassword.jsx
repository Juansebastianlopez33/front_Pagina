import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Importar hook

const ResetPassword = () => {
    const { t } = useTranslation(); // Inicializar hook
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [resetCode, setResetCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const tokenFromUrl = searchParams.get("token");
        if (tokenFromUrl) {
            setResetCode(tokenFromUrl);
        }
    }, [searchParams]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(newPassword)) {
            setError(t('reset_password.errors.password_requirements'));
            return;
        }
        if (newPassword !== confirmPassword) {
            setError(t('reset_password.errors.password_mismatch'));
            return;
        }
        if (!resetCode || resetCode.length !== 6) {
            setError(t('reset_password.errors.invalid_code'));
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/reset-password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    token: resetCode,
                    new_password: newPassword
                }),
            });
            const data = await response.json();
            if (!response.ok) throw data;

            setMessage(data.message || t('reset_password.success_message'));
            setTimeout(() => navigate("/login"), 2000);
        } catch (err) {
            setError(err.error || err.message || t('reset_password.errors.generic'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="reset-password-container">
            <h2>{t('reset_password.title')}</h2>
            {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{error}</p>}

            <form onSubmit={handleSubmit} noValidate>
                <div className="password-container">
                    <input
                        type="text"
                        placeholder={t('reset_password.code_placeholder')}
                        value={resetCode}
                        onChange={(e) => setResetCode(e.target.value)}
                        className="password-input"
                        required
                        disabled={loading}
                    />
                </div>
                <div className="password-container">
                    <input
                        type={showNewPassword ? "text" : "password"}
                        placeholder={t('reset_password.new_password_placeholder')}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="password-input"
                        required
                        disabled={loading}
                    />
                    <span className="eye-button" onClick={() => setShowNewPassword(!showNewPassword)}>
                        {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                <div className="password-container">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder={t('reset_password.confirm_password_placeholder')}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="password-input"
                        required
                        disabled={loading}
                    />
                    <span className="eye-button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? t('reset_password.submit_button_loading') : t('reset_password.submit_button')}
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;