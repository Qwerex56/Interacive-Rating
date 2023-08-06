/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      smartphone: '375px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1440px'
    },
    colors: {
      dark: {
        blue: '#262E38',
      },
      medium: {
        gray: '#7C8798',
      },
      light: {
        gray: '#969FAD'
      },
      orange: '#FC7614',
      white: '#FFFFFF',
      black: '#131518'
    },
    fontFamily: {
      'overpass': ["'Overpass'", 'sans-serif'],
    },
  },
  plugins: [],
}

