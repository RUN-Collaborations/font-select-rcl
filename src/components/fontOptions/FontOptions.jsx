import React, {Fragment} from 'react';
import useDetectFonts from '../../hooks/useDetectFonts/useDetectFonts';
import FontOption from '../fontOption/FontOption';

export default function FontOptions({ fonts, onSelect, testString, baselineFont, showAll }) {
  const detectedFonts = useDetectFonts({ fonts, testString, baselineFont, showAll });

  
  const fontOptionsComponents = detectedFonts.map((font) => {
    return <FontOption font={font} onSelect={onSelect} />
  });
  
  return (<Fragment>{fontOptionsComponents}</Fragment>);
};
