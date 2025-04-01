import { useCallback, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';
import { useFinanceStore } from '../store/finance';
import { useThemeStore } from '../store/theme';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { LogOut, TrendingUp, ArrowUpRight, ArrowDownRight, Moon, Sun } from 'lucide-react';

export function Dashboard() {
  const navigate = useNavigate();
  const { logout } = useAuthStore();
  const { isDark, toggleTheme } = useThemeStore();
  const { data, selectedSymbol, setSelectedSymbol, fetchData } = useFinanceStore();


  const fetchFinanceData = useCallback(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    fetchFinanceData();
    const interval = setInterval(fetchFinanceData, 5000);
    
    return () => clearInterval(interval);
  }, [fetchFinanceData]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const selectedData = useMemo(() => data.find(item => item.symbol === selectedSymbol), [data, selectedSymbol]);
  return (
    <div className={`min-h-screen ${isDark ? 'bg-dark' : 'bg-gray-100'} p-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-3xl font-bold flex items-center gap-2 ${isDark ? 'text-primary' : 'text-primary-dark'}`}>
            <TrendingUp className="text-primary" />
            Painel Financeiro
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`flex items-center gap-2 py-2 px-4 rounded-lg ${isDark ? 'text-primary hover:bg-dark-lighter' : 'text-primary-dark hover:bg-gray-100'}`}
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              onClick={handleLogout}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${isDark ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20' : 'bg-red-500 text-white hover:bg-red-600'}`}
            >
              <LogOut size={20} />
              Sair
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={`rounded-lg shadow-xl border p-6 ${isDark ? 'bg-dark-card border-gray-800' : 'bg-white border-gray-200'}`}>
            <h2 className={`text-xl font-semibold mb-6 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Visão Geral do Mercado</h2>
            <div className="space-y-4">
              {data.map((item) => (
                <button
                  key={item.symbol}
                  onClick={() => setSelectedSymbol(item.symbol)}
                  className={`w-full p-4 rounded-lg border transition-all ${
                    selectedSymbol === item.symbol
                      ? isDark ? 'border-primary bg-primary/5' : 'border-blue-500 bg-blue-100'
                      : isDark ? 'border-gray-800 hover:border-gray-700 bg-dark-lighter' : 'border-gray-300 hover:border-gray-400 bg-white'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="text-left">
                      <h3 className={`${isDark ? 'text-gray-100' : 'text-gray-900'} font-medium`}>{item.name}</h3>
                      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{item.symbol}</p>
                    </div>
                    <div className="text-right">
                      <p className={`${isDark ? 'text-gray-100' : 'text-gray-900'} font-semibold`}>R$ {item.price.toFixed(2)}</p>
                      <p className={`text-sm flex items-center justify-end gap-1 ${item.variation >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {item.variation >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                        {Math.abs(item.variation).toFixed(2)}%
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className={`rounded-lg shadow-xl border p-6 ${isDark ? 'bg-dark-card border-gray-800' : 'bg-white border-gray-200'}`}>
            <h2 className={`text-xl font-semibold mb-6 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Evolução do Preço</h2>
            {selectedData  && selectedData.history.length > 0 ? (
              <div className={`chart-container h-[400px] ${isDark ? 'bg-dark' : 'bg-white'}`}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={selectedData.history}>
                    <XAxis dataKey="timestamp" tickFormatter={(timestamp) => new Date(timestamp).toLocaleTimeString()} stroke="#4B5563" />
                    <YAxis stroke={isDark ? '#e5e7eb' : '#374151'} />
                    <Tooltip contentStyle={{ backgroundColor: isDark ? '#242424' : '#ffffff', border: '1px solid #374151', borderRadius: '0.5rem' }} labelStyle={{ color: '#9CA3AF' }} itemStyle={{ color: '#00ff9d' }} labelFormatter={(timestamp) => new Date(timestamp).toLocaleString()} formatter={(value) => [`R$ ${Number(value).toFixed(2)}`, 'Preço']} />
                    <Line type="monotone" dataKey="price" stroke={isDark ? '#00ff9d' : '#1f8e73'} strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="h-[400px] flex items-center justify-center text-gray-500">
                Nenhum dado disponível para exibir o gráfico.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
