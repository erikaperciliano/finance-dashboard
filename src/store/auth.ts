import { create } from 'zustand';
import { AuthSote, User } from '../types';

const STORAGE_KEY = 'finance_users';
const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutos

const getUsers = (): User[] => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

const saveUsers = (users: User[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

export const useAuthStore = create<AuthSote>((set) => ({
    user: null,
    isAuthenticated: false,

    login: (email: string, password: string) => {
        const users = getUsers();
        const user = users.find(u => u.email === email && u.password === password);

        if(user) { 
            set({ user, isAuthenticated: true });
            localStorage.setItem('session_start', Date.now().toString());
            return true;
        }

        return false;
    },

    register: (email: string, password: string) => {
        const users = getUsers();
        if(users.some(u => u.email === email)) {
            return false;
        }

        const newUser: User = {
            id: crypto.randomUUID(),
            email,
            password
        };

        users.push(newUser);
        saveUsers(users);
        set({ user: newUser, isAuthenticated: true});
        localStorage.setItem('session_start', Date.now().toString());
        return true;
    },

    logout() {
        set({ user: null, isAuthenticated: false });
        localStorage.removeItem('session_start');
    },
}));

export const checkSession = () => {
    const sessionStart = localStorage.getItem('session_start');
    if(!sessionStart) 
        return false;

    const elapsed = Date.now() - parseInt(sessionStart);
    return elapsed < SESSION_TIMEOUT;
}