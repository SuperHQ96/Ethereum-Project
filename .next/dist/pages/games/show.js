'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _gameInstance = require('../../ethereum/gameInstance');

var _gameInstance2 = _interopRequireDefault(_gameInstance);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\howar\\Desktop\\my-app\\pages\\games\\show.js?entry';


var GameShow = function (_Component) {
  (0, _inherits3.default)(GameShow, _Component);

  function GameShow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, GameShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GameShow.__proto__ || (0, _getPrototypeOf2.default)(GameShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      errorMessage: '',
      loading: false,
      penaltyPaid: false
    }, _this.joinGame = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var _this$props, isGameMaster, enoughPlayers, joinedGame, address, gameMaster, playersCount, pendingPlayersCount, gameStarted, imposedPenaltyValue, game, accounts;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this$props = _this.props, isGameMaster = _this$props.isGameMaster, enoughPlayers = _this$props.enoughPlayers, joinedGame = _this$props.joinedGame, address = _this$props.address, gameMaster = _this$props.gameMaster, playersCount = _this$props.playersCount, pendingPlayersCount = _this$props.pendingPlayersCount, gameStarted = _this$props.gameStarted, imposedPenaltyValue = _this$props.imposedPenaltyValue;

                _this.setState({ loading: true, errorMessage: '' });
                game = (0, _gameInstance2.default)(address);
                _context.prev = 4;
                _context.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context.sent;
                _context.next = 10;
                return game.methods.joinGame().send({
                  from: accounts[0]
                });

              case 10:
                _routes.Router.replaceRoute('/games/' + address);
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](4);

                _this.setState({ errorMessage: _context.t0.message });

              case 16:

                _this.setState({ loading: false });

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 13]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.startVote = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var _this$props2, isGameMaster, enoughPlayers, joinedGame, address, gameMaster, playersCount, pendingPlayersCount, gameStarted, imposedPenaltyValue, game, accounts;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();

                _this$props2 = _this.props, isGameMaster = _this$props2.isGameMaster, enoughPlayers = _this$props2.enoughPlayers, joinedGame = _this$props2.joinedGame, address = _this$props2.address, gameMaster = _this$props2.gameMaster, playersCount = _this$props2.playersCount, pendingPlayersCount = _this$props2.pendingPlayersCount, gameStarted = _this$props2.gameStarted, imposedPenaltyValue = _this$props2.imposedPenaltyValue;

                _this.setState({ loading: true, errorMessage: '' });
                game = (0, _gameInstance2.default)(address);
                _context2.prev = 4;
                _context2.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context2.sent;
                _context2.next = 10;
                return game.methods.initialiseStatus().send({
                  from: accounts[0]
                });

              case 10:
                _routes.Router.replaceRoute('/games/' + address);
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2['catch'](4);

                _this.setState({ errorMessage: _context2.t0.message });

              case 16:

                _this.setState({ loading: false });

              case 17:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[4, 13]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _this.payPenalty = function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
        var _this$props3, isGameMaster, enoughPlayers, joinedGame, address, gameMaster, playersCount, pendingPlayersCount, gameStarted, imposedPenaltyValue, game, accounts;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                event.preventDefault();

                _this$props3 = _this.props, isGameMaster = _this$props3.isGameMaster, enoughPlayers = _this$props3.enoughPlayers, joinedGame = _this$props3.joinedGame, address = _this$props3.address, gameMaster = _this$props3.gameMaster, playersCount = _this$props3.playersCount, pendingPlayersCount = _this$props3.pendingPlayersCount, gameStarted = _this$props3.gameStarted, imposedPenaltyValue = _this$props3.imposedPenaltyValue;

                _this.setState({ loading: true, errorMessage: '' });
                game = (0, _gameInstance2.default)(address);
                _context3.prev = 4;
                _context3.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context3.sent;
                _context3.next = 10;
                return game.methods.payPenalty().send({
                  from: accounts[0],
                  value: imposedPenaltyValue
                });

              case 10:
                _this.setState({ penaltyPaid: true });
                _routes.Router.replaceRoute('/games/' + address);
                _context3.next = 17;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3['catch'](4);

                _this.setState({ errorMessage: _context3.t0.message });

              case 17:

                _this.setState({ loading: false });

              case 18:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2, [[4, 14]]);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }(), _this.resetGame = function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(event) {
        var _this$props4, isGameMaster, enoughPlayers, joinedGame, address, gameMaster, playersCount, pendingPlayersCount, gameStarted, imposedPenaltyValue, game, accounts;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                event.preventDefault();

                _this$props4 = _this.props, isGameMaster = _this$props4.isGameMaster, enoughPlayers = _this$props4.enoughPlayers, joinedGame = _this$props4.joinedGame, address = _this$props4.address, gameMaster = _this$props4.gameMaster, playersCount = _this$props4.playersCount, pendingPlayersCount = _this$props4.pendingPlayersCount, gameStarted = _this$props4.gameStarted, imposedPenaltyValue = _this$props4.imposedPenaltyValue;

                _this.setState({ loading: true, errorMessage: '' });
                game = (0, _gameInstance2.default)(address);
                _context4.prev = 4;
                _context4.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context4.sent;
                _context4.next = 10;
                return game.methods.resetStatus().send({
                  from: accounts[0],
                  value: imposedPenaltyValue
                });

              case 10:
                _routes.Router.replaceRoute('/games/' + address);
                _context4.next = 16;
                break;

              case 13:
                _context4.prev = 13;
                _context4.t0 = _context4['catch'](4);

                _this.setState({ errorMessage: _context4.t0.message });

              case 16:

                _this.setState({ loading: false });

              case 17:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this2, [[4, 13]]);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(GameShow, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          isGameMaster = _props.isGameMaster,
          enoughPlayers = _props.enoughPlayers,
          joinedGame = _props.joinedGame,
          address = _props.address,
          gameMaster = _props.gameMaster,
          playersCount = _props.playersCount,
          pendingPlayersCount = _props.pendingPlayersCount,
          gameStarted = _props.gameStarted,
          imposedPenaltyValue = _props.imposedPenaltyValue;

      var gameStatus = gameStarted ? "Voting started" : "Voting not yet started";
      var items = [{
        header: gameMaster,
        meta: 'Address of Game Master',
        description: 'The Game Master started this game instance and manages the voting',
        style: { overflowWrap: 'break-word' }
      }, {
        header: pendingPlayersCount,
        meta: 'Number of pending players',
        description: 'Number of players who have joined the game but may or may not be part of the voting'
      }, {
        header: playersCount,
        meta: 'Number of players',
        description: 'Number of players part of the voting'
      }, {
        header: gameStatus,
        meta: 'Game Status',
        description: 'Once voting starts, players part of the voting will be fixed'
      }, {
        header: imposedPenaltyValue,
        meta: 'Amount of penalty',
        description: 'Amount is in wei'
      }];
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          isGameMaster = _props2.isGameMaster,
          enoughPlayers = _props2.enoughPlayers,
          joinedGame = _props2.joinedGame,
          address = _props2.address,
          gameMaster = _props2.gameMaster,
          playersCount = _props2.playersCount,
          pendingPlayersCount = _props2.pendingPlayersCount,
          gameStarted = _props2.gameStarted,
          imposedPenaltyValue = _props2.imposedPenaltyValue,
          hasPenalty = _props2.hasPenalty;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, 'Game @ address ', address), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, joinedGame || gameStarted || isGameMaster ? null : _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.joinGame, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, 'Join Game')), isGameMaster && !gameStarted && enoughPlayers ? _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.startVote, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }, 'Start Vote')) : null, isGameMaster ? _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.resetGame, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }, 'Reset Game')) : null, hasPenalty && !this.props.penaltyPaid && !this.state.penaltyPaid ? _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.payPenalty, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }, 'Pay Penalty (', imposedPenaltyValue, ' Wei)')) : null), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }, _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        }
      }, this.state.loading ? null : _react2.default.createElement(_routes.Link, { route: '/games/' + this.props.address + '/players', __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }, 'View Players'))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(props) {
        var game, summary, accounts, accountSummary;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                game = (0, _gameInstance2.default)(props.query.address);
                _context5.next = 3;
                return game.methods.getGameInstanceSummary().call();

              case 3:
                summary = _context5.sent;
                _context5.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context5.sent;

                console.log("Hi");
                _context5.next = 10;
                return game.methods.getCurrentAccountSummary(accounts[0]).call();

              case 10:
                accountSummary = _context5.sent;
                return _context5.abrupt('return', {
                  isGameMaster: summary[0] == accounts[0] ? true : false,
                  enoughPlayers: summary[2] >= 4,
                  joinedGame: accountSummary[0],
                  hasPenalty: accountSummary[1],
                  address: props.query.address,
                  gameMaster: summary[0],
                  playersCount: summary[1],
                  pendingPlayersCount: summary[2],
                  gameStarted: summary[3],
                  imposedPenaltyValue: summary[4],
                  penaltyPaid: accountSummary[3]
                });

              case 12:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getInitialProps(_x5) {
        return _ref6.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return GameShow;
}(_react.Component);

exports.default = GameShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiR2FtZVNob3ciLCJfQ29tcG9uZW50IiwiX3JlZiIsIl90aGlzMiIsIl90ZW1wIiwiX3RoaXMiLCJfcmV0IiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJfX3Byb3RvX18iLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJwZW5hbHR5UGFpZCIsImpvaW5HYW1lIiwiX3JlZjIiLCJtYXJrIiwiX2NhbGxlZSIsImV2ZW50IiwiX3RoaXMkcHJvcHMiLCJpc0dhbWVNYXN0ZXIiLCJlbm91Z2hQbGF5ZXJzIiwiam9pbmVkR2FtZSIsImFkZHJlc3MiLCJnYW1lTWFzdGVyIiwicGxheWVyc0NvdW50IiwicGVuZGluZ1BsYXllcnNDb3VudCIsImdhbWVTdGFydGVkIiwiaW1wb3NlZFBlbmFsdHlWYWx1ZSIsImdhbWUiLCJhY2NvdW50cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsInNlbnQiLCJtZXRob2RzIiwic2VuZCIsImZyb20iLCJyZXBsYWNlUm91dGUiLCJ0MCIsIm1lc3NhZ2UiLCJzdG9wIiwiX3giLCJzdGFydFZvdGUiLCJfcmVmMyIsIl9jYWxsZWUyIiwiX3RoaXMkcHJvcHMyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiaW5pdGlhbGlzZVN0YXR1cyIsIl94MiIsInBheVBlbmFsdHkiLCJfcmVmNCIsIl9jYWxsZWUzIiwiX3RoaXMkcHJvcHMzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwidmFsdWUiLCJfeDMiLCJyZXNldEdhbWUiLCJfcmVmNSIsIl9jYWxsZWU0IiwiX3RoaXMkcHJvcHM0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwicmVzZXRTdGF0dXMiLCJfeDQiLCJrZXkiLCJyZW5kZXJDYXJkcyIsIl9wcm9wcyIsImdhbWVTdGF0dXMiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwiY3JlYXRlRWxlbWVudCIsIkdyb3VwIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJyZW5kZXIiLCJfcHJvcHMyIiwiaGFzUGVuYWx0eSIsIlJvdyIsIm9uU3VibWl0IiwiZXJyb3IiLCJwcmltYXJ5IiwiY29udGVudCIsInJvdXRlIiwiX3JlZjYiLCJfY2FsbGVlNSIsInN1bW1hcnkiLCJhY2NvdW50U3VtbWFyeSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsInF1ZXJ5IiwiZ2V0R2FtZUluc3RhbmNlU3VtbWFyeSIsImNvbnNvbGUiLCJsb2ciLCJnZXRDdXJyZW50QWNjb3VudFN1bW1hcnkiLCJhYnJ1cHQiLCJnZXRJbml0aWFsUHJvcHMiLCJfeDUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQU5BLElBQUlBLGVBQWUsZ0VBQW5COzs7QUFRQSxJQUFJQyxXQUFXLFVBQVVDLFVBQVYsRUFBc0I7QUFDbkMsMEJBQVVELFFBQVYsRUFBb0JDLFVBQXBCOztBQUVBLFdBQVNELFFBQVQsR0FBb0I7QUFDbEIsUUFBSUUsSUFBSjtBQUFBLFFBQ0lDLFNBQVMsSUFEYjs7QUFHQSxRQUFJQyxLQUFKLEVBQVdDLEtBQVgsRUFBa0JDLElBQWxCOztBQUVBLGtDQUFnQixJQUFoQixFQUFzQk4sUUFBdEI7O0FBRUEsU0FBSyxJQUFJTyxPQUFPQyxVQUFVQyxNQUFyQixFQUE2QkMsT0FBT0MsTUFBTUosSUFBTixDQUFwQyxFQUFpREssT0FBTyxDQUE3RCxFQUFnRUEsT0FBT0wsSUFBdkUsRUFBNkVLLE1BQTdFLEVB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QUFSLEtBQWMsQ0FGRztBQUdoQzlFLDhCQUFZK0UsZUFBZSxDQUFmLENBSG9CO0FBSWhDViw4QkFBWVUsZUFBZSxDQUFmLENBSm9CO0FBS2hDOUUsMkJBQVNjLE1BQU1tRSxLQUFOLENBQVlqRixPQUxXO0FBTWhDQyw4QkFBWTRFLFFBQVEsQ0FBUixDQU5vQjtBQU9oQzNFLGdDQUFjMkUsUUFBUSxDQUFSLENBUGtCO0FBUWhDMUUsdUNBQXFCMEUsUUFBUSxDQUFSLENBUlc7QUFTaEN6RSwrQkFBYXlFLFFBQVEsQ0FBUixDQVRtQjtBQVVoQ3hFLHVDQUFxQndFLFFBQVEsQ0FBUixDQVZXO0FBV2hDdkYsK0JBQWF3RixlQUFlLENBQWY7QUFYbUIsaUJBQTNCLENBQVA7O0FBY0YsbUJBQUssRUFBTDtBQUNBLG1CQUFLLEtBQUw7QUFDRSx1QkFBT0UsVUFBVXZELElBQVYsRUFBUDtBQXBDSjtBQXNDRDtBQUNGLFNBekNNLEVBeUNKbUQsUUF6Q0ksRUF5Q00sSUF6Q04sQ0FBUDtBQTBDRCxPQTVDMkMsQ0FBaEMsQ0FBWjs7QUE4Q0EsZUFBU1csZUFBVCxDQUF5QkMsR0FBekIsRUFBOEI7QUFDNUIsZUFBT2IsTUFBTTFGLEtBQU4sQ0FBWSxJQUFaLEVBQWtCUCxTQUFsQixDQUFQO0FBQ0Q7O0FBRUQsYUFBTzZHLGVBQVA7QUFDRCxLQXBETTtBQUZKLEdBQUQsQ0E1T0o7O0FBcVNBLFNBQU9ySCxRQUFQO0FBQ0QsQ0EvZ0JjLGtCQUFmOztrQkFpaEJlQSxRIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX3JlZ2VuZXJhdG9yUnVudGltZSBmcm9tICdiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yJztcbmltcG9ydCBfYXN5bmNUb0dlbmVyYXRvciBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvcic7XG5pbXBvcnQgX09iamVjdCRnZXRQcm90b3R5cGVPZiBmcm9tICdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbnZhciBfanN4RmlsZU5hbWUgPSAnQzpcXFxcVXNlcnNcXFxcaG93YXJcXFxcRGVza3RvcFxcXFxteS1hcHBcXFxccGFnZXNcXFxcZ2FtZXNcXFxcc2hvdy5qcz9lbnRyeSc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FyZCwgR3JpZCwgQnV0dG9uLCBGb3JtLCBNZXNzYWdlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgR2FtZSBmcm9tICcuLi8uLi9ldGhlcmV1bS9nYW1lSW5zdGFuY2UnO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgeyBMaW5rLCBSb3V0ZXIgfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xuXG52YXIgR2FtZVNob3cgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoR2FtZVNob3csIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEdhbWVTaG93KCkge1xuICAgIHZhciBfcmVmLFxuICAgICAgICBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBHYW1lU2hvdyk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gR2FtZVNob3cuX19wcm90b19fIHx8IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YoR2FtZVNob3cpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVycm9yTWVzc2FnZTogJycsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIHBlbmFsdHlQYWlkOiBmYWxzZVxuICAgIH0sIF90aGlzLmpvaW5HYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9yZWYyID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMsIGlzR2FtZU1hc3RlciwgZW5vdWdoUGxheWVycywgam9pbmVkR2FtZSwgYWRkcmVzcywgZ2FtZU1hc3RlciwgcGxheWVyc0NvdW50LCBwZW5kaW5nUGxheWVyc0NvdW50LCBnYW1lU3RhcnRlZCwgaW1wb3NlZFBlbmFsdHlWYWx1ZSwgZ2FtZSwgYWNjb3VudHM7XG5cbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcywgaXNHYW1lTWFzdGVyID0gX3RoaXMkcHJvcHMuaXNHYW1lTWFzdGVyLCBlbm91Z2hQbGF5ZXJzID0gX3RoaXMkcHJvcHMuZW5vdWdoUGxheWVycywgam9pbmVkR2FtZSA9IF90aGlzJHByb3BzLmpvaW5lZEdhbWUsIGFkZHJlc3MgPSBfdGhpcyRwcm9wcy5hZGRyZXNzLCBnYW1lTWFzdGVyID0gX3RoaXMkcHJvcHMuZ2FtZU1hc3RlciwgcGxheWVyc0NvdW50ID0gX3RoaXMkcHJvcHMucGxheWVyc0NvdW50LCBwZW5kaW5nUGxheWVyc0NvdW50ID0gX3RoaXMkcHJvcHMucGVuZGluZ1BsYXllcnNDb3VudCwgZ2FtZVN0YXJ0ZWQgPSBfdGhpcyRwcm9wcy5nYW1lU3RhcnRlZCwgaW1wb3NlZFBlbmFsdHlWYWx1ZSA9IF90aGlzJHByb3BzLmltcG9zZWRQZW5hbHR5VmFsdWU7XG5cblxuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiAnJyB9KTtcbiAgICAgICAgICAgICAgICBnYW1lID0gR2FtZShhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gNDtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNztcbiAgICAgICAgICAgICAgICByZXR1cm4gd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblxuICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgYWNjb3VudHMgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2FtZS5tZXRob2RzLmpvaW5HYW1lKCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgUm91dGVyLnJlcGxhY2VSb3V0ZSgnL2dhbWVzLycgKyBhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTY7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMTM7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQudDAgPSBfY29udGV4dFsnY2F0Y2gnXSg0KTtcblxuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBfY29udGV4dC50MC5tZXNzYWdlIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTY6XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWUsIF90aGlzMiwgW1s0LCAxM11dKTtcbiAgICAgIH0pKTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChfeCkge1xuICAgICAgICByZXR1cm4gX3JlZjIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfSgpLCBfdGhpcy5zdGFydFZvdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZjMgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlMihldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMyLCBpc0dhbWVNYXN0ZXIsIGVub3VnaFBsYXllcnMsIGpvaW5lZEdhbWUsIGFkZHJlc3MsIGdhbWVNYXN0ZXIsIHBsYXllcnNDb3VudCwgcGVuZGluZ1BsYXllcnNDb3VudCwgZ2FtZVN0YXJ0ZWQsIGltcG9zZWRQZW5hbHR5VmFsdWUsIGdhbWUsIGFjY291bnRzO1xuXG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcywgaXNHYW1lTWFzdGVyID0gX3RoaXMkcHJvcHMyLmlzR2FtZU1hc3RlciwgZW5vdWdoUGxheWVycyA9IF90aGlzJHByb3BzMi5lbm91Z2hQbGF5ZXJzLCBqb2luZWRHYW1lID0gX3RoaXMkcHJvcHMyLmpvaW5lZEdhbWUsIGFkZHJlc3MgPSBfdGhpcyRwcm9wczIuYWRkcmVzcywgZ2FtZU1hc3RlciA9IF90aGlzJHByb3BzMi5nYW1lTWFzdGVyLCBwbGF5ZXJzQ291bnQgPSBfdGhpcyRwcm9wczIucGxheWVyc0NvdW50LCBwZW5kaW5nUGxheWVyc0NvdW50ID0gX3RoaXMkcHJvcHMyLnBlbmRpbmdQbGF5ZXJzQ291bnQsIGdhbWVTdGFydGVkID0gX3RoaXMkcHJvcHMyLmdhbWVTdGFydGVkLCBpbXBvc2VkUGVuYWx0eVZhbHVlID0gX3RoaXMkcHJvcHMyLmltcG9zZWRQZW5hbHR5VmFsdWU7XG5cblxuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiAnJyB9KTtcbiAgICAgICAgICAgICAgICBnYW1lID0gR2FtZShhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICBfY29udGV4dDIucHJldiA9IDQ7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA3O1xuICAgICAgICAgICAgICAgIHJldHVybiB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBhY2NvdW50cyA9IF9jb250ZXh0Mi5zZW50O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMTA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdhbWUubWV0aG9kcy5pbml0aWFsaXNlU3RhdHVzKCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgUm91dGVyLnJlcGxhY2VSb3V0ZSgnL2dhbWVzLycgKyBhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDE2O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQyLnByZXYgPSAxMztcbiAgICAgICAgICAgICAgICBfY29udGV4dDIudDAgPSBfY29udGV4dDJbJ2NhdGNoJ10oNCk7XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogX2NvbnRleHQyLnQwLm1lc3NhZ2UgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNjpcblxuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWUyLCBfdGhpczIsIFtbNCwgMTNdXSk7XG4gICAgICB9KSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoX3gyKSB7XG4gICAgICAgIHJldHVybiBfcmVmMy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9KCksIF90aGlzLnBheVBlbmFsdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZjQgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlMyhldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMzLCBpc0dhbWVNYXN0ZXIsIGVub3VnaFBsYXllcnMsIGpvaW5lZEdhbWUsIGFkZHJlc3MsIGdhbWVNYXN0ZXIsIHBsYXllcnNDb3VudCwgcGVuZGluZ1BsYXllcnNDb3VudCwgZ2FtZVN0YXJ0ZWQsIGltcG9zZWRQZW5hbHR5VmFsdWUsIGdhbWUsIGFjY291bnRzO1xuXG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTMkKF9jb250ZXh0Mykge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0My5wcmV2ID0gX2NvbnRleHQzLm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBfdGhpcyRwcm9wczMgPSBfdGhpcy5wcm9wcywgaXNHYW1lTWFzdGVyID0gX3RoaXMkcHJvcHMzLmlzR2FtZU1hc3RlciwgZW5vdWdoUGxheWVycyA9IF90aGlzJHByb3BzMy5lbm91Z2hQbGF5ZXJzLCBqb2luZWRHYW1lID0gX3RoaXMkcHJvcHMzLmpvaW5lZEdhbWUsIGFkZHJlc3MgPSBfdGhpcyRwcm9wczMuYWRkcmVzcywgZ2FtZU1hc3RlciA9IF90aGlzJHByb3BzMy5nYW1lTWFzdGVyLCBwbGF5ZXJzQ291bnQgPSBfdGhpcyRwcm9wczMucGxheWVyc0NvdW50LCBwZW5kaW5nUGxheWVyc0NvdW50ID0gX3RoaXMkcHJvcHMzLnBlbmRpbmdQbGF5ZXJzQ291bnQsIGdhbWVTdGFydGVkID0gX3RoaXMkcHJvcHMzLmdhbWVTdGFydGVkLCBpbXBvc2VkUGVuYWx0eVZhbHVlID0gX3RoaXMkcHJvcHMzLmltcG9zZWRQZW5hbHR5VmFsdWU7XG5cblxuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiAnJyB9KTtcbiAgICAgICAgICAgICAgICBnYW1lID0gR2FtZShhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICBfY29udGV4dDMucHJldiA9IDQ7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSA3O1xuICAgICAgICAgICAgICAgIHJldHVybiB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBhY2NvdW50cyA9IF9jb250ZXh0My5zZW50O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMTA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdhbWUubWV0aG9kcy5wYXlQZW5hbHR5KCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBpbXBvc2VkUGVuYWx0eVZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IHBlbmFsdHlQYWlkOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIFJvdXRlci5yZXBsYWNlUm91dGUoJy9nYW1lcy8nICsgYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAxNztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0My5wcmV2ID0gMTQ7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQzLnQwID0gX2NvbnRleHQzWydjYXRjaCddKDQpO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IF9jb250ZXh0My50MC5tZXNzYWdlIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTc6XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlMywgX3RoaXMyLCBbWzQsIDE0XV0pO1xuICAgICAgfSkpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKF94Mykge1xuICAgICAgICByZXR1cm4gX3JlZjQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfSgpLCBfdGhpcy5yZXNldEdhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZjUgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlNChldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHM0LCBpc0dhbWVNYXN0ZXIsIGVub3VnaFBsYXllcnMsIGpvaW5lZEdhbWUsIGFkZHJlc3MsIGdhbWVNYXN0ZXIsIHBsYXllcnNDb3VudCwgcGVuZGluZ1BsYXllcnNDb3VudCwgZ2FtZVN0YXJ0ZWQsIGltcG9zZWRQZW5hbHR5VmFsdWUsIGdhbWUsIGFjY291bnRzO1xuXG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTQkKF9jb250ZXh0NCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NC5wcmV2ID0gX2NvbnRleHQ0Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBfdGhpcyRwcm9wczQgPSBfdGhpcy5wcm9wcywgaXNHYW1lTWFzdGVyID0gX3RoaXMkcHJvcHM0LmlzR2FtZU1hc3RlciwgZW5vdWdoUGxheWVycyA9IF90aGlzJHByb3BzNC5lbm91Z2hQbGF5ZXJzLCBqb2luZWRHYW1lID0gX3RoaXMkcHJvcHM0LmpvaW5lZEdhbWUsIGFkZHJlc3MgPSBfdGhpcyRwcm9wczQuYWRkcmVzcywgZ2FtZU1hc3RlciA9IF90aGlzJHByb3BzNC5nYW1lTWFzdGVyLCBwbGF5ZXJzQ291bnQgPSBfdGhpcyRwcm9wczQucGxheWVyc0NvdW50LCBwZW5kaW5nUGxheWVyc0NvdW50ID0gX3RoaXMkcHJvcHM0LnBlbmRpbmdQbGF5ZXJzQ291bnQsIGdhbWVTdGFydGVkID0gX3RoaXMkcHJvcHM0LmdhbWVTdGFydGVkLCBpbXBvc2VkUGVuYWx0eVZhbHVlID0gX3RoaXMkcHJvcHM0LmltcG9zZWRQZW5hbHR5VmFsdWU7XG5cblxuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiAnJyB9KTtcbiAgICAgICAgICAgICAgICBnYW1lID0gR2FtZShhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICBfY29udGV4dDQucHJldiA9IDQ7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ0Lm5leHQgPSA3O1xuICAgICAgICAgICAgICAgIHJldHVybiB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBhY2NvdW50cyA9IF9jb250ZXh0NC5zZW50O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gMTA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdhbWUubWV0aG9kcy5yZXNldFN0YXR1cygpLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogaW1wb3NlZFBlbmFsdHlWYWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgUm91dGVyLnJlcGxhY2VSb3V0ZSgnL2dhbWVzLycgKyBhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICBfY29udGV4dDQubmV4dCA9IDE2O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ0LnByZXYgPSAxMztcbiAgICAgICAgICAgICAgICBfY29udGV4dDQudDAgPSBfY29udGV4dDRbJ2NhdGNoJ10oNCk7XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogX2NvbnRleHQ0LnQwLm1lc3NhZ2UgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNjpcblxuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWU0LCBfdGhpczIsIFtbNCwgMTNdXSk7XG4gICAgICB9KSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoX3g0KSB7XG4gICAgICAgIHJldHVybiBfcmVmNS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9KCksIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEdhbWVTaG93LCBbe1xuICAgIGtleTogJ3JlbmRlckNhcmRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ2FyZHMoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc0dhbWVNYXN0ZXIgPSBfcHJvcHMuaXNHYW1lTWFzdGVyLFxuICAgICAgICAgIGVub3VnaFBsYXllcnMgPSBfcHJvcHMuZW5vdWdoUGxheWVycyxcbiAgICAgICAgICBqb2luZWRHYW1lID0gX3Byb3BzLmpvaW5lZEdhbWUsXG4gICAgICAgICAgYWRkcmVzcyA9IF9wcm9wcy5hZGRyZXNzLFxuICAgICAgICAgIGdhbWVNYXN0ZXIgPSBfcHJvcHMuZ2FtZU1hc3RlcixcbiAgICAgICAgICBwbGF5ZXJzQ291bnQgPSBfcHJvcHMucGxheWVyc0NvdW50LFxuICAgICAgICAgIHBlbmRpbmdQbGF5ZXJzQ291bnQgPSBfcHJvcHMucGVuZGluZ1BsYXllcnNDb3VudCxcbiAgICAgICAgICBnYW1lU3RhcnRlZCA9IF9wcm9wcy5nYW1lU3RhcnRlZCxcbiAgICAgICAgICBpbXBvc2VkUGVuYWx0eVZhbHVlID0gX3Byb3BzLmltcG9zZWRQZW5hbHR5VmFsdWU7XG5cblxuICAgICAgdmFyIGdhbWVTdGF0dXMgPSBnYW1lU3RhcnRlZCA/IFwiVm90aW5nIHN0YXJ0ZWRcIiA6IFwiVm90aW5nIG5vdCB5ZXQgc3RhcnRlZFwiO1xuICAgICAgdmFyIGl0ZW1zID0gW3tcbiAgICAgICAgaGVhZGVyOiBnYW1lTWFzdGVyLFxuICAgICAgICBtZXRhOiAnQWRkcmVzcyBvZiBHYW1lIE1hc3RlcicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIEdhbWUgTWFzdGVyIHN0YXJ0ZWQgdGhpcyBnYW1lIGluc3RhbmNlIGFuZCBtYW5hZ2VzIHRoZSB2b3RpbmcnLFxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyB9XG4gICAgICB9LCB7XG4gICAgICAgIGhlYWRlcjogcGVuZGluZ1BsYXllcnNDb3VudCxcbiAgICAgICAgbWV0YTogJ051bWJlciBvZiBwZW5kaW5nIHBsYXllcnMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ051bWJlciBvZiBwbGF5ZXJzIHdobyBoYXZlIGpvaW5lZCB0aGUgZ2FtZSBidXQgbWF5IG9yIG1heSBub3QgYmUgcGFydCBvZiB0aGUgdm90aW5nJ1xuICAgICAgfSwge1xuICAgICAgICBoZWFkZXI6IHBsYXllcnNDb3VudCxcbiAgICAgICAgbWV0YTogJ051bWJlciBvZiBwbGF5ZXJzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdOdW1iZXIgb2YgcGxheWVycyBwYXJ0IG9mIHRoZSB2b3RpbmcnXG4gICAgICB9LCB7XG4gICAgICAgIGhlYWRlcjogZ2FtZVN0YXR1cyxcbiAgICAgICAgbWV0YTogJ0dhbWUgU3RhdHVzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdPbmNlIHZvdGluZyBzdGFydHMsIHBsYXllcnMgcGFydCBvZiB0aGUgdm90aW5nIHdpbGwgYmUgZml4ZWQnXG4gICAgICB9LCB7XG4gICAgICAgIGhlYWRlcjogaW1wb3NlZFBlbmFsdHlWYWx1ZSxcbiAgICAgICAgbWV0YTogJ0Ftb3VudCBvZiBwZW5hbHR5JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBbW91bnQgaXMgaW4gd2VpJ1xuICAgICAgfV07XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDYXJkLkdyb3VwLCB7IGl0ZW1zOiBpdGVtcywgX19zb3VyY2U6IHtcbiAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgIGxpbmVOdW1iZXI6IDc3XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc0dhbWVNYXN0ZXIgPSBfcHJvcHMyLmlzR2FtZU1hc3RlcixcbiAgICAgICAgICBlbm91Z2hQbGF5ZXJzID0gX3Byb3BzMi5lbm91Z2hQbGF5ZXJzLFxuICAgICAgICAgIGpvaW5lZEdhbWUgPSBfcHJvcHMyLmpvaW5lZEdhbWUsXG4gICAgICAgICAgYWRkcmVzcyA9IF9wcm9wczIuYWRkcmVzcyxcbiAgICAgICAgICBnYW1lTWFzdGVyID0gX3Byb3BzMi5nYW1lTWFzdGVyLFxuICAgICAgICAgIHBsYXllcnNDb3VudCA9IF9wcm9wczIucGxheWVyc0NvdW50LFxuICAgICAgICAgIHBlbmRpbmdQbGF5ZXJzQ291bnQgPSBfcHJvcHMyLnBlbmRpbmdQbGF5ZXJzQ291bnQsXG4gICAgICAgICAgZ2FtZVN0YXJ0ZWQgPSBfcHJvcHMyLmdhbWVTdGFydGVkLFxuICAgICAgICAgIGltcG9zZWRQZW5hbHR5VmFsdWUgPSBfcHJvcHMyLmltcG9zZWRQZW5hbHR5VmFsdWUsXG4gICAgICAgICAgaGFzUGVuYWx0eSA9IF9wcm9wczIuaGFzUGVuYWx0eTtcblxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgTGF5b3V0LFxuICAgICAgICB7XG4gICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiAyMjdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2gzJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyMjhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgICdHYW1lIEAgYWRkcmVzcyAnLFxuICAgICAgICAgIGFkZHJlc3NcbiAgICAgICAgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBHcmlkLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDIyOVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEdyaWQuUm93LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjMwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLnJlbmRlckNhcmRzKClcbiAgICAgICAgICApLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBHcmlkLlJvdyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDIzM1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgam9pbmVkR2FtZSB8fCBnYW1lU3RhcnRlZCB8fCBpc0dhbWVNYXN0ZXIgPyBudWxsIDogUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgRm9ybSxcbiAgICAgICAgICAgICAgeyBvblN1Ym1pdDogdGhpcy5qb2luR2FtZSwgZXJyb3I6ICEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjM0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIEJ1dHRvbixcbiAgICAgICAgICAgICAgICB7IGxvYWRpbmc6IHRoaXMuc3RhdGUubG9hZGluZywgcHJpbWFyeTogdHJ1ZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjM1XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnSm9pbiBHYW1lJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgaXNHYW1lTWFzdGVyICYmICFnYW1lU3RhcnRlZCAmJiBlbm91Z2hQbGF5ZXJzID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgRm9ybSxcbiAgICAgICAgICAgICAgeyBvblN1Ym1pdDogdGhpcy5zdGFydFZvdGUsIGVycm9yOiAhIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDIzOVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBCdXR0b24sXG4gICAgICAgICAgICAgICAgeyBsb2FkaW5nOiB0aGlzLnN0YXRlLmxvYWRpbmcsIHByaW1hcnk6IHRydWUsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDI0MFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ1N0YXJ0IFZvdGUnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkgOiBudWxsLFxuICAgICAgICAgICAgaXNHYW1lTWFzdGVyID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgRm9ybSxcbiAgICAgICAgICAgICAgeyBvblN1Ym1pdDogdGhpcy5yZXNldEdhbWUsIGVycm9yOiAhIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDI0NFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBCdXR0b24sXG4gICAgICAgICAgICAgICAgeyBsb2FkaW5nOiB0aGlzLnN0YXRlLmxvYWRpbmcsIHByaW1hcnk6IHRydWUsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDI0NVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ1Jlc2V0IEdhbWUnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkgOiBudWxsLFxuICAgICAgICAgICAgaGFzUGVuYWx0eSAmJiAhdGhpcy5wcm9wcy5wZW5hbHR5UGFpZCAmJiAhdGhpcy5zdGF0ZS5wZW5hbHR5UGFpZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIEZvcm0sXG4gICAgICAgICAgICAgIHsgb25TdWJtaXQ6IHRoaXMucGF5UGVuYWx0eSwgZXJyb3I6ICEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjQ5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIEJ1dHRvbixcbiAgICAgICAgICAgICAgICB7IGxvYWRpbmc6IHRoaXMuc3RhdGUubG9hZGluZywgcHJpbWFyeTogdHJ1ZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjUwXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnUGF5IFBlbmFsdHkgKCcsXG4gICAgICAgICAgICAgICAgaW1wb3NlZFBlbmFsdHlWYWx1ZSxcbiAgICAgICAgICAgICAgICAnIFdlaSknXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgR3JpZC5Sb3csXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyNTVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIEZvcm0sXG4gICAgICAgICAgICAgIHsgZXJyb3I6ICEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjU2XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1lc3NhZ2UsIHsgZXJyb3I6IHRydWUsIGhlYWRlcjogJ09vcHMhJywgY29udGVudDogdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjU3XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEdyaWQuUm93LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogMjYwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmxvYWRpbmcgPyBudWxsIDogUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgTGluayxcbiAgICAgICAgICAgICAgeyByb3V0ZTogJy9nYW1lcy8nICsgdGhpcy5wcm9wcy5hZGRyZXNzICsgJy9wbGF5ZXJzJywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyNjJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2EnLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDI2M1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgIEJ1dHRvbixcbiAgICAgICAgICAgICAgICAgIHsgcHJpbWFyeTogdHJ1ZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDI2NFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgJ1ZpZXcgUGxheWVycydcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6ICdnZXRJbml0aWFsUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZjYgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlNShwcm9wcykge1xuICAgICAgICB2YXIgZ2FtZSwgc3VtbWFyeSwgYWNjb3VudHMsIGFjY291bnRTdW1tYXJ5O1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWU1JChfY29udGV4dDUpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDUucHJldiA9IF9jb250ZXh0NS5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBnYW1lID0gR2FtZShwcm9wcy5xdWVyeS5hZGRyZXNzKTtcbiAgICAgICAgICAgICAgICBfY29udGV4dDUubmV4dCA9IDM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdhbWUubWV0aG9kcy5nZXRHYW1lSW5zdGFuY2VTdW1tYXJ5KCkuY2FsbCgpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBzdW1tYXJ5ID0gX2NvbnRleHQ1LnNlbnQ7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSA2O1xuICAgICAgICAgICAgICAgIHJldHVybiB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBhY2NvdW50cyA9IF9jb250ZXh0NS5zZW50O1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJIaVwiKTtcbiAgICAgICAgICAgICAgICBfY29udGV4dDUubmV4dCA9IDEwO1xuICAgICAgICAgICAgICAgIHJldHVybiBnYW1lLm1ldGhvZHMuZ2V0Q3VycmVudEFjY291bnRTdW1tYXJ5KGFjY291bnRzWzBdKS5jYWxsKCk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICBhY2NvdW50U3VtbWFyeSA9IF9jb250ZXh0NS5zZW50O1xuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUuYWJydXB0KCdyZXR1cm4nLCB7XG4gICAgICAgICAgICAgICAgICBpc0dhbWVNYXN0ZXI6IHN1bW1hcnlbMF0gPT0gYWNjb3VudHNbMF0gPyB0cnVlIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBlbm91Z2hQbGF5ZXJzOiBzdW1tYXJ5WzJdID49IDQsXG4gICAgICAgICAgICAgICAgICBqb2luZWRHYW1lOiBhY2NvdW50U3VtbWFyeVswXSxcbiAgICAgICAgICAgICAgICAgIGhhc1BlbmFsdHk6IGFjY291bnRTdW1tYXJ5WzFdLFxuICAgICAgICAgICAgICAgICAgYWRkcmVzczogcHJvcHMucXVlcnkuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgIGdhbWVNYXN0ZXI6IHN1bW1hcnlbMF0sXG4gICAgICAgICAgICAgICAgICBwbGF5ZXJzQ291bnQ6IHN1bW1hcnlbMV0sXG4gICAgICAgICAgICAgICAgICBwZW5kaW5nUGxheWVyc0NvdW50OiBzdW1tYXJ5WzJdLFxuICAgICAgICAgICAgICAgICAgZ2FtZVN0YXJ0ZWQ6IHN1bW1hcnlbM10sXG4gICAgICAgICAgICAgICAgICBpbXBvc2VkUGVuYWx0eVZhbHVlOiBzdW1tYXJ5WzRdLFxuICAgICAgICAgICAgICAgICAgcGVuYWx0eVBhaWQ6IGFjY291bnRTdW1tYXJ5WzNdXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWU1LCB0aGlzKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gZ2V0SW5pdGlhbFByb3BzKF94NSkge1xuICAgICAgICByZXR1cm4gX3JlZjYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldEluaXRpYWxQcm9wcztcbiAgICB9KClcbiAgfV0pO1xuXG4gIHJldHVybiBHYW1lU2hvdztcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZVNob3c7Il19
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiR2FtZVNob3ciLCJfQ29tcG9uZW50IiwiX3JlZiIsIl90aGlzMiIsIl90ZW1wIiwiX3RoaXMiLCJfcmV0IiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJfX3Byb3RvX18iLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJwZW5hbHR5UGFpZCIsImpvaW5HYW1lIiwiX3JlZjIiLCJtYXJrIiwiX2NhbGxlZSIsImV2ZW50IiwiX3RoaXMkcHJvcHMiLCJpc0dhbWVNYXN0ZXIiLCJlbm91Z2hQbGF5ZXJzIiwiam9pbmVkR2FtZSIsImFkZHJlc3MiLCJnYW1lTWFzdGVyIiwicGxheWVyc0NvdW50IiwicGVuZGluZ1BsYXllcnNDb3VudCIsImdhbWVTdGFydGVkIiwiaW1wb3NlZFBlbmFsdHlWYWx1ZSIsImdhbWUiLCJhY2NvdW50cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsInNlbnQiLCJtZXRob2RzIiwic2VuZCIsImZyb20iLCJyZXBsYWNlUm91dGUiLCJ0MCIsIm1lc3NhZ2UiLCJzdG9wIiwiX3giLCJzdGFydFZvdGUiLCJfcmVmMyIsIl9jYWxsZWUyIiwiX3RoaXMkcHJvcHMyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiaW5pdGlhbGlzZVN0YXR1cyIsIl94MiIsInBheVBlbmFsdHkiLCJfcmVmNCIsIl9jYWxsZWUzIiwiX3RoaXMkcHJvcHMzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwidmFsdWUiLCJfeDMiLCJyZXNldEdhbWUiLCJfcmVmNSIsIl9jYWxsZWU0IiwiX3RoaXMkcHJvcHM0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwicmVzZXRTdGF0dXMiLCJfeDQiLCJrZXkiLCJyZW5kZXJDYXJkcyIsIl9wcm9wcyIsImdhbWVTdGF0dXMiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwiY3JlYXRlRWxlbWVudCIsIkdyb3VwIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJyZW5kZXIiLCJfcHJvcHMyIiwiaGFzUGVuYWx0eSIsIlJvdyIsIm9uU3VibWl0IiwiZXJyb3IiLCJwcmltYXJ5IiwiY29udGVudCIsInJvdXRlIiwiX3JlZjYiLCJfY2FsbGVlNSIsInN1bW1hcnkiLCJhY2NvdW50U3VtbWFyeSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsInF1ZXJ5IiwiZ2V0R2FtZUluc3RhbmNlU3VtbWFyeSIsImNvbnNvbGUiLCJsb2ciLCJnZXRDdXJyZW50QWNjb3VudFN1bW1hcnkiLCJhYnJ1cHQiLCJnZXRJbml0aWFsUHJvcHMiLCJfeDUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQU5BLElBQUlBLGVBQWUsZ0VBQW5COzs7QUFRQSxJQUFJQyxXQUFXLFVBQVVDLFVBQVYsRUFBc0I7QUFDbkMsMEJBQVVELFFBQVYsRUFBb0JDLFVBQXBCOztBQUVBLFdBQVNELFFBQVQsR0FBb0I7QUFDbEIsUUFBSUUsSUFBSjtBQUFBLFFBQ0lDLFNBQVMsSUFEYjs7QUFHQSxRQUFJQyxLQUFKLEVBQVdDLEtBQVgsRUFBa0JDLElBQWxCOztBQUVBLGtDQUFnQixJQUFoQixFQUFzQk4sUUFBdEI7O0FBRUEsU0FBSyxJQUFJTyxPQUFPQyxVQUFVQyxNQUFyQixFQUE2QkMsT0FBT0MsTUFBTUosSUFBTixDQUFwQyxFQUFpREssT0FBTyxDQUE3RCxFQUFnRUEsT0FBT0wsSUFBdkUsRUFBNkVLLE1BQTdFLEVB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