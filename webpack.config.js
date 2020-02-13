const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: './src/index.tsx',
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.resolve(__dirname, 'src/bin'),
    filename: '[name].bundle.js'
  },
  module: {
    rules : [
      {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
              {
                  loader: "ts-loader"
              }
          ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ]
  },
  // Plugins
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      filename: './index.html',
      title: 'Square It',
      hash: true
    }),
    new HtmlWebpackRootPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ],
  mode: 'development',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
};
