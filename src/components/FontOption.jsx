import React from 'react';
import PropTypes from 'prop-types';

export default function FontOption({ name, id, onSelect }) {
  
  const handleClick = () => { onSelect(id); }

  const props = {
    onClick: handleClick,
  };

  return (<div {...props}>{name}</div>);
};

FontOption.propTypes = {
  /** name of font to display */
  name: PropTypes.string.isRequired,
  /** id of font */
  id: PropTypes.string.isRequired,
  /** callback for selection */
  onSelect: PropTypes.func.isRequired,
};

FontOption.propDefaults = {
};