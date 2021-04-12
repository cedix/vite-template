const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        floating: 'floating 1.5s linear infinite',
      },
      backgroundImage: (theme) => ({
        about: "url('assets/images/about.svg')",
      }),
      colors: {
        apple: colors.green,
      },
      keyframes: {
        floating: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
