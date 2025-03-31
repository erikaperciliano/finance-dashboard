import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkSession, useAuthStore } from '../store/auth';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useAuthStore();

    useEffect(() => {
        const checkAuth = () => {
            if(!isAuthenticated || !checkSession()){
                logout();
                navigate('/login');
            }
        };

        checkAuth();
        const interval = setInterval(checkAuth, 60 * 1000) // 60 segundos
        // const interval = setInterval(checkAuth, 1000); // descomenta para teste

        return () => clearInterval(interval);
    }, [isAuthenticated, logout, navigate]);

	return isAuthenticated ? <>{children}</> : null;
};