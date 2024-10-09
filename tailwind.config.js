export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#0B192C',  
        // textSecondary: '#FF6500',
        textSecondary: 'white',
        
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
        p : "25px",
        pSmallDevice : "19px",
        h1SmallDevice : "32px",
        h2SmallDevice : "28px",
      }
    },
  },
  plugins: [require('daisyui')],
}
