/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './ui/**/*.{ts,tsx}', './routes/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        home_radialed: 'radial-gradient(54.64% 54.64% at 50% 54.64%, rgba(13, 13, 13, 0) 0%, #0D0D0D 100%)'
      },
      colors: {
        lightBlue: 'rgba(21, 72, 148, 0.24)',
        lightGreen: 'rgba(9, 118, 4, 0.28)'
      }
    },

    fontFamily: {
      Syne: ['Syne', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif'],
      Inter: ['Inter', 'sans-serif'],
      Kinn: ['Kinn', 'sans-serif']
    }
  },

  plugins: [require('daisyui')]
};
