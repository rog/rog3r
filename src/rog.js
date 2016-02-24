import request from 'request'
const fs = require('fs')

class CoolDude {
  constructor () {
    const info = JSON.parse(fs.readFileSync(`${__dirname}/me.json`, 'utf8'))
    this.props = info
    this.props.info = () => { return info }
    this.props.getTweets = this.getTweets
    this.props.getName = this.getName
    this.props.githubActivity = this.githubActivity
    this.props.reqGitActivity = this.reqGitActivity
    this.props.activity = null
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

  requestData (url) {
    const options = {
      url: url,
      headers: {
        'User-Agent': 'request'
      }
    }

    return new Promise((resolve, reject) => {
      request(options, (err, res, body) => {
        if (err) {
          reject(err)
          return
        }
        this.activity = body
        resolve(body)
      })
    })
  }

  async githubActivity () {
    return await this.requestData(`https://api.github.com/users/${this.github}/events`)
  }

}
const rog3r = new CoolDude()

console.log(rog3r.githubActivity())
export default rog3r
