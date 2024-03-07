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
        product: '18px 18px 36px 0 rgba(211, 209, 216, 0.25)',
        star: "0 6px 24px 0 rgba(254, 114, 76, 0.2)"
      },
      gridTemplateColumns: {
        productList: "repeat(auto-fit,minmax(350px,1fr))"
      }
    },
    fontFamily: {
      sans: ["opensans"]
    }
  },
  plugins: [],
}