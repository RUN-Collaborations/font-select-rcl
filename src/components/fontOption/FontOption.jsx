import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import FontCheck from '../fontCheck/FontCheck';

export default function FontOption({ name, id, onSelect }) {

  const isFontDetected = useMemo(() => FontCheck({ name }), [FontCheck]);

  const handleClick = () => {
      isFontDetected && onSelect(id);
  }

  const props = {
    onClick: handleClick,
  };

  return (<div {...props}>{isFontDetected && name}</div>);
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