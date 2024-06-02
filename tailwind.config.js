/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      'sm': '375px',
      'md' : '768px',
      'lg' : '1200px',
    },
    extend: {},
  },
  plugins: [],
};
