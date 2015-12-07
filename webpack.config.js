var webpack = require('webpack');
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
      { test: /\.css$/, loader: "style!css" },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: "file-loader" }
    ]
  },

  plugins: [
    //   new webpack.optimize.CommonsChunkPlugin('public/shared.js'),
 ]
};
