/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { jwtDecode } from 'jwt-decode';
<<<<<<< HEAD
import Loader from '../components/Loader/Loader';
=======
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
<<<<<<< HEAD
    const [accessToken, setAccessToken] = useState(() => localStorage.getItem("access_token"));
    const [refreshToken, setRefreshToken] = useState(() => localStorage.getItem("refresh_token"));
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isInitializing, setIsInitializing] = useState(true);
=======
    // Inicializar los tokens desde localStorage
    const [accessToken, setAccessToken] = useState(() => localStorage.getItem("access_token"));
    const [refreshToken, setRefreshToken] = useState(() => localStorage.getItem("refresh_token"));
    
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2

    const API_URL = import.meta.env.VITE_API_URL;

    const logout = useCallback(() => {
        console.log("Cierre de sesión.");
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
<<<<<<< HEAD
        localStorage.removeItem("goe_user"); // 🔥 limpiar goe_user también
        setAccessToken(null);
        setRefreshToken(null);
        setUser(null);
        setProfile(null);
        setIsAuthenticated(false);
    }, []);

    useEffect(() => {
        const initializeAuth = async () => {
            if (!refreshToken) {
                setIsInitializing(false);
                return;
            }
            try {
                const response = await fetch(`${API_URL}/refresh`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${refreshToken}`
                    },
                });

                if (!response.ok) {
                    throw new Error("El token de refresco no es válido.");
                }

                const data = await response.json();
                const newAccessToken = data.access_token;
                localStorage.setItem("access_token", newAccessToken);
                setAccessToken(newAccessToken);
                
                const decodedUser = jwtDecode(newAccessToken);
=======
        setAccessToken(null);
        setRefreshToken(null);
        setUser(null);
        setIsAuthenticated(false);
    }, []);

    // Función para decodificar y establecer el usuario desde un token
    const decodeAndSetUser = useCallback((tokenToDecode) => {
        if (tokenToDecode) {
            try {
                // LÍNEA CORREGIDA: Se asegura de que no haya espacios inválidos
                const decodedUser = jwtDecode(tokenToDecode);
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
                setUser({
                    id: decodedUser.user_id,
                    username: decodedUser.username,
                    email: decodedUser.email,
                    verificado: decodedUser.verificado
                });
                setIsAuthenticated(true);
<<<<<<< HEAD

                const profileResponse = await fetch(`${API_URL}/user/perfil`, {
                    headers: { "Authorization": `Bearer ${newAccessToken}` },
                });

                if (profileResponse.ok) {
                    const profileData = await profileResponse.json();
                    setProfile(profileData);

                    // 🔥 Guardar en localStorage para el juego
                    const userData = {
                        id: decodedUser.user_id,
                        username: decodedUser.username,
                        email: decodedUser.email,
                        verificado: decodedUser.verificado,
                        foto_perfil: profileData.foto_perfil || "https://via.placeholder.com/150/000000/FFFFFF/?text=Avatar",
                        access_token: newAccessToken,
                        refresh_token: refreshToken
                    };
                    localStorage.setItem("goe_user", JSON.stringify(userData));
                }

            } catch (error) {
                console.error("Fallo en la inicialización de la autenticación:", error.message);
                logout();
            } finally {
                setIsInitializing(false);
            }
        };

        initializeAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const login = (newAccessToken, newRefreshToken) => {
        localStorage.setItem("access_token", newAccessToken);
        localStorage.setItem("refresh_token", newRefreshToken);
        window.location.reload(); 
    };
    
    const updateUserProfile = (newProfileData) => {
        setProfile(prevProfile => ({...prevProfile, ...newProfileData}));
        // Opcional: También puedes sincronizar esto con localStorage si lo necesitas
        const current = JSON.parse(localStorage.getItem("goe_user")) || {};
        localStorage.setItem("goe_user", JSON.stringify({
            ...current,
            ...newProfileData
        }));
=======
            } catch (error) {
                console.error("Error al decodificar token:", error);
                setUser(null);
                setIsAuthenticated(false);
                localStorage.removeItem("access_token");
                localStorage.removeItem("refresh_token");
            }
        } else {
            setUser(null);
            setIsAuthenticated(false);
        }
    }, [logout]);

    const refreshAccessToken = useCallback(async () => {
        if (!refreshToken) {
            console.warn("No hay refresh token disponible para refrescar.");
            logout();
            return false;
        }

        try {
            console.log("Intentando refrescar token...");
            const response = await fetch(`${API_URL}/refresh`, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${refreshToken}`
                },
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("access_token", data.access_token);
                setAccessToken(data.access_token);
                decodeAndSetUser(data.access_token);
                console.log("Access token refrescado exitosamente.");
                return true;
            } else {
                console.error("Fallo al refrescar token:", await response.json());
                logout();
                return false;
            }
        } catch (error) {
            console.error("Error de red al refrescar token:", error);
            logout();
            return false;
        }
    }, [refreshToken, API_URL, decodeAndSetUser, logout]);

    useEffect(() => {
        const checkAuth = async () => {
            setLoading(true);
            if (accessToken) {
                try {
                    const decodedUser = jwtDecode(accessToken);
                    const isAccessTokenExpired = decodedUser.exp * 1000 < Date.now();

                    if (isAccessTokenExpired) {
                        console.log("Access token expirado. Intentando refrescar...");
                        const refreshed = await refreshAccessToken();
                        if (!refreshed) {
                            setLoading(false);
                            return;
                        }
                    } else {
                        decodeAndSetUser(accessToken);
                        console.log("Usuario autenticado con access token válido.");
                    }
                } catch (error) {
                    console.error("Error al decodificar access token en useEffect:", error);
                    logout();
                }
            } else {
                if (refreshToken) {
                    console.log("No access token pero hay refresh token. Intentando refrescar...");
                    await refreshAccessToken();
                } else {
                    setIsAuthenticated(false);
                    setUser(null);
                    console.log("No access token ni refresh token. Usuario no autenticado.");
                }
            }
            setLoading(false);
        };

        checkAuth();
    }, [accessToken, refreshToken, decodeAndSetUser, refreshAccessToken]);

    const login = (newAccessToken, newRefreshToken) => { 
        console.log("Login: Recibiendo tokens...");
        localStorage.setItem("access_token", newAccessToken);
        localStorage.setItem("refresh_token", newRefreshToken);
        setAccessToken(newAccessToken);
        setRefreshToken(newRefreshToken);
        decodeAndSetUser(newAccessToken);
        console.log("Login exitoso. Tokens y usuario guardados.");
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
    };

    const value = {
        token: accessToken,
        user,
<<<<<<< HEAD
        profile,
        isAuthenticated,
        loading: isInitializing,
        login,
        logout,
        updateUserProfile
=======
        isAuthenticated,
        loading,
        login,
        logout,
        refreshAccessToken
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
    };

    return (
        <AuthContext.Provider value={value}>
<<<<<<< HEAD
            {!isInitializing ? children : <Loader />}
=======
            {!loading && children} 
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
<<<<<<< HEAD
};
=======
};
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
