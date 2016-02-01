var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['../backbone.marionette/src/backbone.marionette.js'],
  output: {
    path: '../backbone.marionette/lib/core/',
    filename: 'backbone.marionette.js'
  },
  externals: [
    {
      'backbone': true,
      'underscore': true,
      'backbone.radio': true,
      'backbone.babysitter': true
    }
  ],
  module : {
    loaders : [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.js?$/, 
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [ require.resolve('babel-preset-es2015') ]
        }
      }
    ]
  },
  resolveLoader: { root: path.join(__dirname, 'node_modules') },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
