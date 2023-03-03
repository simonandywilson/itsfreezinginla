const {fontFamily} = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: "#db4d68",
      },
    },
    fontFamily: {
      sans: ['Peace', ...fontFamily.sans],
      serif: ['Times New Roman', ...fontFamily.serif],
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('tailwindcss-image-rendering')()],
};
