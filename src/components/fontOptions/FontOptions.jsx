import React, {Fragment} from 'react';
import FontOption from '../fontOption/FontOption';

export default function FontOptions({fontOptions, onSelect}) {

  const fontOptionsComponents = fontOptions.map((font) => {
    return <FontOption {...font} onSelect={onSelect} />
  });
  
  return (<Fragment>{fontOptionsComponents}</Fragment>);
};