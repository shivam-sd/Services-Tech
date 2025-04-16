/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        AfacadFlux:["Afacad Flux"],
        Afacad:["Afacad"],
      }
    },
  },
  plugins: [],
}