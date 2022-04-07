import React from 'react';
import PropTypes from 'prop-types';

export default function FontOption({
  font: {
    name,
    id,
    detected,
  },
  onSelect,
  ...props
}) {

  const enabled = (detected === undefined || detected);

  const handleClick = () => {
    // eslint-disable-next-line no-unused-expressions
    enabled && onSelect(id);
  }

  const style = enabled ? {} : {color: 'red'};

  // eslint-disable-next-line test-selectors/onClick
  return (<div style={style} {...props} onClick={handleClick}>{name}</div>);
};

FontOption.propTypes = {
  /** Font object passed in */
  font: PropTypes.shape({
    /** name of font to display */
    name: PropTypes.string.isRequired,
    /** id of font */
    id: PropTypes.string.isRequired,
    /** font detected (not required) */
    detected: PropTypes.bool,
  }),
  /** callback for selection */
  onSelect: PropTypes.func.isRequired,
};

FontOption.propDefaults = {
};