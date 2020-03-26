const path = require('path');

const common = require('./webpack.common');

module.exports = {
  ...common,
  devServer: {
    compress: true,
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    overlay: true,
    port: 8080,
  },
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  plugins: [...common.plugins],
};
