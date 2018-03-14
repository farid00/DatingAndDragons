// webpack.config.js
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({base}) => {
  const isClient = base === 'client' ? true : false
  return {
    devtool: 'eval',
    target: isClient ? 'web' : 'node',
    entry: isClient
      ? './index.jsx'
      : './server.js',

    output: {
      path: __dirname + '/dist',
      filename: isClient ? 'bundle.js' : 'main.js',
      publicPath: '/dist/'
    },

    plugins: isClient 
    ? [
      new HtmlWebpackPlugin({
        template: 'views/index.html',
        filename: 'views/index.html',
        inject: 'body'
      }),
      ]

    : [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      ],

    module: {
      rules: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
        { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/}
      ]
    }
  }
};