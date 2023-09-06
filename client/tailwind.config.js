/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#030C0E',
        'secondary': '#1C2E34',
        'secondaryDarker': '#132024',
        'goldenWhite': '#BDBEBC'
      }
    },
  },
  plugins: [],
}