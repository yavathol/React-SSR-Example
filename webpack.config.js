var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

var clientConfig = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
    ]
  },
  resolve: {
    alias: {
        '@client': path.resolve(__dirname, './src/client'),
        '@common': path.resolve(__dirname, './src/common'),
        '@server': path.resolve(__dirname, './src/server'),
        '@constants': path.resolve(__dirname, './src/common/constants'),
        '@components': path.resolve(__dirname, './src/common/components'),
        '@lib': path.resolve(__dirname, './src/client/lib')
      }
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ]
}

var serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' }
    ]
  },
  resolve: {
    alias: {
        '@client': path.resolve(__dirname, './src/client'),
        '@common': path.resolve(__dirname, './src/common'),
        '@server': path.resolve(__dirname, './src/server'),
        '@constants': path.resolve(__dirname, './src/common/constants'),
        '@components': path.resolve(__dirname, './src/common/components'),
        '@lib': path.resolve(__dirname, './src/client/lib')
      }
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
}

module.exports = [clientConfig, serverConfig]