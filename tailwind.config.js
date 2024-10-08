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
      },
      animation: {
        'zoom-in': 'zoomIn 0.6s ease-in-out forwards',
        'fade-in-left': 'fadeInLeft 0.6s ease-in-out forwards',
        'fade-in-right': 'fadeInRight 0.6s ease-in-out forwards',
      },
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [require('daisyui')],
}
