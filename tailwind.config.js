/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,jsx,js,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          600: "#5046e4",
          300: "#5064e2",
          500: "#5046e4"
        }
      }
    },
  },
  plugins: [],
};
