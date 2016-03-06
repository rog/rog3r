var test = require('tape')
var tapSpec = require('tap-spec')

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout)

test('Testing CoolDude', function (t) {
  t.plan(2)

  t.test('# CoolDude should be an object', function (st) {
    var rog3r = require('../lib/rog').default
    st.equal(typeof rog3r, 'object')
    st.end()
  })

  t.test('# CoolDude should have props object with `me.json` props', function (st) {
    var rog3r = require('../lib/rog').default
    var me = require('../lib/me.json')
    st.equal(typeof rog3r, 'object')
    st.equal(typeof rog3r.info, 'object')
    st.equal(typeof me, 'object')
    st.deepEqual(rog3r.info, me)
    st.end()
  })
})

test('Testing githubActivity', function (t) {
  t.plan(1)

  t.test('# githubActivity should be a function', function (st) {
    var rog3r = require('../lib/rog').default
    st.equal(typeof rog3r, 'object')
    st.equal(typeof rog3r.githubActivity, 'function')
    rog3r.githubActivity()
    .then(function (val) {
      st.equal(typeof val, 'string')
      st.equal(typeof JSON.parse(val), 'object')
    })
    st.end()
  })
})
