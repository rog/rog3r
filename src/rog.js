import request from 'request'
const fs = require('fs')

class CoolDude {
  constructor (props) {
    const info = JSON.parse(fs.readFileSync(`${__dirname}/me.json`, 'utf8'))
    this.props = info
  }

  static requestData (url) {
    const options = {
      url: url,
      headers: {
        'User-Agent': 'rog3r'
      }
    }

    return new Promise((resolve, reject) => {
      request(options, (err, res, body) => {
        if (err) {
          reject(err)
          return
        }
        resolve(body)
      })
    })
  }

  get info () {
    return this.props
  }

  async githubActivity (url) {
    return await CoolDude.requestData(`https://api.github.com/users/${this.props.github}/events`)
  }

  async twitterActivity () {
    return await 'twitter'
  }

}

export default CoolDude
