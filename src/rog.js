import request from './utils/request'
const fs = require('fs')

class CoolDude {
  constructor () {
    const info = JSON.parse(fs.readFileSync(__dirname + '/me.json', 'utf8'))
    this.props = info
    this.props.info = () => { return info }
    this.props.getTweets = this.getTweets
    this.props.getName = this.getName
    this.props.githubActivity = this.githubActivity
    return this.props
  }

  getName () {
    const name = 'Rogelio'
    const lastName = 'Alberto'
    return `${name} ${lastName}`
  }

  getTweets () {
    return 'twitter'
  }

  githubActivity () {
    return request('https://api.github.com/users/rogr/events')
  }
}
const rog3r = new CoolDude()

export default rog3r
