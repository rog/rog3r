import json from 'rollup-plugin-json'
import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'
import filesize from 'rollup-plugin-filesize'
import { minify } from 'uglify-js'

const fsOptions = {
  format: {bits: true},
  render: (options, size) => {
    return `Library built [rog3r] - ${size}\n`
  }
}

export default {
  entry: 'src/rog.js',
  format: 'cjs',
  plugins: [ json(), buble(), uglify({}, minify), filesize(fsOptions) ],
  dest: 'lib/rog.js'
}
