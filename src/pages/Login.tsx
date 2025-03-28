import { LogIn, UserPlus } from 'lucide-react';
import { useState } from 'react';

export function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <div className="bg-dark-card p-8 rounded-lg shadow-2xl w-full max-w-md border border-gray-800">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          {isLogin ? 'Bem-vindo de volta' : 'Criar Conta'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-dark-lighter border border-gray-700 text-gray-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-dark-lighter border border-gray-700 text-gray-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              required
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm bg-red-900/20 p-3 rounded-lg">{error}</p>
          )}

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-dark font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            {isLogin ? <LogIn size={20}/> : <UserPlus size={20}/>}
            {isLogin ? 'Entrar' : 'Criar Conta'}
          </button>

          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="w-full text-sm text-primary hover:text-primary-dark transition-colors"
          >
            {isLogin ? 'Não tem uma conta? Cadastre-se' : 'Já tem uma conta? Entre'}
          </button>
        </form>
      </div>
    </div>
  );
}