const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    autoprefixer,
    cssnano({
      preset: 'default',
      discardUnused: {
        fontFace: false,
      },
      safe: true
    }),
  ],
};
