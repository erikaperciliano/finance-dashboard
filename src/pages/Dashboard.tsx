import { LogOut, Moon, Sun } from 'lucide-react';
import { useAuthStore } from '../store/auth';
import { useThemeStore } from '../store/theme';
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const { isDark, toggleTheme } = useThemeStore();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-dark' : 'bg-gray-100'}`}>
      <nav className={`${
        isDark 
          ? 'bg-dark-card border-gray-800' 
          : 'bg-white border-gray-200'
      } border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className={`text-xl font-bold ${
              isDark ? 'text-primary' : 'text-primary-dark'
            }`}>
              Dashboard
            </h1>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${
                  isDark 
                    ? 'text-primary hover:bg-dark-lighter' 
                    : 'text-primary-dark hover:bg-gray-100'
                }`}
              >
                {isDark ? <Sun size={24} /> : <Moon size={24} />}
              </button>
              <button
                onClick={handleLogout}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                  isDark 
                    ? 'bg-primary hover:bg-primary-dark text-dark' 
                    : 'bg-primary-dark hover:bg-primary text-white'
                }`}
              >
                <LogOut size={20} />
                Sair
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`p-6 rounded-lg shadow-lg ${
          isDark 
            ? 'bg-dark-card border-gray-800' 
            : 'bg-white border-gray-200'
        } border`}>
          <h2 className={`text-2xl font-semibold mb-4 ${
            isDark ? 'text-gray-100' : 'text-gray-900'
          }`}>
            Bem-vindo, {user?.email}!
          </h2>
          <p className={`${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Este é seu painel de controle. Aqui você pode gerenciar suas configurações e ver suas informações.
          </p>
        </div>
      </main>
    </div>
  );
}