import React from 'react';
import PropTypes from 'prop-types';
import useDetectFonts from '../../hooks/useDetectFonts/useDetectFonts';

import fonts from '../../fonts/fonts.json';

export default function ProvidedFontList() {

  const detectedFontsToMap = useDetectFonts({ fonts });

  const detectedFonts = detectedFontsToMap.map((i, k) => (
    <div key={k}>{i.name}</div>
  ));

  const noneDetectedMsg = 'none detected';

  return (
    (<React.Fragment>
      {detectedFonts.length !== 0 ? detectedFonts : noneDetectedMsg}
    </React.Fragment>)
  );
};

ProvidedFontList.propTypes = {
  /** Font object passed in */
  fonts: PropTypes.shape({
    /** name of font to display */
    name: PropTypes.string.isRequired,
  }),
  /** String for use in font detection (default is 'abcdefghijklmnopqrstuvwxyz0123456789') */
  testString: PropTypes.string,
  /** Baseline font (default is 'monospace') */
  baselineFont: PropTypes.string,
};

ProvidedFontList.propDefaults = {
  testString: 'abcdefghijklmnopqrstuvwxyz0123456789',
  baselineFont: 'monospace',
};
