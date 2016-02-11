var path = require('path')

module.exports = {
  entry: './src/rog.js',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'rog.js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'src'),
        loader: 'babel-loader'
      }
    ]
  }
}
