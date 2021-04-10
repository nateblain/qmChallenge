const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = (env) => {
  const outputPath = { path: path.resolve(__dirname, 'src/bin') };

  return {
    entry: {
      main: './src/index.tsx',
    },
    output: {
      ...outputPath,
      publicPath: '/',
      filename: '[name].bundle.js',
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          sourceMap: true,
        }),
      ],
    },
    devtool: env.production ? false : 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
            },
          ],
        },
        {
          test: /\.(s?)css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(svg|woff|woff2|ttf|png|eot)$/,
          use: ['file-loader'],
        },
      ],
    },
    // Plugins
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body',
        filename: './index.html',
        hash: true,
      }),
    ],
    mode: env.production ? 'production' : 'development',
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  };
};

module.exports = config;
