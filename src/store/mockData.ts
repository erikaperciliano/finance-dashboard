export const MOCK_DATA = [
    {
      symbol: 'USD',
      name: 'US Dollar',
      price: 4.95,
      variation: 0.5,
      history: Array.from({ length: 10 }, (_, i) => ({
        timestamp: Date.now() - i * 300000,
        price: 4.95 + (Math.random() * 0.2 - 0.1),
      })).reverse(),
    },
    {
      symbol: 'EUR',
      name: 'Euro',
      price: 5.35,
      variation: -0.3,
      history: Array.from({ length: 10 }, (_, i) => ({
        timestamp: Date.now() - i * 300000,
        price: 5.35 + (Math.random() * 0.2 - 0.1),
      })).reverse(),
    },
    {
      symbol: 'GBP',
      name: 'British Pound',
      price: 6.25,
      variation: 0.8,
      history: Array.from({ length: 10 }, (_, i) => ({
        timestamp: Date.now() - i * 300000,
        price: 6.25 + (Math.random() * 0.2 - 0.1),
      })).reverse(),
    },
    {
      symbol: 'ARS',
      name: 'Argentine Peso',
      price: 0.006,
      variation: -1.2,
      history: Array.from({ length: 10 }, (_, i) => ({
        timestamp: Date.now() - i * 300000,
        price: 0.006 + (Math.random() * 0.0002 - 0.0001),
      })).reverse(),
    },
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 252000,
      variation: 2.5,
      history: Array.from({ length: 10 }, (_, i) => ({
        timestamp: Date.now() - i * 300000,
        price: 252000 + (Math.random() * 5000 - 2500),
      })).reverse(),
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      price: 13500,
      variation: 1.8,
      history: Array.from({ length: 10 }, (_, i) => ({
        timestamp: Date.now() - i * 300000,
        price: 13500 + (Math.random() * 300 - 150),
      })).reverse(),
    },
    {
      symbol: 'PETR4',
      name: 'Petrobras PN',
      price: 35.82,
      variation: -0.5,
      history: Array.from({ length: 10 }, (_, i) => ({
        timestamp: Date.now() - i * 300000,
        price: 35.82 + (Math.random() * 0.5 - 0.25),
      })).reverse(),
    },
    {
      symbol: 'VALE3',
      name: 'Vale ON',
      price: 68.45,
      variation: 1.2,
      history: Array.from({ length: 10 }, (_, i) => ({
        timestamp: Date.now() - i * 300000,
        price: 68.45 + (Math.random() * 1 - 0.5),
      })).reverse(),
    },
    {
      symbol: 'ITUB4',
      name: 'Itaú PN',
      price: 32.90,
      variation: 0.3,
      history: Array.from({ length: 10 }, (_, i) => ({
        timestamp: Date.now() - i * 300000,
        price: 32.90 + (Math.random() * 0.4 - 0.2),
      })).reverse(),
    },
    {
      symbol: 'BBDC4',
      name: 'Bradesco PN',
      price: 15.75,
      variation: -0.8,
      history: Array.from({ length: 10 }, (_, i) => ({
        timestamp: Date.now() - i * 300000,
        price: 15.75 + (Math.random() * 0.3 - 0.15),
      })).reverse(),
    },
  ];
  