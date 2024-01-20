/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      boxShadow: {
        input: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        clifford: '#da373d',
      }
    },
  },
  plugins: [],
}
