"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useDetectRender;
var _useDeepCompare = require("use-deep-compare");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _render = require("../helpers/render");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function useDetectRender(_ref) {
  var fonts = _ref.fonts,
    fallbackFont = _ref.fallbackFont;
  /** Are fonts locally installed? */
  var detectedFontsRender = (0, _useDeepCompare.useDeepCompareMemo)(function () {
    return (0, _render.detectFontsRender)({
      fonts: fonts,
      fallbackFont: fallbackFont
    });
  }, [fonts, fallbackFont]);
  return detectedFontsRender;
}
;
useDetectRender.propTypes = {
  /** Font object passed in */
  fonts: _propTypes["default"].shape({
    /** name of font to display */
    name: _propTypes["default"].string.isRequired
  }),
  /** Fallback font *(use a generic font family)* */
  fallbackFont: _propTypes["default"].string
};
useDetectRender.defaultProps = {
  fallbackFont: 'monospace'
};