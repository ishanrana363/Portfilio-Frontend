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
        // lg device
        lgH1 : "50px",
        lgH2 : "47px",
        lgH3 : "44px",
        lgH4 : "40px",
        lgH5 : "37px",
        lgH6 : "34px",
        lgP : "22px",

        // md device

        mdH1 : "46px",
        mdH2 : "43px",
        mdH3 : "40px",
        mdH4 : "36px",
        mdH5 : "33px",
        mdH6 : "29px",
        mdP : "20px",

        // sm device

        smH1 : "35px",
        smH2 : "33px",
        smH3 : "30px",
        smH4 : "26px",
        smH5 : "22px",
        smH6 : "20px",
        smP : "18px"

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
