import json from 'rollup-plugin-json'
import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-js'

export default {
  entry: 'src/rog.js',
  format: 'cjs',
  plugins: [ json(), buble(), uglify({}, minify) ],
  dest: 'lib/rog.js'
}
