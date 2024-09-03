"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectFontsRender = exports.detectFontRender = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Some SIL fonts change text entered as "RenderingUnknown" (16 characters) and instead display:
 * - "RenderingGraphite" (17 characters) if Graphite is enabled and in use by the font (e.g., Awami Nastliq)
 * - "RenderingOpenType" (17 characters) if OpenType is in use by the font (e.g., Alkalami, Harmattan, Lateef, Ruwudu, Scheherazade New)
 * Otherwise "RenderingUnknown" will be displayed.
 * If Awami Nastiliq renders this as "RenderingUnknown" then Graphite is not enabled and in that case that particular font will not render properly.
 */
var detectFontRender = exports.detectFontRender = function detectFontRender(_ref) {
  var name = _ref.name,
    _ref$fallbackFont = _ref.fallbackFont,
    fallbackFont = _ref$fallbackFont === void 0 ? 'monospace' : _ref$fallbackFont;
  /** Create an in-memory Canvas element. */
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');

  /** The fallback generic-family for when the font is not available. */
  context.font = "72px '".concat(name, "', ").concat(fallbackFont);

  /** Get the size of text. */
  var baselineSize = context.measureText('RenderingUnknown').width;
  var graphiteSize = context.measureText('RenderingGraphite').width;
  var openTypeSize = context.measureText('RenderingOpenType').width;
  var renderedResult = '';

  /** Identify test results */
  if (baselineSize === graphiteSize) {
    renderedResult = 'RenderingGraphite';
  } else if (baselineSize === openTypeSize) {
    renderedResult = 'RenderingOpenType';
  } else {
    renderedResult = 'RenderingUnknown';
  }
  ;

  /** Remove the in-memory Canvas element. */
  canvas = null;

  // return the rendered result of 'RenderingUnknown'
  return renderedResult;
};
var detectFontsRender = exports.detectFontsRender = function detectFontsRender(_ref2) {
  var fonts = _ref2.fonts,
    fallbackFont = _ref2.fallbackFont;
  var detectedFontsRender = [];
  detectedFontsRender = fonts.map(function (font) {
    return _objectSpread(_objectSpread({}, font), {}, {
      detectedRender: detectFontRender(_objectSpread(_objectSpread({}, font), {}, {
        fallbackFont: fallbackFont
      }))
    });
  });
  return detectedFontsRender;
};