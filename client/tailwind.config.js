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
        'primary': '#030C0E',
        'secondary': '#1C2E34',
        'secondaryDarker': '#132024',
        'goldenWhite': '#BDBEBC'
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/images/backdrop.png')",
        'mission-bg': "url('./src/assets/images/missionbg.png')",
      }
    },
  },
  plugins: [],
}