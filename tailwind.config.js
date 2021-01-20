const colors = require('tailwindcss/colors')

module.exports = {
  important: true,
  purge: [
    './src/**/*.html',
     './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
  
        primary: {
          100: '#FFF',
          200: '#F6ECDA',
          300: '#F3E5CE',
          400: '#ECD6B0',
          500: '#E4C38B',
          600: '#DCB26A',
          700: '#D3A14A',
          800: '#786D64',
          850: '#413734',
          860: '#534944',
          900: '#2E2424'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
