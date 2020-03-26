const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        exclude: [path.resolve(__dirname, 'node_modules/')],
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ]
  },
  output: {
    
  },
  optimization: {
   
  },
  plugins: []
};
