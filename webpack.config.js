const path = require('path')
const webpack = require('webpack')
const env = require('yargs').argv.env
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin

const libraryName = 'rog'
const plugins = [
  new webpack.ProvidePlugin({
    'Promise': 'exports-loader?global.Promise!es6-promise',
    'window.fetch': 'exports-loader?self.fetch!fetch-everywhere'
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      tslint: {
        emitErrors: true,
        failOnHint: true,
        typeCheck: true
      }
    }
  })
]
let outputFile

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }))
  outputFile = 'index.js'
} else {
  outputFile = libraryName + '.dev.js'
}

const config = {
  entry: ['fetch-everywhere', path.resolve(__dirname, 'src/rog.ts')],
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
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: 'tslint-loader',
        exclude: /(node_modules)/
      }, {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: [
      '.js',
      '.ts'
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
