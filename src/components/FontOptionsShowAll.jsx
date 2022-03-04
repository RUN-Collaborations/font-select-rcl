import React, {Fragment} from 'react';
import FontOptionShowAll from './FontOptionShowAll';

export default function FontOptionsShowAll({fontOptionsShowAll, onSelect}) {

  const fontOptionsShowAllComponents = fontOptionsShowAll.map((font) => {
    return <FontOptionShowAll {...font} onSelect={onSelect} />
  });
  
  return (<Fragment>{fontOptionsShowAllComponents}</Fragment>);
};