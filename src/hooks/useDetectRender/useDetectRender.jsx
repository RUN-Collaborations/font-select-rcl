import React from 'react';
import PropTypes from 'prop-types';

export default function useDetectRender() {

  return (<React.Fragment></React.Fragment>);
};

useDetectRender.propTypes = {
  /** Font object passed in */
  fonts: PropTypes.shape({
    /** name of font to display */
    name: PropTypes.string.isRequired,
  }),
  /** Fallback font *(use a generic font family)* */
  fallbackFont: PropTypes.string,
};

useDetectRender.defaultProps = {
  fallbackFont: 'monospace',
};