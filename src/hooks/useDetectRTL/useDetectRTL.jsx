import React from 'react';
import PropTypes from 'prop-types';

export default function useDetectRTL(){
  return (<React.Fragment></React.Fragment>);
};

useDetectRTL.propTypes = {
  /** text to examine */
  text: PropTypes.string.isRequired,
  /** RTL:LTR Ratio Threshold  */
  ratioThreshold: PropTypes.number.isRequired,
};

useDetectRTL.propDefaults = {
  ratioThreshold: 0.3,
};

