import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-js'

export default {
  entry: 'src/rog.js',
  format: 'cjs',
  plugins: [ json(), babel(), uglify({}, minify) ],
  dest: 'lib/rog.js'
}
