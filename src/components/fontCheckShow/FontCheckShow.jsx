import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import FontCheck from '../fontCheck/FontCheck';

export default function FontCheckShow({ name, testString, baselineFont  }) {

    const isFontDetected = useMemo(() => FontCheck({ name, testString, baselineFont }), [FontCheck]);

  return (<div>{name}: {isFontDetected ? "detected as locally installed" : "not detected as locally installed"}</div>);
};

FontCheckShow.propTypes = {
  /** Name of font to test */
  name: PropTypes.string.isRequired,
  /** String for use in font detection (default is 'abcdefghijklmnopqrstuvwxyz0123456789') */
  testString: PropTypes.string,
  /** Baseline font (default is 'monospace') */
  baselineFont: PropTypes.string,
};

FontCheckShow.propDefaults = {
  testString: 'abcdefghijklmnopqrstuvwxyz0123456789',
  baselineFont: 'monospace',
};