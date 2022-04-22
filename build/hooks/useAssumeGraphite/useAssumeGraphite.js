"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useAssumeGraphite;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** This detects for the the browser defined in "testClient", with results overridden when "alwaysUse" is true.
Graphite will not work in Firefox if gfx.font_rendering.graphite.enabled has been changed to false in about:config.
See additional info in End Note [1] of README.md. */
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