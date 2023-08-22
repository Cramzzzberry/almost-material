/** @type {import('tailwindcss').Config} */
const plugin = require('@cramzzzberry/almost-material-plugin')

const myPalette = {
  primary: "#4fc1e9",
   
  secondary: "#ec87c0",
      
  tertiary: "#ac92ec",
      
  info: "#5d9cec",
      
  warning: "#ffce54",
      
  success: "#a0d468",
      
  error: "#ed5565",
}

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: plugin.CreateShades(myPalette)
    },
    almostMaterial: myPalette,
  },
  plugins: [plugin.almostMaterial],
}