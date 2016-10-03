const webpack = require('webpack')
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const path = require('path')
const env = require('yargs').argv.env

const libraryName = 'rog'
const plugins = [
  new webpack.ProvidePlugin({
    'Promise': 'exports-loader?global.Promise!es6-promise',
    'window.fetch': 'exports-loader?self.fetch!fetch-everywhere'
  })
]
let outputFile

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }))
  outputFile = libraryName + '.min.js'
} else {
  outputFile = libraryName + '.js'
}

const config = {
  entry: ['babel-polyfill', 'fetch-everywhere', path.resolve(__dirname, 'src/rog.js')],
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      }
    ]
  },
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: [
      '.js',
      '.jsx',
      '.react.js'
    ],
    mainFields: [
      'browser',
      'jsnext:main',
      'main'
    ]
  },
  plugins: plugins,
  externals: [{
    'fetch-everywhere': {
      root: 'fetch-everywhere',
      commonjs2: 'fetch-everywhere',
      commonjs: 'fetch-everywhere',
      amd: 'fetch-everywhere'
    }
  }]
}

module.exports = config
