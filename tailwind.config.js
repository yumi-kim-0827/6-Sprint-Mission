/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./widgets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gray: "#DFDFDF",
      blue: "#3692FF",
    },
    screens: {
      sm: "375px",
      md: "744px",
      lg: "1200px",
    },
    extend: {},
  },
  plugins: [],
};
