import React, {Fragment} from 'react';
import FontOption from '../fontOption/FontOption';

export default function FontOptions({fontOptions, onSelect, testString, baselineFont}) {

  const fontOptionsComponents = fontOptions.map((font) => {
    return <FontOption {...font} onSelect={onSelect} testString={testString} baselineFont={baselineFont} />
  });
  
  return (<Fragment>{fontOptionsComponents}</Fragment>);
};