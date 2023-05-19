/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        devanagari: ['Noto Sans Devanagari']
      },
      textColor: {
        brandGreen: '#347571'
      }
      },
      backgroundColor: {
        brandGreen: '#5EC57E'
      }
    },
    plugins: [],
  }