'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const validate = require('webpack-validator')

module.exports = validate({
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
    // new HtmlWebpackPlugin({
      // template: 'index.html'
    // })
  ],
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'standard'
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    },
    {
      test: /\.css/,
      loaders: ["style-loader", "css-loader"]
    },
    {
      test: /\.(jpg|png)$/,
      loader: 'url?limit=25000',
      include: path.join(__dirname, 'src', 'images')
    }]
  }

})
