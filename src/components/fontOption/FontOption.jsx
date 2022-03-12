import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import FontCheck from '../fontCheck/FontCheck';

export default function FontOption({ name, id, onSelect, testString, baselineFont }) {

  const isFontDetected = useMemo(() => FontCheck({ name, testString, baselineFont }), [FontCheck]);

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
  /** String for use in font detection (default is 'abcdefghijklmnopqrstuvwxyz0123456789') */
  testString: PropTypes.string,
  /** Baseline font (default is 'monospace') */
  baselineFont: PropTypes.string,
};

FontOption.propDefaults = {
  testString: 'abcdefghijklmnopqrstuvwxyz0123456789',
  baselineFont: 'monospace',
};