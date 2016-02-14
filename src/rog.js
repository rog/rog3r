const fs = require('fs')

class CoolDude {
  constructor () {
    const info = JSON.parse(fs.readFileSync(__dirname + '/me.json', 'utf8'))
    this.props = {}
    this.props.info = () => { return info }
    this.props.getTweets = this.twitter
    this.props.getName = this.name
    return this.props
  }

  name () {
    const name = 'Rogelio'
    const lastName = 'Alberto'
    return `${name} ${lastName}`
  }

  twitter () {
    return 'twitter'
  }
}
const rog3r = new CoolDude()

export default rog3r
