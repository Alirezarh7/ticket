/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slide: "slide 1.5s ease-in-out infinite",
      },
      keyframes: {
        slide: {
          "0%": { left: "-25%" },
          "100%": { left: "100%" },
        },
      },
      colors: {
        customGreen: '#059669',
      },
    },
  },
  plugins: [],
};