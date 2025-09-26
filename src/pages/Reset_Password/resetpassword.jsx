import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
<<<<<<< HEAD
import { useTranslation } from 'react-i18next'; // Importar hook

const ResetPassword = () => {
    const { t } = useTranslation(); // Inicializar hook
=======

const ResetPassword = () => {
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
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

<<<<<<< HEAD
=======
    // Si el código viene en la URL, precargarlo
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
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

<<<<<<< HEAD
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
=======
        // Validación igual a la del backend (auth.py)
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(newPassword)) {
            setError("La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un símbolo.");
            return;
        }

        if (newPassword !== confirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }

        if (!resetCode || resetCode.length !== 6) {
            setError("El código de verificación debe tener 6 dígitos.");
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/reset-password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
<<<<<<< HEAD
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
=======
                    token: resetCode, // ✅ importante: coincide con el backend
                    new_password: newPassword
                }),
            });

            const data = await response.json();
            if (!response.ok) throw data;

            setMessage(data.message || "¡Contraseña actualizada con éxito!");
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } catch (err) {
            console.error("Error al restablecer contraseña:", err);
            setError(err.error || err.message || "Ocurrió un error al restablecer la contraseña.");
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="reset-password-container">
<<<<<<< HEAD
            <h2>{t('reset_password.title')}</h2>
=======
            <h2>Restablecer Contraseña</h2>
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
            {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{error}</p>}

            <form onSubmit={handleSubmit} noValidate>
                <div className="password-container">
                    <input
                        type="text"
<<<<<<< HEAD
                        placeholder={t('reset_password.code_placeholder')}
=======
                        placeholder="Código de verificación"
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                        value={resetCode}
                        onChange={(e) => setResetCode(e.target.value)}
                        className="password-input"
                        required
                        disabled={loading}
                    />
                </div>
<<<<<<< HEAD
                <div className="password-container">
                    <input
                        type={showNewPassword ? "text" : "password"}
                        placeholder={t('reset_password.new_password_placeholder')}
=======

                <div className="password-container">
                    <input
                        type={showNewPassword ? "text" : "password"}
                        placeholder="Nueva contraseña"
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
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
<<<<<<< HEAD
                <div className="password-container">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder={t('reset_password.confirm_password_placeholder')}
=======

                <div className="password-container">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirmar nueva contraseña"
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
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
<<<<<<< HEAD
                <button type="submit" disabled={loading}>
                    {loading ? t('reset_password.submit_button_loading') : t('reset_password.submit_button')}
=======

                <button type="submit" disabled={loading}>
                    {loading ? "Actualizando..." : "Restablecer Contraseña"}
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;