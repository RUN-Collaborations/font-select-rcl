import { useMemo } from 'react';
import PropTypes from 'prop-types';

/** This detects for the the browser defined in "testClient", with results overridden when "alwaysUse" is true.
Graphite will not work in Firefox if gfx.font_rendering.graphite.enabled has been changed to false in about:config.
See additional info in End Note [1] of README.md. */

export default function useAssumeGraphite({ testClient='firefox', alwaysUse=false }){

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const browserTest = useMemo(() => (navigator.userAgent.toLowerCase().indexOf(testClient) > -1),[]);
  
  const isGraphiteAssumed = (alwaysUse || browserTest);

  return (isGraphiteAssumed);
};

useAssumeGraphite.propTypes = {
  /** name of browser to test *(default is 'firefox')* */
  testClient: PropTypes.string,
  /** skips browser test if true *(default is false; true is the same as not applying useAssumeGraphite)* */
  alwaysUse: PropTypes.bool,
};

useAssumeGraphite.propDefaults = {
  testClient: 'firefox',
  alwaysUse: false,
};

