const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const SRC = path.resolve(__dirname, 'src');

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
    new webpack.EnvironmentPlugin({
      ...(process.env.NODE_ENV === undefined && {
        API_URI: 'http://localhost:3000/',
      }),
    }),
    new HtmlWebpackPlugin({
      title: 'daily.js',
      template: path.resolve(__dirname, 'index.html'),
    }),
  ],
  resolve: {
    alias: {
      '@styling': path.resolve(__dirname, 'lib', 'styling'),
      Components: path.resolve(SRC, 'components'),
      Hooks: path.resolve(SRC, 'hooks'),
      Services: path.resolve(SRC, 'services'),
      Providers: path.resolve(SRC, 'providers'),
      Theme: path.resolve(SRC, 'theme'),
      Views: path.resolve(SRC, 'views'),
    },
  },
};
