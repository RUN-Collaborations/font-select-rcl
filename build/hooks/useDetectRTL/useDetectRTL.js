"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useDetectRTL;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Code originated from Christopher Klapp at https://github.com/unfoldingWord-box3/simple-text-editor-rcl/blob/master/src/helpers/detectRTL.js
var rtlDirCheckRegex = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/gm;

function useDetectRTL(_ref) {
  var text = _ref.text,
      _ref$ratioThreshold = _ref.ratioThreshold,
      ratioThreshold = _ref$ratioThreshold === void 0 ? 0.3 : _ref$ratioThreshold;
  var mostlyRtl = false;

  if (text && text.length) {
    var rtlMatches = text.match(rtlDirCheckRegex);
    var rtlChars = rtlMatches === null || rtlMatches === void 0 ? void 0 : rtlMatches.length;
    var textChars = text.length;
    var rtlRatio = rtlChars / textChars;

    if (rtlRatio > ratioThreshold) {
      mostlyRtl = true;
    }
  }

  ;
  return mostlyRtl;
}

;
useDetectRTL.propTypes = {
  /** text to examine */
  text: _propTypes["default"].string.isRequired,

  /** RTL:LTR Ratio Threshold  */
  ratioThreshold: _propTypes["default"].number.isRequired
};
useDetectRTL.propDefaults = {
  ratioThreshold: 0.3
};