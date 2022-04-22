import { useMemo } from 'react';
import PropTypes from 'prop-types';

export default function useAssumeGraphite({ testClient, alwaysUse }){

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const browserTest = useMemo(() => (navigator.userAgent.toLowerCase().indexOf(testClient) > -1),[]);
  
  const isGraphiteAssumed = (alwaysUse || browserTest);

  return (isGraphiteAssumed);
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

