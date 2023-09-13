/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bluePrimary": '#3C6077',
        "purplePrimary": "#9B59B6",
        "greyPrimary": "#F3F4F8",
        "success": "#7FFA92",
        "warning": "#FFEF77",
        "danger": "#F76767"
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/images/backdrop.png')",
        'mission-bg': "url('./src/assets/images/missionbg.png')",
      }
    },
  },
  plugins: [],
}