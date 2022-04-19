"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ProvidedFontList;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useDetectFonts = _interopRequireDefault(require("../../hooks/useDetectFonts/useDetectFonts"));

var _fonts = _interopRequireDefault(require("../../fonts/fonts.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ProvidedFontList() {
  var detectedFontsToMap = (0, _useDetectFonts["default"])({
    fonts: _fonts["default"]
  });
  var detectedFonts = detectedFontsToMap.map(function (i, k) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: k
    }, i.name);
  });
  var noneDetectedMsg = 'none detected';
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, detectedFonts.length !== 0 ? detectedFonts : noneDetectedMsg);
}

;
ProvidedFontList.propTypes = {
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
ProvidedFontList.propDefaults = {
  testString: 'abcdefghijklmnopqrstuvwxyz0123456789',
  baselineFont: 'monospace'
};