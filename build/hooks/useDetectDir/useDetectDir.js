"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useDetectDir;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _dir = require("../helpers/dir");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Code originated from Christopher Klapp at https://github.com/unfoldingWord-box3/simple-text-editor-rcl/blob/9e34aa5618cf1b06409b2c169ba5bd86229e6d45/src/helpers/detectRTL.js

// eslint-disable-next-line no-unused-vars
var markdownScope = {
  // eslint-disable-next-line no-useless-escape
  regex: [/^#{1,}|((?<=.[\r?\n|\r])^)={1,}|^ *>{1,}( >)* #*=*(\d+\.)*|^ *\d+\.|^ *\+|(_|\*|~|\|)|[\[|!\[]|(\.*?\]\((.*?)\))/gm] // headings | alternate heading | block quotes and inside headings and inside ordered lists | ordered lists | unordered + lists | bold, italics, strike, horizontal rules, tables (and any other occurrence of _, *, ~, or | (not capturing - as it is in neutralScop) | link/image
};
var usfmScope = {
  regex: [/\\(id|c|v|ca|va|vp|\+fv|fr)( |\*)(\w+-?\w*)?(\.|,)?(\w*)?(-)?(\w*)?:?|\\(usfm|ide|sts).*|(\+ )?\\(?!(id|c|v|ca|va|vp|fr|usfm|ide|sts)( |\*))\w+\*?(-\w+\\?\*?)?|\|? ?x?-?[\w-]+=".*"/gm] // References and \id <code> | Full lines | Remaining markers | Attributes
};
var defaults = {
  text: '',
  ratioThreshold: 0.3,
  rtlScope: {
    regex: [/(?:[\u0590-\u085F\u0870-\u08FF\u1200-\u139F\u2D80-\u2DDF\uAB00-\uAB2F\uFB00-\uFDFF\uFE70-\uFEFE]|\uD800[\uDF00-\uDF2F\uDFA0-\uDFDF]|\uD801[\uDDC0-\uDDFF]|\uD802[\uDC00-\uDC5F\uDC80-\uDCAF\uDCE0-\uDD3F\uDE00-\uDE9F\uDF00-\uDFAF]|\uD803[\uDC00-\uDC4F\uDC80-\uDD8F\uDE80-\uDF6F]|[\uD80C-\uD810][\uDC00-\uDFFF]|\uD839[\uDFE0-\uDFFF]|\uD83A[\uDC00-\uDCDF\uDD00-\uDD5F])/gm]
  },
  neutralScope: {
    // eslint-disable-next-line no-misleading-character-class
    regex: [/\.|\x2D|\r?\n|\r|[\f \x2D\xA0\u1680\u180E\u2000-\u200A\u200F\u2028\u202F\u205F\u2060\u2420\u2422\u2423\u2800\u3000\u3164\uFEFF]/gm]
  },
  isMarkup: false,
  // default is false (for plain text)
  markupScope: usfmScope,
  verbose: false
};
function useDetectDir(_ref) {
  var _ref$text = _ref.text,
    text = _ref$text === void 0 ? defaults.text : _ref$text,
    _ref$ratioThreshold = _ref.ratioThreshold,
    ratioThreshold = _ref$ratioThreshold === void 0 ? defaults.ratioThreshold : _ref$ratioThreshold,
    _ref$rtlScope = _ref.rtlScope,
    rtlScope = _ref$rtlScope === void 0 ? defaults.rtlScope : _ref$rtlScope,
    _ref$neutralScope = _ref.neutralScope,
    neutralScope = _ref$neutralScope === void 0 ? defaults.neutralScope : _ref$neutralScope,
    _ref$isMarkup = _ref.isMarkup,
    isMarkup = _ref$isMarkup === void 0 ? defaults.isMarkup : _ref$isMarkup,
    _ref$markupScope = _ref.markupScope,
    markupScope = _ref$markupScope === void 0 ? defaults.markupScope : _ref$markupScope,
    _ref$verbose = _ref.verbose,
    verbose = _ref$verbose === void 0 ? defaults.verbose : _ref$verbose;
  var mostlyRtl = false;
  var rtlDirCheckRegex = rtlScope.regex[0];
  var neutralDirCheckRegex = neutralScope.regex[0];
  var markupCheckRegex = isMarkup ? markupScope.regex[0] : '//gm';
  if (text && text.length) {
    if (verbose) console.group('Character Counts as per RegEx:');
    if (verbose) console.log('%c total raw %c = ' + '%c ' + text.length + ' ', 'color: yellow; background-color: black; font-weight: bold;', '', 'color: yellow; background-color: black; font-weight: bold;');

    // length of string of neutral matches
    var neutralChars = (0, _dir.count)((0, _dir.matchesStr)(text, neutralDirCheckRegex));
    if (verbose) console.log('%c neutral %c = ' + '%c ' + neutralChars + ' ', 'color: yellow; background-color: black; font-weight: bold;', '', 'color: yellow; background-color: black; font-weight: bold;');

    // length of string of all Markup matches excluding neutral matches inside Markup matches and calculate overlap of RTL in Markup
    var markupCountObj = (0, _dir.adjMarkupCount)(text, markupCheckRegex, neutralDirCheckRegex, rtlDirCheckRegex, verbose, isMarkup);
    var markupLessNeut = markupCountObj.markupLessNeut;
    var rtlInMarkup = markupCountObj.rtlInMarkup;
    var neutInRtlInMarkup = markupCountObj.neutInRtlInMarkup; // should be 0

    // rtlScope in markupScope less any overlap in neutralScope
    var adjRtlInMarkup = rtlInMarkup - neutInRtlInMarkup;

    // length of all characters under text dir consideration
    var textChars = text.length - neutralChars - markupLessNeut || 1;
    if (verbose) console.log('%c adj total %c = ' + text.length + ' total raw - ' + neutralChars + ' neutral - ' + markupLessNeut + ' adj Markup = %c ' + textChars + ' ', 'color: yellow; background-color: black; font-weight: bold;', '', 'color: yellow; background-color: black; font-weight: bold;');

    // length of string of all RTL matches and overlap with neutral matches inside RTL matches (should be 0)
    var rtlCharsObj = (0, _dir.preAdjRtlCount)(text, rtlDirCheckRegex, neutralDirCheckRegex, verbose, isMarkup);
    var rtlChars = rtlCharsObj.rtlChars;
    var neutralInRtl = rtlCharsObj.neutralInRtl; // Should be 0

    var adjRTL = rtlChars - neutralInRtl - adjRtlInMarkup;
    if (verbose) console.log('%c adj RTL %c = ' + rtlChars + ' RTL - ' + neutralInRtl + ' neutral in RTL - ( ' + rtlInMarkup + ' RTL in markup - ' + neutInRtlInMarkup + ' neutral in RLT in markup ) = %c ' + adjRTL + ' ', 'color: yellow; background-color: black; font-weight: bold;', '', 'color: yellow; background-color: black; font-weight: bold;');

    // Percent of RTL Characters
    var rtlRatio = adjRTL / textChars;
    if (verbose) console.log('%c adj LTR %c = ' + textChars + ' adj total - ' + adjRTL + ' adj RTL = %c ' + (textChars - adjRTL) + ' ', 'color: yellow; background-color: black; font-weight: bold;', '', 'color: yellow; background-color: black; font-weight: bold;');
    if (verbose) console.log('%c calculated ratio of adj RTL : adj total %c = ' + adjRTL + ' adj RTL : ' + textChars + ' adj total = %c ' + rtlRatio + ' ', 'color: yellow; background-color: black; font-weight: bold;', '', 'color: yellow; background-color: black; font-weight: bold;');
    if (verbose) console.groupEnd();
    if (rtlRatio > ratioThreshold) {
      mostlyRtl = true;
    }
  }
  ;
  return mostlyRtl ? 'rtl' : 'ltr';
}
;
useDetectDir.propTypes = {
  /** text to examine */
  text: _propTypes["default"].string.isRequired,
  /** RTL : (LTR + RTL) */
  ratioThreshold: _propTypes["default"].number.isRequired,
  /** RegEx for RTL Character Scope */
  rtlScope: _propTypes["default"].shape({
    regex: _propTypes["default"].string
  }),
  /** RegEx for Neutral Character scope (neither RTL nor LTR) */
  neutral: _propTypes["default"].shape({
    regex: _propTypes["default"].string
  }),
  /** isMarkup? */
  isMarkup: _propTypes["default"].bool,
  /** RegEx for Markup scope */
  markupScope: _propTypes["default"].shape({
    regex: _propTypes["default"].string
  }),
  /** Show extra info in the js console? */
  verbose: _propTypes["default"].bool
};
useDetectDir.defaultProps = {
  ratioThreshold: 0.3,
  rtlScope: {
    regex: [/(?:[\u0590-\u085F\u0870-\u08FF\u1200-\u139F\u2D80-\u2DDF\uAB00-\uAB2F\uFB00-\uFDFF\uFE70-\uFEFE]|\uD800[\uDF00-\uDF2F\uDFA0-\uDFDF]|\uD801[\uDDC0-\uDDFF]|\uD802[\uDC00-\uDC5F\uDC80-\uDCAF\uDCE0-\uDD3F\uDE00-\uDE9F\uDF00-\uDFAF]|\uD803[\uDC00-\uDC4F\uDC80-\uDD8F\uDE80-\uDF6F]|[\uD80C-\uD810][\uDC00-\uDFFF]|\uD839[\uDFE0-\uDFFF]|\uD83A[\uDC00-\uDCDF\uDD00-\uDD5F])/gm]
  },
  neutralScope: {
    regex: [/\.|\x2D|\r?\n|\r|[\f \x2D\xA0\u1680\u180E\u2000-\u200A\u200F\u2028\u202F\u205F\u2060\u2420\u2422\u2423\u2800\u3000\u3164\uFEFF]/gm]
  },
  isMarkup: false,
  // false for plain text or to not apply markupScope
  markupScope: {
    regex: [/\\(id|c|v|ca|va|vp|\+fv|fr)( |\*)(\w+-?\w*)?(\.|,)?(\w*)?(-)?(\w*)?:?|\\(usfm|ide|sts).*|(\+ )?\\(?!(id|c|v|ca|va|vp|fr|usfm|ide|sts)( |\*))\w+\*?(-\w+\\?\*?)?|\|? ?x?-?[\w-]+=".*"/gm] // USFM: References and \id <code> | Full lines | Remaining markers | Attributes
  },
  verbose: false
};