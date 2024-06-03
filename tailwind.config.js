/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "tablet-1": "768px",
      "tablet-2": "868px",
      pc: "1280px",
      md: "768px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
