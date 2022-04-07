import React, {Fragment} from 'react';
import useDetectFonts from '../../hooks/useDetectFonts/useDetectFonts';
import FontOption from '../fontOption/FontOption';

// eslint-disable-next-line react/prop-types
export default function FontOptions({ fonts, onSelect, testString, baselineFont, showAll }) {
  const detectedFonts = useDetectFonts({ fonts, testString, baselineFont, showAll });

  // eslint-disable-next-line arrow-body-style
  const fontOptionsComponents = detectedFonts.map((font, k) => {
    return <FontOption key={k} font={font} onSelect={onSelect} />
  });
  
  return (<Fragment>{fontOptionsComponents}</Fragment>);
};
