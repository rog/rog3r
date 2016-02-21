import request from 'request'
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
    request({
      url: 'https://api.github.com/users/rogr/events',
      headers: {
        'User-Agent': 'request'
      }
    }, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        var info = JSON.parse(body)
        console.log(info)
      }
    })
  }
}
const rog3r = new CoolDude()

export default rog3r
