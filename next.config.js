// next.config.js
const withProgressBar = require('next-progressbar')

module.exports = withProgressBar({
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: dev
        }
      })
    }
    return config
  }
})
