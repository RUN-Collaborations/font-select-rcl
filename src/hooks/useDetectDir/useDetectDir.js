import PropTypes from 'prop-types';

// Code originated from Christopher Klapp at https://github.com/unfoldingWord-box3/simple-text-editor-rcl/blob/9e34aa5618cf1b06409b2c169ba5bd86229e6d45/src/helpers/detectRTL.js

const rtlDirCheckRegex = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/gm;

export default function useDetectDir({ text, ratioThreshold=0.3 }) {
  let mostlyRtl = false;

  if (text && text.length) {
    const rtlMatches = text.match(rtlDirCheckRegex);
    const rtlChars = rtlMatches?.length;
    const textChars = text.length;
    const rtlRatio = rtlChars / textChars;

    if (rtlRatio > ratioThreshold) { mostlyRtl = true; }
  };

  return (mostlyRtl ? 'rtl' : 'ltr');
};

useDetectDir.propTypes = {
  /** text to examine */
  text: PropTypes.string.isRequired,
  /** RTL:LTR ratio threshold (default is 0.3)  */
  ratioThreshold: PropTypes.number.isRequired,
};

useDetectDir.propDefaults = {
  ratioThreshold: 0.3,
};