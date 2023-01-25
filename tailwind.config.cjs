/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        'purple-primary': '#7C5DFA',
        'purple-secondary': '#9277FF',
        'gray-primary': '#373B53',
        'dark-primary': '#1E2139',
        'blue-primary': '#858BB2',
        'blue-secondary': '#7E88C3',
        'blue-tertiary': '#494E6E',
      },

      transitionDuration: {
        250: '250ms',
      },
    },
  },
  plugins: [],
};
