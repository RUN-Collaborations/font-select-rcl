"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useAssumeGraphite;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function useAssumeGraphite(_ref) {
  var testClient = _ref.testClient,
      alwaysUse = _ref.alwaysUse;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  var browserTest = (0, _react.useMemo)(function () {
    return navigator.userAgent.toLowerCase().indexOf(testClient) > -1;
  }, []);
  var isGraphiteAssumed = alwaysUse || browserTest;
  return isGraphiteAssumed;
}

;
useAssumeGraphite.propTypes = {
  /** name of browser to test */
  testClient: _propTypes["default"].string,

  /** skip environment test */
  alwaysUse: _propTypes["default"].bool
};
useAssumeGraphite.propDefaults = {
  testClient: 'firefox',
  alwaysUse: false
};