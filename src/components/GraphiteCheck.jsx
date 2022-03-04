import React from 'react';
import PropTypes from 'prop-types';

export default function GraphiteCheck({ testClient, alwaysUse }){

  const graphiteCheckComponent = (navigator.userAgent.toLowerCase().indexOf(testClient) > -1);
  
  const displayGraphiteFonts = (alwaysUse || graphiteCheckComponent);

  return (graphiteCheckComponent);
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

