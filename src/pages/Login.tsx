import { Eye, EyeOff, LogIn, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useAuthStore } from '../store/auth';
import { useThemeStore } from '../store/theme';
import { Link, useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate()
  const { login } = useAuthStore();
  const { isDark, toggleTheme } = useThemeStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const success = login(email, password);

    if(success) {
      navigate('/dashboard');
    } else {
      setError('Credenciais inválidas');
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-dark' : 'bg-gray-100'}`}>
      <div className={`p-8 rounded-lg shadow-2xl w-full max-w-md ${
        isDark 
          ? 'bg-dark-card border-gray-800' 
          : 'bg-white border-gray-200'
      } border`}>
        <div className="flex justify-between items-center mb-8">
          <h2 className={`text-3xl font-bold ${isDark ? 'text-primary' : 'text-primary-dark'}`}>
            Bem-vindo de volta
          </h2>
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
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className={`block text-sm font-medium mb-2 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg transition-colors ${
                isDark 
                  ? 'bg-dark-lighter border-gray-700 text-gray-100 focus:border-primary focus:ring-primary' 
                  : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-primary-dark focus:ring-primary-dark'
              } border focus:outline-none focus:ring-1`}
              required
            />
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Senha
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg transition-colors ${
                  isDark 
                    ? 'bg-dark-lighter border-gray-700 text-gray-100 focus:border-primary focus:ring-primary' 
                    : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-primary-dark focus:ring-primary-dark'
                } border focus:outline-none focus:ring-1`}
                required
              />
              <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                    isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-red-400 text-sm bg-red-900/20 p-3 rounded-lg">{error}</p>
          )}

          <button
            type="submit"
            className={`w-full flex items-center justify-center gap-2 font-semibold py-3 px-4 rounded-lg transition-colors ${
              isDark 
                ? 'bg-primary hover:bg-primary-dark text-dark' 
                : 'bg-primary-dark hover:bg-primary text-white'
            }`}
          >
            <LogIn size={20}/>
            Entrar
          </button>

          <Link
            to="/register"
            className={`block w-full text-center text-sm transition-colors ${
              isDark 
                ? 'text-primary hover:text-primary-dark' 
                : 'text-primary-dark hover:text-primary'
            }`}
          >
            Não tem uma conta? Cadastre-se
          </Link>
        </form>
      </div>
    </div>
  );
}