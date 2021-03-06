'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _GameInstance = require('./build/GameInstance.json');

var _GameInstance2 = _interopRequireDefault(_GameInstance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_GameInstance2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7a0JBRWdCLFVBQVVBLE9BQVYsRUFBbUI7QUFDakMsU0FBTyxJQUFJLGNBQUtDLEdBQUwsQ0FBU0MsUUFBYixDQUFzQkMsS0FBS0MsS0FBTCxDQUFXLHVCQUFhQyxTQUF4QixDQUF0QixFQUEwREwsT0FBMUQsQ0FBUDtBQUNELEMiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZWIzIGZyb20gJy4vd2ViMyc7XG5pbXBvcnQgR2FtZUluc3RhbmNlIGZyb20gJy4vYnVpbGQvR2FtZUluc3RhbmNlLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGFkZHJlc3MpIHtcbiAgcmV0dXJuIG5ldyB3ZWIzLmV0aC5Db250cmFjdChKU09OLnBhcnNlKEdhbWVJbnN0YW5jZS5pbnRlcmZhY2UpLCBhZGRyZXNzKTtcbn0pOyJdfQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7a0JBRWdCLFVBQVVBLE9BQVYsRUFBbUI7QUFDakMsU0FBTyxJQUFJLGNBQUtDLEdBQUwsQ0FBU0MsUUFBYixDQUFzQkMsS0FBS0MsS0FBTCxDQUFXLHVCQUFhQyxTQUF4QixDQUF0QixFQUEwREwsT0FBMUQsQ0FBUDtBQUNELEMiLCJmaWxlIjoidW5rbm93biJ9