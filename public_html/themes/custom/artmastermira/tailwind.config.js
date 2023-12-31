module.exports = {
  content: [
    "**/*.twig",
    "../../../themes/custom/artmastermira/src/js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        darkGray: '#111826',
        oldGold: '#F0C871',
        lotion: '#FEFDFA',
        grayBase: '#f3f4f6',
        lighterGray: '#555C66',
        borderGray: '#717377',
        lightWhite: '#FFFFFFB0',
        olive: '#888673',
        red: '#ff0500'
      },
      fontSize: {
        h1: ['2.5rem', '3rem'], // 40px font-size, 48px line-height
        h2: ['2rem', '2.5rem'], // 32px font-size, 40px line-height
        h3: ['1.75rem', '2.25rem'], // 28px font-size, 36px line-height
        h4: ['1.5rem', '2rem'], // 24px font-size, 32px line-height
        h5: ['1.25rem', '1.75rem'], // 20px font-size, 28px line-height
        h6: ['1rem', '1.5rem'] // 16px font-size, 24px line-height
      },
      boxShadow: {
        'popover': '-1px 7px 32px -11px rgba(0,0,0,0.56)'
      },
      backgroundImage: {
        'header-linear-gradient': 'linear-gradient(180deg, #000 0%, rgba(33, 26, 26, 0.77) 0%, rgba(70, 54, 54, 0.51) 67.75%, rgba(141, 110, 110, 0.00) 100%)',
        'contact-block-image': 'linear-gradient(248deg, rgba(41, 45, 51, 0.25) 0.32%, rgba(27, 25, 28, 0.23) 99.37%, rgba(217, 217, 217, 0.00) 100%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
