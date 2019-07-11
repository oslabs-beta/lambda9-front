const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'build/[name].[contenthash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  }
};
