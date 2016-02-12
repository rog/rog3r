const fs = require('fs')

class CoolDude {
  constructor () {
    this.props = JSON.parse(fs.readFileSync(__dirname + '/me.json', 'utf8'))
  }

  info () {
    return this.props
  }

  twitter () {
    return 'twitter'
  }
}
const rog3r = new CoolDude()

export function twitter () {
  console.log(rog3r.twitter())
}
export default rog3r
