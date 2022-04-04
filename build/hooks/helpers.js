"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectFonts = exports.detectFont = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** Test font availability. */
var detectFont = function detectFont(_ref) {
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

exports.detectFont = detectFont;

var detectFonts = function detectFonts(_ref2) {
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

exports.detectFonts = detectFonts;