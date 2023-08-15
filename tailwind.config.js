/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      // Responsiveness
      screens: {
        smallerPhone: "320px",
        mediumPhones: "390px",
        largerPhones: "500px",
        smallerTablet: "680px",
        largerTablet: "768px",
        smallerLaptop: "960px",
        largerLaptop: "1024px",
        largeScreen: "1280px",
      },
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
