"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useGraphite;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** This detects for the the browser defined in "testClient", with results overridden when "alwaysUse" is true.
Graphite will not work in Firefox if gfx.font_rendering.graphite.enabled has been changed to false in about:config.
See additional info in End Note [1] of Readme.md. */
function useGraphite() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
}

;
useGraphite.propTypes = {
  /** name of browser to test */
  testClient: _propTypes["default"].string,

  /** skip environment test */
  alwaysUse: _propTypes["default"].bool
};
useGraphite.propDefaults = {
  testClient: 'firefox',
  alwaysUse: false
};