var path = require('path');

module.exports = {

  // define entry point
  entry: './index.js',
  // entry: './src/script-1.js',

  // define output point
  output: {
    // path: 'dist',
    path: path.resolve(__dirname, '../dist') + '/app',
    filename: 'bundle.js',
    publicPath: '/app/'
  },

  module: {
    loaders:[
      // {
      //   test: /\.js$/,
      //   exclude:/(node_modules)/,
      //   loader:'babel-loader',
      //   query:{
      //     presets: ['es2015']
      //   }
      // },
      {
        test:/\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
};
