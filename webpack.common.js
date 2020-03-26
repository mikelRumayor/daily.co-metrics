const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        exclude: [path.resolve(__dirname, 'node_modules/')],
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ],
  },
  output: {
    chunkFilename: '[chunkhash].js',
    filename: '[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    sourceMapFilename: '../../sourcemap/[file].map',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          chunks: 'all',
          name: 'vendor',
          priority: -20,
          test: /node_modules/,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'daily.js',
      template: path.resolve(__dirname, 'index.html'),
    }),
  ],
};
