/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/*.{html,j2}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};