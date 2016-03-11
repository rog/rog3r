import request from 'request'
import fs from 'fs'

export class CoolPerson {
  constructor (props) {
    this.props = {}
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
        resolve(JSON.parse(body))
      })
    })
  }

  get info () {
    return this.props
  }

  async githubActivity (url) {
    return await CoolPerson.requestData(`https://api.github.com/users/${this.props.github}/events`)
  }

  async twitterActivity () {
    return await 'twitter'
  }

}

class Rog extends CoolPerson {
  constructor () {
    const info = JSON.parse(fs.readFileSync(`${__dirname}/me.json`, 'utf8'))
    super()
    this.props = info
  }
}

const rog3r = new Rog()
export default rog3r
