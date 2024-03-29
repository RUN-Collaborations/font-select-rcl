import React from 'react';
import PropTypes from 'prop-types';

export default function useDetectDir(){
  return (<React.Fragment></React.Fragment>);
};

useDetectDir.propTypes = {
  /** text to examine */
  text: PropTypes.string.isRequired,
  /** RTL:LTR ratio threshold */
  ratioThreshold: PropTypes.number.isRequired,
};

useDetectDir.defaultProps = {
  ratioThreshold: 0.3,
};

