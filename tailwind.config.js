/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // define fonts for the body and title
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },

      // define colors
      colors: {
        bodyColorOne: "#1e293b",
        bodyColor: "#212428",

        lightText: "#c4cfde",
        boxBackground: "liner-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f",
        textColor: "#ff4500",
        colorNeutral: "#ca8a04",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
    },
  },
  plugins: [],
};
