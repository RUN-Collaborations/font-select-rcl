import React from 'react';
import PropTypes from 'prop-types';

/** This detects for the the browser defined in "testClient", with results overridden when "alwaysUse" is true.
Graphite will not work in Firefox if gfx.font_rendering.graphite.enabled has been changed to false in about:config.
See additional info in End Note [1] of Readme.md. */

export default function useAssumeGraphite(){
  return (<React.Fragment></React.Fragment>);
};

useAssumeGraphite.propTypes = {
  /** name of browser to test */
  testClient: PropTypes.string,
  /** skip environment test */
  alwaysUse: PropTypes.bool,
};

useAssumeGraphite.propDefaults = {
  testClient: 'firefox',
  alwaysUse: false,
};

