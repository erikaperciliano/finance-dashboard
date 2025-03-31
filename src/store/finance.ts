import { create } from 'zustand';
import { FinanceStore, FinanceData } from '../types';

const API_URL = `/api/finance?key=${import.meta.env.VITE_HG_API_KEY}`;

const HISTORY_STORAGE_KEY = 'finance_history';

const loadHistory = (): Record<string, { timestamp: number; price: number }[]> => {
    const stored = localStorage.getItem(HISTORY_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {}
}

const saveHistory = (history: Record<string, {timestamp: number; price: number }[]>) => {
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history));
}

export const useFinanceStore = create<FinanceStore>((set) => ({
  data: [] as FinanceData[],
  selectedSymbol: null,

  setSelectedSymbol: (symbol: string) => {
    set({ selectedSymbol: symbol });
  },

  fetchData: async () => {
    try {
      const response = await fetch(API_URL, { mode: 'cors'});
      if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);

      const result = await response.json();

      if (!result.results?.currencies) {
        throw new Error('Resposta inválida da API');
      }

      const historyData = loadHistory();  

      const financeData: FinanceData[] = Object.entries(result.results.currencies).map(
        ([symbol, item]) => {
          const currency = item as { name: string; buy: number; variation: number };

          const newEntry = { timestamp: Date.now(), price: currency.buy ?? 0 };

          const updatedHistory = [
            ...(historyData[symbol] || []), 
            newEntry 
          ].slice(-50); // Mantém os últimos 50 registros para evitar que o histórico fique muito grande

          historyData[symbol] = updatedHistory;
          saveHistory(historyData);

          return {
            symbol,
            name: currency.name,
            price: currency.buy ?? 0,
            variation: currency.variation,
            history: updatedHistory 
          };
        }
      );

      set(() => ({ data: financeData }));
    } catch (error) {
      console.error('Erro ao buscar dados da HG API:', error);
      set(() => ({ data: [], selectedSymbol: null }));
    }
  }
}));
