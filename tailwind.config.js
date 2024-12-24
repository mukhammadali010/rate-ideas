/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor:{
        'primary':'#F2F4F7'
      }
    },
    fontFamily: {
      gilroy: ["Gilroy-SemiBold",],
    },
    textColor:{
      primary:'#1D2939',
      primaryTitle:'#101828',
      primaryText:'#344054',
    }
  },
  plugins: [],
}