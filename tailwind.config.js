/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "745px",
    },
    colors: {
      transparent: "transparent",
      red: "#f74747",
      blue: "#3692ff",
      white: "#fff",
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
    },
    fontFamily: {
      sans: ["Pretendard", "ui-sans-serif", "system-ui"],
      ROKAFSans: ["ROKAF Sans"],
      Abel: ["Abel"],
    },
    lineHeight: {
      11: 1.1,
      12: 1.2,
      14: 1.4,
    },
  },
  plugins: [],
};
