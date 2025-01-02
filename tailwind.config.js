/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize:{
        'primary-heading':'1.375rem',
        'card-text':'0.875rem'
      },
      backgroundColor:{
        'primary':'#F2F4F7',
        'btn-primary':'#02BF67'
      }
    },
    fontFamily: {
      gilroy: ["Gilroy-SemiBold",],
    },
    textColor:{
      primary:'#1D2939',
      primaryTitle:'#101828',
      primaryText:'#344054',
      textwhite:'white'
    },
    boxShadow:{
      'box':'0px 2px 4px -2px rgba(16, 24, 40, 0.06),0px 4px 8px -2px rgba(16, 24, 40, 0.1)'
    },

  },
 
  plugins: [],
}