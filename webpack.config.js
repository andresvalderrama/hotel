const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const buildDir = path.resolve(__dirname, 'public')
const appDir = path.resolve(__dirname, 'assets')

const config = {
  entry: `${appDir}/app.js`,
  output: {
    path: buildDir,
    filename: 'app.js'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            { loader: 'postcss-loader' }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css')
  ]
}

module.exports = config
