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
    var options = {
      url: 'https://api.github.com/users/' + this.github + '/events',
      headers: {
        'User-Agent': 'request'
      }
    }

    return new Promise(function (resolve, reject) {
      try {
        return request(options, function (err, res, body) {
          if (!err && res.statusCode === 200) {
            resolve(JSON.parse(body))
          }
        })
      } catch (e) {
        reject(e)
        return
      }
    })
  }

}
const rog3r = new CoolDude()

export default rog3r
