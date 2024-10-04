export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#0B192C',  
        textSecondary: '#FF6500',
        navFooterGray : "#1E3E62"
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      fontSize : {
        h1 : "40px",
        h2 : "35px",
        h3 : "30px",
        h4 : "25px",
        p : "25px"
      }
    },
  },
  plugins: [require('daisyui')],
}
