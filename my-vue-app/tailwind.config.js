const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      nintendo: "#E60011",
      ...colors,
    },
    fontFamily: {
      "D-DIN": ["D-DIN", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};