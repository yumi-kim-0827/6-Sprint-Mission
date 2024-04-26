/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray900: "#1b1d1f",
        gray800: "#26282b",
        gray700: "#374151",
        gray600: "#454c53",
        gray500: "#72787f",
        gray400: "#9ea4a8",
        gray200: "#e5e7eb",
        gray100: "#e8ebed",
        gray50: "#f7f7f8",
        coolGray100: "#f3f4f6",
        coolGray400: "#9ca3af",
        primaryColor: "#3692ff",
        errorColor: "#f74747",
        brandBlue: "#3182f6",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
  },
  plugins: [],
};
