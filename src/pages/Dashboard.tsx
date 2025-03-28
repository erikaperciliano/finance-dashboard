import { LogOut, TrendingUp } from "lucide-react";
import { useAuthStore } from "../store/auth";
import { useNavigate } from 'react-router-dom'

export function Dashboard() {
    const navigate = useNavigate();
    const { logout } = useAuthStore();

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    return(
        <div className="min-h-screen bg-dark p-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-primary flex items-center gap-2">
                        <TrendingUp className="text-primary"/>
                        Painel Financeiro
                    </h1>
                    <button 
                        onClick={handleLogout}
                        className="flext items-center gap-2 bg-red-500/10 text-red-400 py-2 px-4 rounded-lg hover:bg-red-500/20 transition-colors"
                    >
                        <LogOut size={20}/>
                        Sair
                    </button>
                </div>

                <div className="grid md-grid-colors-2 gap-6">
                    <div className="bg-dark-card rounded-lg shadow-xl border border-gray-800 p-6">
                        <h2 className="text-xl font-semibold mb-6 text-gray-100">Visão Geral do Mercado</h2>
                        <div className="space-y-4">
                            
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}