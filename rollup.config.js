import chalk from 'chalk'
import { minify } from 'uglify-js'
import json from 'rollup-plugin-json'
import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'
import filesize from 'rollup-plugin-filesize'

const logger = (now) => {
  const logName = chalk.white.bgBlue.bold('[rog3r]')
  const logDate = chalk.cyan(` ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`)
  return `\r${logName}${logDate}`
}

const fsOptions = {
  format: {bits: true},
  render: (options, size) => {
    return `${logger(new Date())} -> Library build: ${chalk.green(size)} 👾`
  }
}

export default {
  entry: 'src/rog.js',
  format: 'cjs',
  plugins: [
    json(), buble(),
    // uglify({}, minify),
    filesize(fsOptions)
  ],
  dest: 'lib/rog.js'
}
