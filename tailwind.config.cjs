/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserratAlternate: ["Montserrat Alternates", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        primary: "#031B58",
        secondary: "#0045ff",
      },
    },
  },
  plugins: [],
};
