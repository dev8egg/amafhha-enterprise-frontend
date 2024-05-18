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

