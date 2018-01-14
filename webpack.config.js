const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const appDir = path.resolve(__dirname, 'assets')
const buildDir = path.resolve(__dirname, 'public', 'js')
const nextcssToCss = new ExtractTextPlugin({ filename: '../css/[name].css' })

const config = {
  entry: `${appDir}/app.jsx`,
  output: {
    path: buildDir,
    filename: '[name].js'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: appDir,
        loader: 'babel-loader'
      },
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
    nextcssToCss
  ]
}

module.exports = config
