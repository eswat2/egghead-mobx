const path = require('path');
//
// NOTE:  use the older style for importing and exporting...
//        for whatever reason webpack-dev-server needs this format
//
// entry: './src/index',
// test: /\.js$/,
//
module.exports = {
  devtool: 'eval',
  entry: './app/App.jsx',
  devServer: {
    inline: true,
    historyApiFallback: true,
    contentBase: __dirname,
    port: 3333
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      include: __dirname,
      loader: 'babel'
    }],
  },
};
