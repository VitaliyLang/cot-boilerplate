const withProgressBar = require('next-progressbar')
const webpack = require('webpack')

require('dotenv').config()
// const API_BASE_URL = 

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
      config.plugins.push(new webpack.DefinePlugin({
        'process.env.API_BASE_URL': JSON.stringify(process.env.DEV_API_BASE_URL)
      }))
    } else {
      config.plugins.push(new webpack.DefinePlugin({
        'process.env.API_BASE_URL': JSON.stringify(process.env.PROD_API_BASE_URL)
      }))
    }
    return config
  }
})
