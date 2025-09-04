/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    // Inicializar los tokens desde localStorage
    const [accessToken, setAccessToken] = useState(() => localStorage.getItem("access_token"));
    const [refreshToken, setRefreshToken] = useState(() => localStorage.getItem("refresh_token"));
    
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    const API_URL = import.meta.env.VITE_API_URL;

    const logout = useCallback(() => {
        console.log("Cierre de sesión.");
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
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
                setUser({
                    id: decodedUser.user_id,
                    username: decodedUser.username,
                    email: decodedUser.email,
                    verificado: decodedUser.verificado
                });
                setIsAuthenticated(true);
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
    };

    const value = {
        token: accessToken,
        user,
        isAuthenticated,
        loading,
        login,
        logout,
        refreshAccessToken
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children} 
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};