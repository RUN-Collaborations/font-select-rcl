"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useDetectDir;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _dir = require("../helpers/dir");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
    regex: [/(?:[\u0590-\u085F\u1200-\u139F\u2D80-\u2DDF\uAB00-\uAB2F\uFB00-\uFDFF\uFE70-\uFEFC]|\uD800[\uDF00-\uDF2F\uDFA0-\uDFDF]|[\uD802\uD80D][\uDC00-\uDC5F\uDC80-\uDCAF\uDCE0-\uDD3F\uDE00-\uDE9F\uDF00-\uDFAF]|\uD803[\uDC00-\uDC4F\uDC80-\uDD3F\uDE80-\uDEBF\uDF00-\uDF6F]|\uD80C[\uDC00-\uDFFF]|\uD839[\uDFE0-\uDFFF]|\uD83A[\uDC00-\uDCDF\uDD00-\uDD5F])/gm]
  },
  neutralScope: {
    regex: [/\.|\x2D|\r?\n|\r|[\f \u1680\u2000-\u200A\u2028\u205F\u3000]/gm]
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
    if (verbose) console.log(text.length + ' total raw');

    // length of string of neutral matches
    var neutralChars = (0, _dir.count)((0, _dir.matchesStr)(text, neutralDirCheckRegex));
    if (verbose) console.log(neutralChars + ' total neutral');

    // length of string of all Markup matches excluding neutral matches inside Markup matches
    var markupCount = (0, _dir.adjcount)('markup', text, markupCheckRegex, neutralDirCheckRegex, verbose, isMarkup);

    // length of all characters under text dir consideration
    var textChars = text.length - neutralChars - markupCount || 1;
    if (verbose) console.log(text.length + ' - ' + neutralChars + ' - ' + markupCount + ' = ' + textChars + ' adj total (LTR & RTL combined, w/o neutral or markup)');

    // length of string of all RTL matches excluding neutral matches inside RTL matches
    var rtlChars = (0, _dir.adjcount)('RTL', text, rtlDirCheckRegex, neutralDirCheckRegex, verbose, isMarkup);

    // Percent of RTL Characters
    var rtlRatio = rtlChars / textChars;
    if (verbose) console.log(textChars + ' adj total - ' + rtlChars + ' RTL w/o neutral = ' + (textChars - rtlChars) + ' LTR w/o neutral');
    if (verbose) console.log(rtlChars + ' RTL w/o neutral : ' + textChars + ' adj total = ' + rtlRatio + ' calculated ratio of RTL : adj total');
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
    regex: [/(?:[\u0590-\u085F\u1200-\u139F\u2D80-\u2DDF\uAB00-\uAB2F\uFB00-\uFDFF\uFE70-\uFEFC]|\uD800[\uDF00-\uDF2F\uDFA0-\uDFDF]|[\uD802\uD80D][\uDC00-\uDC5F\uDC80-\uDCAF\uDCE0-\uDD3F\uDE00-\uDE9F\uDF00-\uDFAF]|\uD803[\uDC00-\uDC4F\uDC80-\uDD3F\uDE80-\uDEBF\uDF00-\uDF6F]|\uD80C[\uDC00-\uDFFF]|\uD839[\uDFE0-\uDFFF]|\uD83A[\uDC00-\uDCDF\uDD00-\uDD5F])/gm]
  },
  neutralScope: {
    regex: [/\.|\x2D|\r?\n|\r|[\f \u1680\u2000-\u200A\u2028\u205F\u3000]/gm]
  },
  isMarkup: false,
  // false for plain text or to not apply markupScope
  markupScope: {
    regex: [/\\(id|c|v|ca|va|vp|\+fv|fr)( |\*)(\w+-?\w*)?(\.|,)?(\w*)?(-)?(\w*)?:?|\\(usfm|ide|sts).*|(\+ )?\\(?!(id|c|v|ca|va|vp|fr|usfm|ide|sts)( |\*))\w+\*?(-\w+\\?\*?)?|\|? ?x?-?[\w-]+=".*"/gm] // USFM: References and \id <code> | Full lines | Remaining markers | Attributes
  },
  verbose: false
};