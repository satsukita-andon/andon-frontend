var _ = require('lodash');
var webpack = require('webpack');
var packagedef = require('./package.json');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './src/client.js',
    vendor: _.without(
      Object.keys(packagedef.dependencies),
      'express', 'serve-favicon', 'cookie-parser',
      'babel-preset-es2015', 'babel-preset-react', 'babel-preset-stage-0',
      'babel-register',
      'font-awesome', 'normalize.css'
    )
  },
  output: {
    path: __dirname + '/static',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
  ]
};
