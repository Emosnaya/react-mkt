/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-dark':'#00000050',
        'dull-white': '#FFFFFFB3',
        'white-light':'#FFFFFF30',
        'white-medium':'#FFFFFF40',
      }
    },
  },
  plugins: [
    function({addUtilities}){
    const newUtilities = {
      ".no-scrollbar::-webkit-scrollbar":{
        display: "none",
      },
      '.no-scrollbar': {
        '-ms-overflow-style': 'none',
        'scrollbar-width': "none"
      }
    };

    addUtilities(newUtilities);
  }],
}

