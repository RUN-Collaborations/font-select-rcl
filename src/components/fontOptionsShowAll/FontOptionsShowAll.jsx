import React, {Fragment} from 'react';
import FontOptionShowAll from '../fontOptionShowAll/FontOptionShowAll';

export default function FontOptionsShowAll({fontOptionsShowAll, onSelect, testString, baselineFont}) {

  const fontOptionsShowAllComponents = fontOptionsShowAll.map((font) => {
    return <FontOptionShowAll {...font} onSelect={onSelect} testString={testString} baselineFont={baselineFont} />
  });
  
  return (<Fragment>{fontOptionsShowAllComponents}</Fragment>);
};