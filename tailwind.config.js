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
      },
      boxShadow: {
        product: '18px 18px 36px 0 rgba(211, 209, 216, 0.25)'
      },
      gridTemplateColumns: {
        productList: "repeat(auto-fill,minmax(200px,350px))"
      }
    },
    fontFamily: {
      sans: ["opensans"]
    }
  },
  plugins: [],
}