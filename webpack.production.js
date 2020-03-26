const common = require('./webpack.common');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  ...common,
  devtool: isDev ? 'inline-source-map' : 'hidden-source-map',
  mode: 'production',
};
