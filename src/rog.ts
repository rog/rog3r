import 'fetch-everywhere'
import * as me from './me.json'

interface Person {
  github?: string
}

interface Response {
  json?: Function
}

export class CoolPerson {
  constructor (public info: Person) {
    this.info = info
  }

  async requestData (url: string): Promise<{}> {
    const request = {
      url: url,
      headers: {
        'User-Agent': 'rog3r'
      }
    }

    let response: Response = await fetch(request.url, request.headers)
    let data: Array<{}> = await response.json()

    return data
  }

  githubActivity (): Promise<{}> {
    const github: string = (this.info as Person).github
    return this.requestData(`https://api.github.com/users/${github}/events`)
  }
}

class Rog extends CoolPerson {
  constructor (public info: Person) {
    super(info)
  }
}

const rog3r = new Rog(me)

export default rog3r
