import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

export default function GraphiteCheck({ testClient, alwaysUse }){

  const graphiteCheckComponent = (navigator.userAgent.toLowerCase().indexOf(testClient) > -1);
  
  const displayGraphiteFonts = (alwaysUse || graphiteCheckComponent);

  const proper = useCallback((str) => {
    return str[0].toUpperCase() + str.slice(1);
  }, []);

  const properClient = useMemo(() => proper(testClient), [proper]);


  return (<div>{properClient} {graphiteCheckComponent ? " detected." : " not detected."}{' '}
  {alwaysUse ? "Ignoring environment test." : "Applying environment test."}{' '}
  {displayGraphiteFonts ? "Graphite-enabled fonts will be presented. They will render properly if Graphite is enabled." : "Graphite-enabled fonts will not be displayed."}</div>);
};

GraphiteCheck.propTypes = {
  /** name of browser to test */
  name: PropTypes.string,
  /** skip environment test */
  alwaysUse: PropTypes.bool,
};

GraphiteCheck.propDefaults = {
  testClient: 'firefox',
  alwaysUse: false,
};

