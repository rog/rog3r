var test = require('tape')
var tapSpec = require('tap-spec')
var rog3r = require('../lib/rog')

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout)

test('Testing CoolDude', function (t) {
  t.plan(1)
  t.test('CoolDude should be an onject', function (t) {
    t.equal(typeof rog3r, 'object')
    t.end()
  })
})
