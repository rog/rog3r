var test = require('tape')
var tapSpec = require('tap-spec')
var CoolPerson = require('../lib/rog').CoolPerson

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout)

test('Testing CoolDude', function (t) {
  t.plan(2)

  t.test('# CoolDude should be an object', function (st) {
    var rog3r = new CoolPerson()
    st.equal(typeof rog3r, 'object')
    st.end()
  })

  t.test('# CoolDude should have props object with `me.json` props', function (st) {
    var rog3r = require('../lib/rog').default
    var me = require('../src/me.json')
    st.equal(typeof rog3r, 'object')
    st.equal(typeof rog3r.info, 'object')
    st.equal(typeof me, 'object')
    st.deepEqual(rog3r.info, me)
    st.end()
  })
})

test('Testing githubActivity', function (t) {
  t.plan(2)

  t.test('# githubActivity should be a function', function (st) {
    var rog3r = require('../lib/rog').default
    st.equal(typeof rog3r, 'object')
    st.equal(typeof rog3r.githubActivity, 'function')
    st.end()
  })
  t.test('# githubActivity should return an object', function (st) {
    var rog3r = require('../lib/rog').default
    rog3r.githubActivity()
    .then(function (val) {
      st.equal(typeof val, 'string')
      st.equal(typeof JSON.parse(val), 'object')
    })
    st.end()
  })
})

test('Testing twitterActivity', function (t) {
  t.plan(2)

  t.test('# twitterActivity should be a function', function (st) {
    var rog3r = require('../lib/rog').default
    st.equal(typeof rog3r, 'object')
    st.equal(typeof rog3r.twitterActivity, 'function')
    st.end()
  })
  t.test('# twitterActivity should return a string', function (st) {
    var rog3r = require('../lib/rog').default
    st.equal(typeof rog3r, 'object')
    st.equal(typeof rog3r.twitterActivity, 'function')
    rog3r.twitterActivity()
    .then(function (val) {
      st.equal(typeof val, 'string')
    })
    st.end()
  })
})

test('Testing requestData', function (t) {
  t.test('# requestData should throw a exception', function (st) {
    st.equal(typeof CoolPerson, 'function')
    st.equal(typeof CoolPerson.requestData, 'function')
    CoolPerson.requestData('lolno')
    .then()
    .catch(function (e) {
      st.equal(typeof e, 'object')
    })
    st.end()
  })
})
