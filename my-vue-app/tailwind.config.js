const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      nintendo: "#E60011",
      ...colors,
      brand: {
        100: "#f7fafc",
        900: "#1a202c",
      },
    },
    fontFamily: {
      heading: ["Montserrat", "sans-serif"],
      body: ["Inter", "sans-serif"],
      "D-DIN": ["D-DIN", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
