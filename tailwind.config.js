/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
        rokaf: ["ROKAF Sans", "sans-serif"],
      },
      colors: {
        "bland-blue": "#3692ff",
        "cool-gary-50": "#F9FAFB",
        "cool-gary-100": "#F3F4F6",
        "cool-gary-200": "#E5E7EB",
        "cool-gary-400": "#9CA3AF",
      },
      fontSize: {
        "fs-20": "20px",
      },
      borderRadius: {
        "custom-bottom": "0 0 32px 32px",
      },
      width: {
        "btn-width": "88px",
      },
      height: {
        "btn-height": "42px",
      },
    },
  },
  plugins: [require("./plugins/boardsCustomUtilities")],
};
