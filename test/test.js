var test = require('tape')
var tapSpec = require('tap-spec')

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout)

test('Testing CoolDude', function (t) {
  t.plan(2)

  t.test('CoolDude should be an object', function (t) {
    var rog3r = require('../lib/rog').default
    t.equal(typeof rog3r, 'object')
    t.end()
  })

  t.test('CoolDude should have props object with `me.json` props', function (t) {
    var rog3r = require('../lib/rog').default
    var me = require('../lib/me.json')
    t.equal(typeof rog3r, 'object')
    t.equal(typeof rog3r.info, 'object')
    t.equal(typeof me, 'object')
    t.deepEqual(rog3r.info, me)<
    t.end()
  })
})

test('Testing githubActivity', function (t) {
  t.plan(1)

  t.test('githubActivity should be a function', function (t) {
    var rog3r = require('../lib/rog').default
    t.equal(typeof rog3r, 'object')
    t.equal(typeof rog3r.githubActivity, 'function')
    t.end()
  })
})
