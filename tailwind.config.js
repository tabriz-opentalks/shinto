/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Sahel', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
