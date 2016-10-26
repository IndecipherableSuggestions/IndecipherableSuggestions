var path = require('path');
var webpack = require('webpack');
var test = require('./test.json');

module.exports = {
  cache: true,
  entry: test,
  output: { 
    path: path.join(__dirname, 'test/dist'),
    publicPath: '',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
