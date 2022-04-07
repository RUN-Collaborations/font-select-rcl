import { useMemo } from 'react';
import PropTypes from 'prop-types';

export default function useGraphite({ testClient, alwaysUse }){

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const browserTest = useMemo(() => (navigator.userAgent.toLowerCase().indexOf(testClient) > -1),[]);
  
  const isGraphiteAssumed = (alwaysUse || browserTest);

  return (isGraphiteAssumed);
};

useGraphite.propTypes = {
  /** name of browser to test */
  testClient: PropTypes.string,
  /** skip environment test */
  alwaysUse: PropTypes.bool,
};

useGraphite.propDefaults = {
  testClient: 'firefox',
  alwaysUse: false,
};

