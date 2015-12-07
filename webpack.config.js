var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
  entry: path.resolve(__dirname, 'app/app.js'),
  
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'build.js'
  },

  module: {
    loaders: [
      {test: /\.js$/, exclude: [node_modules_dir], loader: "babel", query: {presets:['react', 'es2015']}},
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: "url-loader?limit=1024&name=fonts/[name].[ext]" }
    ]
  },

  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};
