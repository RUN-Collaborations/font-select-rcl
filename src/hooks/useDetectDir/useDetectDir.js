import PropTypes from 'prop-types';
import { matchesStr, count, adjMarkupCount, preAdjRtlCount } from '../helpers/dir';


// Code originated from Christopher Klapp at https://github.com/unfoldingWord-box3/simple-text-editor-rcl/blob/9e34aa5618cf1b06409b2c169ba5bd86229e6d45/src/helpers/detectRTL.js

// eslint-disable-next-line no-unused-vars
const markdownScope = {
  // eslint-disable-next-line no-useless-escape
  regex: [/^#{1,}|((?<=.[\r?\n|\r])^)={1,}|^ *>{1,}( >)* #*=*(\d+\.)*|^ *\d+\.|^ *\+|(_|\*|~|\|)|[\[|!\[]|(\.*?\]\((.*?)\))/gm], // headings | alternate heading | block quotes and inside headings and inside ordered lists | ordered lists | unordered + lists | bold, italics, strike, horizontal rules, tables (and any other occurrence of _, *, ~, or | (not capturing - as it is in neutralScop) | link/image
}
const usfmScope = {
  regex: [/\\(id|c|v|ca|va|vp|\+fv|fr)( |\*)(\w+-?\w*)?(\.|,)?(\w*)?(-)?(\w*)?:?|\\(usfm|ide|sts).*|(\+ )?\\(?!(id|c|v|ca|va|vp|fr|usfm|ide|sts)( |\*))\w+\*?(-\w+\\?\*?)?|\|? ?x?-?[\w-]+=".*"/gm], // References and \id <code> | Full lines | Remaining markers | Attributes
}

const defaults = {
  text: '',
  ratioThreshold: 0.3,
  rtlScope: {
    regex: [/[\u{0590}-\u{085F}\u{FB00}-\u{FDFF}\u{FE70}-\u{FEFC}\u{10D00}-\u{10D3F}\u{10E80}-\u{10EBF}\u{1E800}-\u{1E8DF}\u{1E900}-\u{1E95F}\u{1200}-\u{139F}\u{2D80}-\u{2DDF}\u{AB00}-\u{AB2F}\u{10300}-\u{1032F}\u{103A0}-\u{103DF}\u{10800}-\u{1085F}\u{10880}-\u{108AF}\u{108E0}-\u{1093F}\u{10A00}-\u{10A9F}\u{10B00}-\u{10BAF}\u{10C00}-\u{10C4F}\u{10C80}-\u{10CFF}\u{10F00}-\u{10F6F}\u{13000}-\u{1345F}\u{1E7E0}-\u{1E7FF}]/ugm],
  },
  neutralScope: {
    // eslint-disable-next-line no-misleading-character-class
    regex: [/\.|-|\r?\n|\r|[\u{000C}\u{0020}\u{00A0}\u{1680}\u{180E}\u{2000}-\u{200A}-\u{200F}\u{2028}\u{202F}\u{205F}\u{2060}\u{2420}\u{2422}\u{2423}\u{2800}\u{3000}\u{3164}\u{FEFF}]/ugm],
  },
  isMarkup: false, // default is false (for plain text)
  markupScope: usfmScope,
  verbose: false
}

export default function useDetectDir({
  text = defaults.text,
  ratioThreshold = defaults.ratioThreshold,
  rtlScope = defaults.rtlScope,
  neutralScope = defaults.neutralScope,
  isMarkup = defaults.isMarkup,
  markupScope = defaults.markupScope,
  verbose = defaults.verbose
}) {
  let mostlyRtl = false;

  const rtlDirCheckRegex  = (rtlScope.regex[0]);
  const neutralDirCheckRegex = (neutralScope.regex[0]);
  const markupCheckRegex = (isMarkup ? markupScope.regex[0] : '//gm');

  if (text && text.length) {

    if (verbose) console.group('Character Counts as per RegEx:');

    if (verbose) console.log('%c total raw %c = ' + '%c ' + text.length +' ', 'color: yellow; background-color: black; font-weight: bold;','','color: yellow; background-color: black; font-weight: bold;');

    // length of string of neutral matches
    const neutralChars = count (matchesStr (text, neutralDirCheckRegex));

    if (verbose) console.log('%c neutral %c = ' + '%c ' + neutralChars +' ', 'color: yellow; background-color: black; font-weight: bold;','','color: yellow; background-color: black; font-weight: bold;');

    // length of string of all Markup matches excluding neutral matches inside Markup matches and calculate overlap of RTL in Markup
    const markupCountObj = adjMarkupCount ( text, markupCheckRegex, neutralDirCheckRegex, rtlDirCheckRegex, verbose, isMarkup );
    const markupLessNeut = markupCountObj.markupLessNeut;
    const rtlInMarkup = markupCountObj.rtlInMarkup;
    const neutInRtlInMarkup = markupCountObj.neutInRtlInMarkup; // should be 0

    // rtlScope in markupScope less any overlap in neutralScope
    const adjRtlInMarkup = rtlInMarkup - neutInRtlInMarkup;

    // length of all characters under text dir consideration
    const textChars = text.length - neutralChars - markupLessNeut || 1;

    if (verbose) console.log('%c adj total %c = ' + text.length + ' total raw - ' + neutralChars + ' neutral - ' + markupLessNeut + ' adj Markup = %c ' + textChars +' ', 'color: yellow; background-color: black; font-weight: bold;','','color: yellow; background-color: black; font-weight: bold;');

    // length of string of all RTL matches and overlap with neutral matches inside RTL matches (should be 0)
    const rtlCharsObj = preAdjRtlCount ( text, rtlDirCheckRegex, neutralDirCheckRegex, verbose, isMarkup );
    const rtlChars = rtlCharsObj.rtlChars;
    const neutralInRtl = rtlCharsObj.neutralInRtl; // Should be 0

    const adjRTL = rtlChars - neutralInRtl - adjRtlInMarkup;

    if (verbose) console.log('%c adj RTL %c = ' + rtlChars + ' RTL - ' + neutralInRtl + ' neutral in RTL - ( ' + rtlInMarkup + ' RTL in markup - ' + neutInRtlInMarkup + ' neutral in RLT in markup ) = %c ' + adjRTL +' ', 'color: yellow; background-color: black; font-weight: bold;','','color: yellow; background-color: black; font-weight: bold;');


    // Percent of RTL Characters
    const rtlRatio = adjRTL / textChars;
    
    if (verbose) console.log('%c adj LTR %c = ' + textChars + ' adj total - ' + adjRTL + ' adj RTL = %c ' + (textChars - adjRTL) +' ', 'color: yellow; background-color: black; font-weight: bold;','','color: yellow; background-color: black; font-weight: bold;');

    if (verbose) console.log('%c calculated ratio of adj RTL : adj total %c = ' + adjRTL + ' adj RTL : ' + textChars + ' adj total = %c ' + rtlRatio +' ', 'color: yellow; background-color: black; font-weight: bold;','','color: yellow; background-color: black; font-weight: bold;');
    
    if (verbose) console.groupEnd();

    if (rtlRatio > ratioThreshold) { mostlyRtl = true; }
  };

  return (mostlyRtl ? 'rtl' : 'ltr');
};

useDetectDir.propTypes = {
  /** text to examine */
  text: PropTypes.string.isRequired,
  /** RTL : (LTR + RTL) */
  ratioThreshold: PropTypes.number.isRequired,
  /** RegEx for RTL Character Scope */
  rtlScope: PropTypes.shape({
    regex: PropTypes.string,
  }),
  /** RegEx for Neutral Character scope (neither RTL nor LTR) */
  neutral: PropTypes.shape({
    regex: PropTypes.string,
  }),
  /** isMarkup? */
  isMarkup: PropTypes.bool,
  /** RegEx for Markup scope */
  markupScope: PropTypes.shape({
    regex: PropTypes.string,
  }),
  /** Show extra info in the js console? */
  verbose: PropTypes.bool,
};

useDetectDir.defaultProps = {
  ratioThreshold: 0.3,
  rtlScope: {
    regex: [/[\u{0590}-\u{085F}\u{FB00}-\u{FDFF}\u{FE70}-\u{FEFC}\u{10D00}-\u{10D3F}\u{10E80}-\u{10EBF}\u{1E800}-\u{1E8DF}\u{1E900}-\u{1E95F}\u{1200}-\u{139F}\u{2D80}-\u{2DDF}\u{AB00}-\u{AB2F}\u{10300}-\u{1032F}\u{103A0}-\u{103DF}\u{10800}-\u{1085F}\u{10880}-\u{108AF}\u{108E0}-\u{1093F}\u{10A00}-\u{10A9F}\u{10B00}-\u{10BAF}\u{10C00}-\u{10C4F}\u{10C80}-\u{10CFF}\u{10F00}-\u{10F6F}\u{13000}-\u{1345F}\u{1E7E0}-\u{1E7FF}]/ugm],
  },
  neutralScope: {
    regex: [/\.|-|\r?\n|\r|[\u{000C}\u{0020}\u{00A0}\u{1680}\u{180E}\u{2000}-\u{200A}-\u{200F}\u{2028}\u{202F}\u{205F}\u{2060}\u{2420}\u{2422}\u{2423}\u{2800}\u{3000}\u{3164}\u{FEFF}]/ugm],
  },
  isMarkup: false, // false for plain text or to not apply markupScope
  markupScope: {
    regex: [/\\(id|c|v|ca|va|vp|\+fv|fr)( |\*)(\w+-?\w*)?(\.|,)?(\w*)?(-)?(\w*)?:?|\\(usfm|ide|sts).*|(\+ )?\\(?!(id|c|v|ca|va|vp|fr|usfm|ide|sts)( |\*))\w+\*?(-\w+\\?\*?)?|\|? ?x?-?[\w-]+=".*"/gm], // USFM: References and \id <code> | Full lines | Remaining markers | Attributes
  },
  verbose: false,
};
