/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: 'var(--color-primary)',
            dark: 'var(--color-primary-dark)',
          },
          dark: {
            DEFAULT: '#1a1a1a',
            lighter: '#2a2a2a',
            card: '#242424',
          },
        },
      },
    },
    plugins: [],
  };