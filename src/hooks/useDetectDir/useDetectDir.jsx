import React from 'react';
import PropTypes from 'prop-types';

export default function useDetectDir(){
  return (<React.Fragment></React.Fragment>);
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
  neutralScope: PropTypes.shape({
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
    regex: [/[\u{0590}-\u{085F}\u{0870}-\u{08FF}\u{FB00}-\u{FDFF}\u{FE70}-\u{FEFE}\u{10D00}-\u{10D8F}\u{10E80}-\u{10EBF}\u{1E800}-\u{1E8DF}\u{1E900}-\u{1E95F}\u{1200}-\u{139F}\u{2D80}-\u{2DDF}\u{AB00}-\u{AB2F}\u{10300}-\u{1032F}\u{103A0}-\u{103DF}\u{105C0}-\u{105FF}\u{10800}-\u{1085F}\u{10880}-\u{108AF}\u{108E0}-\u{1093F}\u{10A00}-\u{10A9F}\u{10B00}-\u{10BAF}\u{10C00}-\u{10C4F}\u{10C80}-\u{10CFF}\u{10EC0}-\u{10F6F}\u{13000}-\u{143FF}\u{1E7E0}-\u{1E7FF}]/ugm],
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

