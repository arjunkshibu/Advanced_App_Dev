/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'blurBack': "url('./src/assets/img/peakpx.jpg')",
      },
      fontFamily:{
        'Montserrat': ["Montserrat, sans"]
      }
    },
  },
  plugins: [],
}

