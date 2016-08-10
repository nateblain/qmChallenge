module.exports = {
  entry: [
    './public/index.js'
  ],
  output: {
    path: './public/bin',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
