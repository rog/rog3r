# [rog3r](https://github.com/rogr/rog3r)

> API about a cool guy named [`Rogelio Alberto`](https://github.com/rogr).

[![NPM](https://nodei.co/npm/rog3r.png?downloads=true)](https://nodei.co/npm/rog3r/)


## Install
```
npm install rog3r
```

## Usage
```js
// ES6 modules
import rog3r from 'rog3r'

// For Common JS you need to import the `default` instance
const rog3r = require('rog3r').default
```

###### Get Contact info
Return the content from [`src/me.json`](src/me.json):
```js
console.log(rog3r.info)
/* Return:
{
  github: rogr,
  twitter: rog3r,
  ...
}
*/
```

###### Get Github activity
Get the github activity from the user specified on: `src/me.json`.
```js
rog3r.githubActivity()
  .then( activity => {
    console.log(activity)
  })
```

### Hey, I'm a cool person too!
You are right, you're a very cool person too, so you can import the `CoolPerson` Class and extend with your own data form `src/me.json` and now you can use the same methods.

```js
import CoolPerson from 'rog3r'

class You extends CoolPerson {
  constructor () {
    const info = JSON.parse(fs.readFileSync('yourData.json', 'utf8'))
    super()
    this.props = info
  }
}

const me = new CoolPerson()
me.info
me.githubActivity()
  .then( activity => {
    console.log(activity)
  })

// ...etc
```
---

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

![forthebadge](http://forthebadge.com/images/badges/as-seen-on-tv.svg)
![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)
[![rog3r](http://i.imgur.com/sbIc3yU.png)](https://github.com/rogr)
