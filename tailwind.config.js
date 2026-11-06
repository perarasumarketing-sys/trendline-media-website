/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD400',
        brandYellow: '#FFD400',
        brandRed: '#E52329',
        brandBg: '#050505',
        brandCard: '#171717',
        brandMuted: '#A0A0A0',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
      },
    },
  },
  plugins: [],
};
