module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#203b54',
        secondary: '#1e293b', 
        accent: '#cfaa45',
        textColor:'#777777'

      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      container: {
        center: true, 
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
          lg: '3rem',
        },
      },
    },
  },
  plugins: [],
};
