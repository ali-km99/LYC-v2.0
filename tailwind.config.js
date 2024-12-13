/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        aboutSmall: "url('../assets/imeges/image8.jpg ')",
        about: "url('../assets/imeges/image9.jpg')",
      },
    },
  },
  plugins: [],
}
