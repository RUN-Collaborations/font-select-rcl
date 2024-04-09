import PropTypes from 'prop-types';
import { matchesStr, count, adjcount } from '../helpers/dir';

// Code originated from Christopher Klapp at https://github.com/unfoldingWord-box3/simple-text-editor-rcl/blob/9e34aa5618cf1b06409b2c169ba5bd86229e6d45/src/helpers/detectRTL.js

export default function useDetectDir({
  text,
  ratioThreshold=0.3,
  rtlScope={
    regex: [/[\u{0590}-\u{085F}\u{FB00}-\u{FDFF}\u{FE70}-\u{FEFC}\u{10D00}-\u{10D3F}\u{10E80}-\u{10EBF}\u{1E800}-\u{1E8DF}\u{1E900}-\u{1E95F}\u{1200}-\u{139F}\u{2D80}-\u{2DDF}\u{AB00}-\u{AB2F}\u{10300}-\u{1032F}\u{103A0}-\u{103DF}\u{10800}-\u{1085F}\u{10880}-\u{108AF}\u{108E0}-\u{1093F}\u{10A00}-\u{10A9F}\u{10B00}-\u{10BAF}\u{10C00}-\u{10C4F}\u{10C80}-\u{10CFF}\u{10F00}-\u{10F6F}\u{13000}-\u{1345F}\u{1E7E0}-\u{1E7FF}]/ugm],
  },
  neutralScope={
    regex: [/\.|-|\r?\n|\r|[\u{000C}\u{0020}\u{1680}\u{2000}-\u{200A}\u{2028}\u{205F}\u{3000}]/ugm],
  },
  isMarkup=false, // default is false (for plain text)
  markupScope={
    regex: [/\\(id|c|v|ca|va|vp|\+fv|fr)( |\*)(\w+-?\w*)?(\.|,)?(\w*)?(-)?(\w*)?:?|\\(usfm|ide|sts).*|(\+ )?\\(?!(id|c|v|ca|va|vp|fr|usfm|ide|sts)( |\*))\w+\*?(-\w+\\?\*?)?|\|? ?x?-?[\w-]+=".*"/gm], // References and \id <code> | Full lines | Remaining markers | Attributes
  }
}) {
  let mostlyRtl = false;

  const rtlDirCheckRegex  = (rtlScope.regex[0]);
  const neutralDirCheckRegex = (neutralScope.regex[0]);
  const markupCheckRegex = (isMarkup ? markupScope.regex[0] : '//gm');

  if (text && text.length) {

    // length of string of all matches (also equals the number of matches on default regex)
    const neutralChars = count (matchesStr (text, neutralDirCheckRegex));

    // length of string of all matches excluding neutral matches (equals the number of matches on default regex)
    const rtlChars = adjcount ( text, rtlDirCheckRegex, neutralDirCheckRegex);

    // length of string of all matches excluding neutral matches
    const markupCount = adjcount ( text, markupCheckRegex, neutralDirCheckRegex);
    
    // length of all characters under text dir consideration
    const textChars = text.length - neutralChars - markupCount || 1;

    // Percent of RTL Characters
    const rtlRatio = rtlChars / textChars;

    console.log('. . . . . . . . . . . .');
    console.log('Total raw chars: ' + text.length);
    console.log(' Less neutral chars: ' + neutralChars);
    console.log(' Less Markup chars (excl neutral): ' + markupCount);
    console.log(' = Adj Total (RTL + LTR): ' + textChars);
    console.log('   Less RTL chars (excl neutral): ' + rtlChars);
    console.log('   = LTR chars: ' + (textChars - rtlChars));
    console.log('Calculated RTL/Adj Total: ' + rtlRatio + ' ("ratioThreshold")')

    if (rtlRatio > ratioThreshold) { mostlyRtl = true; }
  };

  return (mostlyRtl ? 'rtl' : 'ltr');
};

useDetectDir.propTypes = {
  /** text to examine */
  text: PropTypes.string.isRequired,
  /** RTL:(LTR + RTL), as in RTL % */
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
};

useDetectDir.defaultProps = {
  ratioThreshold: 0.3,
  rtlScope: {
    regex: [/[\u{0590}-\u{085F}\u{FB00}-\u{FDFF}\u{FE70}-\u{FEFC}\u{10D00}-\u{10D3F}\u{10E80}-\u{10EBF}\u{1E800}-\u{1E8DF}\u{1E900}-\u{1E95F}\u{1200}-\u{139F}\u{2D80}-\u{2DDF}\u{AB00}-\u{AB2F}\u{10300}-\u{1032F}\u{103A0}-\u{103DF}\u{10800}-\u{1085F}\u{10880}-\u{108AF}\u{108E0}-\u{1093F}\u{10A00}-\u{10A9F}\u{10B00}-\u{10BAF}\u{10C00}-\u{10C4F}\u{10C80}-\u{10CFF}\u{10F00}-\u{10F6F}\u{13000}-\u{1345F}\u{1E7E0}-\u{1E7FF}]/ugm],
  },
  neutralScope: {
    regex: [/\.|-|\r?\n|\r|[\u{000C}\u{0020}\u{1680}\u{2000}-\u{200A}\u{2028}\u{205F}\u{3000}]/ugm],
  },
  isMarkup: false, // false for plain text or to not apply markupScope
  markupScope: {
    regex: [/\\(id|c|v|ca|va|vp|\+fv|fr)( |\*)(\w+-?\w*)?(\.|,)?(\w*)?(-)?(\w*)?:?|\\(usfm|ide|sts).*|(\+ )?\\(?!(id|c|v|ca|va|vp|fr|usfm|ide|sts)( |\*))\w+\*?(-\w+\\?\*?)?|\|? ?x?-?[\w-]+=".*"/gm], // USFM: References and \id <code> | Full lines | Remaining markers | Attributes
  },
};
