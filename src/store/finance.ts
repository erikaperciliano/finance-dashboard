import { create } from 'zustand';
import { FinanceStore, FinanceData } from '../types';

const API_URL = `/api/finance?key=${import.meta.env.VITE_HG_API_KEY}`;

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
      console.log("Dados da API:", result.results.currencies);

      const financeData: FinanceData[] = Object.entries(result.results.currencies).map(
        ([symbol, item]) => {
          const currency = item as { name: string; buy: number; variation: number };
          return {
            symbol,
            name: currency.name,
            price: currency.buy ?? 0,
            variation: currency.variation,
            history: [] as { timestamp: number, price: number }[]
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
