/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          DEFAULT: '#7B4E37',
          100: '#7B4E37',
          200: '#f4eae6',
          300: '#e8d6cc',
          400: '#ddc1b3',
          500: '#d1ac99',
          600: '#c69780',
          700: '#bb8366',
          800: '#ae6e4e',
          900: '#945e42',
        },
      },
    },
  },
  plugins: [],
};
