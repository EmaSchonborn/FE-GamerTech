const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ale: "#592EE1",
      ...colors,
    },
    fontFamily: {
      "D-DIN": ["D-DIN", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
