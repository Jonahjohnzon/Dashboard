module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'bluebutton':'rgba(0, 82, 168, 1)',
      'white':'white',
      'border':'rgba(224, 224, 224, 1)',
      'dark':'rgba(51, 51, 51, 1)',
      'lgray':'#FAFAFC',
      'dgray':'#8C8C8C',
      'lblue':'rgba(0, 82, 168,0.1)'
    },
    extend: {
      fontFamily:{
        'nunito':'Nunito'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
}