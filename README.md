# [rog3r](https://github.com/rog/rog3r)
> API about a cool guy named [`Rogelio Alberto`](https://github.com/rog).

[![Build Status](https://camo.githubusercontent.com/3658111a0f9e3c8ac936d83f9598c7a856ae9fd0/68747470733a2f2f7472617669732d63692e6f72672f536965647269782f706170657270726573732e7376673f6272616e63683d6d6173746572)](https://travis-ci.org/rog/rog3r/builds/128596017)
[![Coverage Status](https://coveralls.io/repos/github/rog/rog3r/badge.svg?branch=master)](https://coveralls.io/github/rogr/rog3r?branch=master)
[![Dependency Status](https://david-dm.org/rog/rog3r.svg)](https://david-dm.org/rog/rog3r)
[![NPM version](https://img.shields.io/npm/v/rog3r.svg)](https://www.npmjs.org/package/rog3r)

[![NPM](https://nodei.co/npm/rog3r.png?downloads=true)](https://nodei.co/npm/rog3r/)


## Install
```
npm install rog3r
```

## Usage
```js
// ES6 modules
import rog3r from 'rog3r'

// For CommonJS you need to require the `default` instance
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
You are right, you're a very cool person too, so you can import the `CoolPerson` Class and extend with your own data from `src/me.json` and now you can use the same methods with your own data and build the library.


#### Building
1. Clone the repo: `git clone https://github.com/rog/rog3r.git`
2. Install the dependencies: `cd rog3r && npm install`
3. Use `npm run build` to build the library on the `lib` directory.
  - Use `npm run dev` to auto build the library while developing.

- With `npm test` you can run the test.
- With `npm run report` you can see the code coverage.

---
#### [License](LICENSE)
Released under the [Beerware License](LICENSE).

![forthebadge](http://forthebadge.com/images/badges/as-seen-on-tv.svg)
![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)
[![rog3r](http://i.imgur.com/sbIc3yU.png)](https://github.com/rog)
