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
  t.test('# githubActivity should be a function', function (st) {
    var rog3r = require('../lib/rog').default
    st.equal(typeof rog3r, 'object')
    st.equal(typeof rog3r.githubActivity, 'function')
    st.end()
  })
  t.test('# githubActivity should return an object', function (st) {
    var rog3r = require('../lib/rog').default
    rog3r.githubActivity()
    .then(function (activity) {
      st.equal(typeof activity, 'object')
      st.end()
    })
  })
  t.test('# githubActivity should return the same user activity', function (st) {
    var rog3r = require('../lib/rog').default
    var me = require('../src/me.json')
    rog3r.githubActivity()
    .then(function (activity) {
      st.equal(activity[0].actor.login, me.github)
      st.end()
    })
  })
  t.test('# githubActivity should return the same keys', function (st) {
    var rog3r = require('../lib/rog').default
    var keys = ['id', 'type', 'actor', 'repo', 'payload', 'public', 'created_at']
    rog3r.githubActivity()
    .then(function (activity) {
      activity.forEach(function (item) {
        for (var index in keys) {
          st.equal(item.hasOwnProperty(keys[index]), true)
        }
      })
      st.end()
    })
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
    .then(function (activity) {
      st.equal(typeof activity, 'string')
      st.end()
    })
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
      st.end()
    })
  })
})
