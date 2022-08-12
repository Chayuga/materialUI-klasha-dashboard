/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        12: '12px',
        14: '14px',
        16: '16px',
      },
      backgroundColor: {
        'main-bg': '#FFFFFFF',
        'sidebar-bg': '#FFFBF7',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        colors: '#F0F0F0',
      },
      fontColor: {
        black: '#222223',
        darkGrey: '#464646',
        grey: '#4C4C4C',
        lightGrey: '#A3A3A3',
      },
    },
  },
  plugins: [],
};
