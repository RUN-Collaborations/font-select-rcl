"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectFonts = exports.detectFont = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/** Test font availability. */
var detectFont = exports.detectFont = function detectFont(_ref) {
  var name = _ref.name,
    _ref$testString = _ref.testString,
    testString = _ref$testString === void 0 ? 'abcdefghijklmnopqrstuvwxyz0123456789' : _ref$testString,
    _ref$baselineFont = _ref.baselineFont,
    baselineFont = _ref$baselineFont === void 0 ? 'monospace' : _ref$baselineFont;
  /** Create an in-memory Canvas element. */
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  /** The text whose final pixel size will be measured */
  var text = testString;
  /** The baseline generic-family used must be available for the test to work. */
  context.font = "72px ".concat(baselineFont);
  /** Get the size of text with the baseline font. */
  var baselineSize = context.measureText(text).width;
  /** Specify the font to test */
  context.font = "72px '".concat(name, "', ").concat(baselineFont);
  /** Get the size of the text with the tested font. */
  var newSize = context.measureText(text).width;
  /** Remove the in-memory Canvas element. */
  canvas = null;
  /** If the size of the two text instances differs, then font exists. */
  return newSize !== baselineSize;
};
var detectFonts = exports.detectFonts = function detectFonts(_ref2) {
  var fonts = _ref2.fonts,
    baselineFont = _ref2.baselineFont,
    testString = _ref2.testString,
    _ref2$showAll = _ref2.showAll,
    showAll = _ref2$showAll === void 0 ? false : _ref2$showAll;
  var detectedFonts = [];
  detectedFonts = fonts.map(function (font) {
    return _objectSpread(_objectSpread({}, font), {}, {
      detected: detectFont(_objectSpread(_objectSpread({}, font), {}, {
        testString: testString,
        baselineFont: baselineFont
      }))
    });
  });
  if (!showAll) {
    detectedFonts = detectedFonts.filter(function (font) {
      return font.detected;
    });
  }
  ;
  return detectedFonts;
};