/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    darkMode: 'media',
    extend: {
      colors:{
        default:{
          backgroud: 'green',
          text:'white'
        },
        light:{
          backgroud: '#ccc',
          text:'black'
        },
        dark:{
          backgroud: '#000',
          text:'yellow'
        }
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      }
    },
  },
  plugins: [],
}

