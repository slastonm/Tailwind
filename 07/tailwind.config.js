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
      },
      keyframes:{
        textJump:{
          '0%':{
            transform: 'translate(0,0)'
          },
          '25%':{
            transform: 'translate(-15px,0)'
          },
          '50%':{
            transform: 'translate(15px,0)'
          },
          '100%':{
            transform: 'translate(0,0)'
          }
        },
        // nextJump:{},
      },
      animation:{
        textJump:'textJump 2s ease-in-out infinite'
        // animation: name duration timing-function delay iteration-count direction fill-mode;
      }
    },
  },
  plugins: [],
}

