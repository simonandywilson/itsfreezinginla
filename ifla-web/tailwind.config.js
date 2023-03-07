const {fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#db4d68',
      },
    },
    fontFamily: {
      sans: ['Peace', ...fontFamily.sans],
      serif: ['Times New Roman', ...fontFamily.serif],
    },
    fontSize: {
      '2xl-lg': '4.25rem',
      '2xl-md': '4.25rem',
      '2xl-sm': '4.25rem',
      '2xl-xs': '4.25rem',

      'xl-lg': '2.5rem',
      'xl-md': '2.5rem',
      'xl-sm': '2.5rem',
      'xl-xs': '2.5rem',

      'lg-lg': '2rem',
      'lg-md': '2rem',
      'lg-sm': '2rem',
      'lg-xs': '2rem',

      'base-lg': '1.5rem',
      'base-md': '1.5rem',
      'base-sm': '1.5rem',
      'base-xs': '1.5rem',

      'sm-lg': '1.125rem',
      'sm-md': '1.125rem',
      'sm-sm': '1.125rem',
      'sm-xs': '1.125rem',
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require('tailwindcss-image-rendering')(),
    require('tailwindcss-multi-column')(),
  ],
};
