var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var OfflinePlugin = require('offline-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

const pkg = require('./package.json');

module.exports = {
  entry: {
    app: './src/index'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], { verbose: false }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new CopyWebpackPlugin([
      { from: 'src/images/', to: 'images/' },
      { from: 'manifest.json' }]),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['manifest'],
      minChunks: Infinity,
      filename: '[name].js'
    }),
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true,
    //   debug: false
    // }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    })
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': '"production"'
    // }),
    // new OfflinePlugin({
    //   excludes: ["images/*.png"],
    //   ServiceWorker: { events: true }
    // })
  ],
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: path.join(__dirname, 'src'),
      loader: 'standard'
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: path.join(__dirname, 'src'),
      loader: 'babel'
    },
    {
      test: /\.css/,
      loaders: ["style-loader", "css-loader"]
    },
    {
      test: /\.(jpg|png)$/,
      // loader: 'url?limit=25000',
      loader: 'file?name=[path][name].[ext]',
      include: path.join(__dirname, 'src', 'images')
    }]
  }
  // module: {
  //   loaders: [{
  //     test: /\.js$/,
  //     loaders: 'babel-loader',
  //     include: path.join(__dirname, 'src'),
  //   },
  //   {
  //     test: /\.css/,
  //     loaders: ["style-loader", "css-loader"]
  //   }]
  // }
};
