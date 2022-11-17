/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Borui: ["borui", "serif"],
        Gruppo: ["gruppo", "serif"],
        Raleway: ["Raleway", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#113034",
        secondary: "#fffef9",
      },
      backgroundImage: {
        hero: 'url("../public/wallpaper.jpg")',
      },
    },
  },
  plugins: [],
};
