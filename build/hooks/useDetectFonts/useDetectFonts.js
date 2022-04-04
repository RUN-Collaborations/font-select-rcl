"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useDetectFonts;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function useDetectFonts() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
}

;
useDetectFonts.propTypes = {
  /** Font object passed in */
  fonts: _propTypes["default"].shape({
    /** name of font to display */
    name: _propTypes["default"].string.isRequired
  }),

  /** String for use in font detection (default is 'abcdefghijklmnopqrstuvwxyz0123456789') */
  testString: _propTypes["default"].string,

  /** Baseline font (default is 'monospace') */
  baselineFont: _propTypes["default"].string
};
useDetectFonts.propDefaults = {
  testString: 'abcdefghijklmnopqrstuvwxyz0123456789',
  baselineFont: 'monospace'
};