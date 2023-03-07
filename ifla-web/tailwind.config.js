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
      '2xl-md': '4rem',
      '2xl-sm': '3.5rem',
      '2xl-xs': '3rem',

      'xl-lg': '2.5rem',
      'xl-md': '2.4rem',
      'xl-sm': '2.3rem',
      'xl-xs': '2.2rem',

      'lg-lg': '2rem',
      'lg-md': '1.9rem',
      'lg-sm': '1.85rem',
      'lg-xs': '1.8rem',

      'base-lg': '1.5rem',
      'base-md': '1.45rem',
      'base-sm': '1.35rem',
      'base-xs': '1.25rem',

      'sm-lg': '1.125rem',
      'sm-md': '1.2rem',
      'sm-sm': '1.1rem',
      'sm-xs': '1rem',
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
