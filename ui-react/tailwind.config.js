/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'blurBack': "url('./src/assets/img/peakpx.jpg')",
        'blurBack2':"url('./src/assets/img/peakpx2.jpg)",
        'bg-girl' : "url('./src/assets/img/picture-young-woman-standing-pointing-up2.jpg')",
        'logo' : "url('./src/assets/img/logotext2.png')",
        'logo2' : "url('./src/assets/img/logotext.png)"
      },
      fontFamily:{
        'Montserrat': ["Montserrat, sans"]
      },
      colors:{
        'syn-blue': '#39A7FF',
        'syn-purple' : '#66347F',
        'syn-red':'#891652',
        'syn-skin':'#D27685',
        'syn-darl':'#240A34',
        'syn-white':'#FBF6EE',
        'syn-lb':'#87C4FF',
        'syn-lb-light':'#E0F4FF'
      }
    },
  },
  plugins: [],
}

