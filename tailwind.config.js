/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        primary: '#FE724C'
      },
      backgroundColor: {
        primary: '#FE724C'
      }
    },
    fontFamily: {
      sans: ["opensans"]
    }
  },
  plugins: [],
}