/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],theme: {
    extend: {
      // Custom styles
      scrollbar: {
        thumb: {
          backgroundColor: '#888',
          borderRadius: '10px',
        },
        thumbHover: {
          backgroundColor: '#555',
        },
      },
      colors: {
        // Define your custom colors here
        'header-color': '#6B7280',//'#90252C',
        'header-color-light': '#90252C',//'#F1DEDE', // lighter shade for header
        'sidebar-color': '#701820',//'#FAC9CA',//'#BBACC1'
        'sidebar-color-dark': '#90252C',//'#8D99AE', // darker shade for sidebar
        'text-header-color-light': '#90252C',//'#F1DEDE', // text color for light header
        'primary': '#90252C',
        'primary-dark': '#701820',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.custom-scrollbar::-webkit-scrollbar': {
          width: '8px',
        },
        '.custom-scrollbar::-webkit-scrollbar-track': {
          background: '#f1f1f1',
          borderRadius: '10px',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb': {
          background: '#888',
          borderRadius: '10px',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb:hover': {
          background: '#555',
        },
      });
    },
  ],
}

