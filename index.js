import fs from 'fs'

class CoolDude {
  constructor () {
  }

  info () {
    return JSON.parse(fs.readFileSync(__dirname + '/me.json', 'utf8'))
  }
}

const rog3r = new CoolDude()

console.log(rog3r.info())
