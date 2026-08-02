import { useContext, useEffect } from 'react';

import { AuthContext } from '../auth.context.jsx';
import { login, register, logout, getMe } from "../services/auth.api.js";

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }

    const { user, setUser, loading, setLoading } = context;

    const handleLogin = async ({ email, password }) => {
        setLoading(true);
        try {
            const data = await login({ email, password });
            setUser(data.user);
            return { success: true };
        } catch (err) {
            console.log(err);
            const message = err.response?.data?.message || 'Login failed. Check your credentials.';
            return { success: false, message };
        } finally {
            setLoading(false);
        }
    };

    const handleRegister = async ({ username, email, password }) => {
        setLoading(true);
        try {
            const data = await register({ username, email, password });
            setUser(data.user);
            return { success: true };
        } catch (err) {
            console.log(err);
            const message = err.response?.data?.message || 'Registration failed.';
            return { success: false, message };
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        setLoading(true);
        try {
            await logout();
            setUser(null);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const getAndSetUser = async () => {
            try {
                const data = await getMe();
                setUser(data.user);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        getAndSetUser();
    }, []); // ✅ important

    return {
        user,
        loading,
        handleRegister,
        handleLogin,
        handleLogout
    };
};