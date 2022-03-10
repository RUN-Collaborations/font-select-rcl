import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import FontCheck from '../fontCheck/FontCheck';

export default function FontCheckShow({ name }) {

    const isFontDetected = useMemo(() => FontCheck({ name }), [FontCheck]);

  return (<div>{name}: {isFontDetected ? "detected as locally installed" : "not detected as locally installed"}</div>);
};

FontCheckShow.propTypes = {
  /** Name of font to test */
  name: PropTypes.string.isRequired,
};

FontCheckShow.propDefaults = {
};