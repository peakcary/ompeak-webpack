var webpack = require("webpack");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: "style!css"
    }]
  },
  plugins: [
    new webpack.BannerPlugin("This file is created by peak")
    // ,new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
   , new OpenBrowserPlugin({
      url: 'http://localhost:9090/'
    })
  ]
}
