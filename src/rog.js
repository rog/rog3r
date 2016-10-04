import 'fetch-everywhere'
import me from './me.json'

export class CoolPerson {
  constructor (props) {
    this.props = {}
  }

  async * requestData (url) {
    const request = {
      url: url,
      headers: {
        'User-Agent': 'rog3r'
      }
    }

    let response = await fetch(request.url, request.headers)
    let data = await response.json()
    yield data
  }

  githubActivity () {
    const data = this.requestData(`https://api.github.com/users/${this.props.github}/events`).next()
    return data
  }
}

class Rog extends CoolPerson {
  constructor () {
    super()
    this.props = me
  }
}

const rog3r = new Rog()
export default rog3r
