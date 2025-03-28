import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkSession, useAuthStore } from '../store/auth';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useAuthStore();

    useEffect(() => {
        const checkAuth = () => {
            if(!isAuthenticated || !checkSession){
                logout();
                navigate('/login');
            }
        };

        checkAuth();
        const inteval = setInterval(checkAuth, 100 * 60) // Check every minute

        return () => clearInterval(inteval);
    }, [isAuthenticated, logout, navigate]);

	return isAuthenticated ? <>{children}</> : null;
};