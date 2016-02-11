import fs from 'fs'

class CoolDude {
  constructor () {
    this.props = JSON.parse(fs.readFileSync(__dirname + '/me.json', 'utf8'))
  }

  info () {
    return this.props
  }

  twitter () {
    return 'twitter :D'
  }
}
const rog3r = new CoolDude()

export default rog3r.info()
export function twitter () {
  rog3r.twitter()
}
