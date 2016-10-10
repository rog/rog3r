import 'fetch-everywhere'
import * as me from './me.json'

interface Person {
  github?: string
}

export class CoolPerson {
  constructor (public props: Person) {
    this.props = props
  }

  async requestData (url: string): Promise<{}> {
    const request = {
      url: url,
      headers: {
        'User-Agent': 'rog3r'
      }
    }

    let response = await fetch(request.url, request.headers)
    let data: Array<{}> = await response.json()

    return data
  }

  githubActivity (): Promise<{}> {
    const github: string = (this.props as Person).github
    return this.requestData(`https://api.github.com/users/${github}/events`)
  }
}

class Rog extends CoolPerson {
  constructor (public props: Person) {
    super(props)
  }
}

const rog3r = new Rog(me)

export default rog3r
