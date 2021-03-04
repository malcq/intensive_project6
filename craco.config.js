// craco.config.js
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, './src/components/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@routes': path.resolve(__dirname, './src/routes/'),
      '@styles': path.resolve(__dirname, './src/styles/'),
      '@mocks': path.resolve(__dirname, './src/mocks/'),
      '@store': path.resolve(__dirname, './src/store/'),
      '@utils': path.resolve(__dirname, './src/utils/'),
    },
  },
};