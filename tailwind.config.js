const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  theme: {
    extend: {},
    colors: {
      green: colors.green,
      gray: colors.gray,
      red: colors.red,
      blue: colors.blue
    },
    fontFamily: {
      body: ['Poppins', 'sans-serif']
    },
  },
  variants: {
    extend: {},
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [],
}