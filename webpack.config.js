var webpack = require('webpack');
var path = require('path');

var paths = {
  public: '/static/',
  dist: path.join(__dirname +  'dist'),
  contentBase: path.join(__dirname, '/static/'),
};

module.exports = {
  devServer: {
    contentBase: paths.contentBase,
    publicPath: paths.publicPath,
    hot: true,
    historyApiFallback: true
  },
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  output: {
    path: paths.dist,
    filename: 'bundle.js',
    publicPath: paths.publicPath,
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          plugins: ['react-hot-loader/babel'],
          presets: [
            'es2015',
            'react'
          ]
        }
      },
      {
        test: /\.css/,
        loaders: [
          'style?singleton',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        ],
        exclude: /(node_modules)/,
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
