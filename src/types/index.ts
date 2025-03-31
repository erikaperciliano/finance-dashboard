export interface User {
    id: string;
    email: string;
    password: string;
}

export interface FinanceData {
    symbol: string;
    name: string;
    price: number;
    variation: number;
    history: {
        timestamp: number;
        price: number;
    }[];
}

export interface AuthStore {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => boolean;
    register: (email: string, password: string) => boolean;
    logout: () => void;
}

export interface FinanceStore {
    data: FinanceData[];
    selectedSymbol: string | null;
    setSelectedSymbol: (symbol: string) => void;
    fetchData: () => Promise<void>;
}