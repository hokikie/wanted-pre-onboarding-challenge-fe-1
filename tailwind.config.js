/** @type {import('tailwindcss').Config} */
const defaultColors = require("tailwindcss/colors");
const INT0_100 = { ...Array.from(Array(101)).map((_, i) => i) };
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#000",
        "main-contrast": "#FFFFFF",
        sub: "#333",
        "sub-contrast": "#FEFEFE",
        ...defaultColors,
      },
    },
    zIndex: INT0_100,
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
