const {fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        audiobook: '#ded3c5',
      },
      screens: {
        '3xl': '1800px',
      },
      borderWidth: {
        1: '2px',
      },
      spacing: {
        header: '4rem',
        submenu: '2.25rem',
        'header-submenu': '6.2rem',
      },
    },
    fontFamily: {
      sans: ['Peace2020', ...fontFamily.sans],
      'sans-alt': ['Peace', ...fontFamily.sans],
      serif: ['Times New Roman', ...fontFamily.serif],
    },
    fontSize: {
      16: ['16px', '24px'],
      18: ['18px', '28px'], 
      24: ['24px', '32px'],
      32: ['32px', '36px'],
      40: ['40px', '1'],
      56: ['56px', '1'],
      68: ['68px', '1'],
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
