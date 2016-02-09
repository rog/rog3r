var fs = require('fs')
// var CoolDude = function (options) {
//   return {
//     github: function () {
//       console.log('Github')
//     },
//     info: function () {
//       return JSON.parse(fs.readFileSync(__dirname + '/me.json', 'utf8'))
//     }
//   }
// }
//
// var rog3r = new CoolDude()
// module.exports = rog3r
var CoolDude = function (opt) {
  return {
    auth: function (opt) {
      console.log('auth', opt)
    },

    pickle: function (cucumber, herbs, vinegar) {
      console.log('pickle')
    },

    get: function () {
      return JSON.parse(fs.readFileSync(__dirname + '/me.json', 'utf8'))
    }
  }
}
module.exports = function (method) {
  (function () {
    var r = new CoolDude()
    return (method === undefined) ? r.get() : r.auth()
  }(method))
}
/*

var handler = {
  get: function (target, name) {
    return target.hasOwnProperty(name) ? target[name] : 42
  }
}

module.exports = function () {
  var r = new CoolDude(r, handler)
  return r
  // return (method === undefined) ? r.rog() : r.auth()
} */
