'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoolPerson = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CoolPerson = exports.CoolPerson = function () {
  function CoolPerson(props) {
    (0, _classCallCheck3.default)(this, CoolPerson);

    this.props = {};
  }

  (0, _createClass3.default)(CoolPerson, [{
    key: 'githubActivity',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(url) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return CoolPerson.requestData('https://api.github.com/users/' + this.props.github + '/events');

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function githubActivity(_x) {
        return _ref.apply(this, arguments);
      }

      return githubActivity;
    }()
  }, {
    key: 'twitterActivity',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return 'twitter';

              case 2:
                return _context2.abrupt('return', _context2.sent);

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function twitterActivity() {
        return _ref2.apply(this, arguments);
      }

      return twitterActivity;
    }()
  }, {
    key: 'info',
    get: function get() {
      return this.props;
    }
  }], [{
    key: 'requestData',
    value: function requestData(url) {
      var options = {
        url: url,
        headers: {
          'User-Agent': 'rog3r'
        }
      };

      return new _promise2.default(function (resolve, reject) {
        (0, _request2.default)(options, function (err, res, body) {
          if (err) {
            reject(err);
            return;
          }
          resolve(JSON.parse(body));
        });
      });
    }
  }]);
  return CoolPerson;
}();

var Rog = function (_CoolPerson) {
  (0, _inherits3.default)(Rog, _CoolPerson);

  function Rog() {
    (0, _classCallCheck3.default)(this, Rog);

    var info = JSON.parse(_fs2.default.readFileSync(__dirname + '/me.json', 'utf8'));

    var _this = (0, _possibleConstructorReturn3.default)(this, (Rog.__proto__ || (0, _getPrototypeOf2.default)(Rog)).call(this));

    _this.props = info;
    return _this;
  }

  return Rog;
}(CoolPerson);

var rog3r = new Rog();
exports.default = rog3r;