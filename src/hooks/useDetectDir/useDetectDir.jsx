import React from 'react';
import PropTypes from 'prop-types';

export default function useDetectDir(){
  return (<React.Fragment></React.Fragment>);
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

