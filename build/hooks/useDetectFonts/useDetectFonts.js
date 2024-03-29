"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useDetectFonts;
var _useDeepCompare = require("use-deep-compare");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _helpers = require("../helpers");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function useDetectFonts(_ref) {
  var fonts = _ref.fonts,
    baselineFont = _ref.baselineFont,
    testString = _ref.testString,
    showAll = _ref.showAll;
  /** Are fonts locally installed? */
  var detectedFonts = (0, _useDeepCompare.useDeepCompareMemo)(function () {
    return (0, _helpers.detectFonts)({
      fonts: fonts,
      testString: testString,
      baselineFont: baselineFont,
      showAll: showAll
    });
  }, [fonts, baselineFont, testString, showAll]);
  return detectedFonts;
}
;
useDetectFonts.propTypes = {
  /** Font object passed in */
  fonts: _propTypes["default"].shape({
    /** name of font to display */
    name: _propTypes["default"].string.isRequired
  }),
  /** String for use in font detection */
  testString: _propTypes["default"].string,
  /** Baseline font *(use a generic font family)* */
  baselineFont: _propTypes["default"].string
};
useDetectFonts.defaultProps = {
  testString: 'abcdefghijklmnopqrstuvwxyz0123456789',
  baselineFont: 'monospace'
};