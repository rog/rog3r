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

##### Get Contact info
```js
console.log(rog3r.info)
```

##### Get Github activity
```js
rog3r.githubActivity()
  .then( activity => {
    console.log(activity)
  })
```

---
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/as-seen-on-tv.svg)](http://forthebadge.com)
[![rog3r](http://i.imgur.com/sbIc3yU.png)](https://github.com/rogr)
