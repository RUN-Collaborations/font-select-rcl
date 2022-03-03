import React from 'react';
import PropTypes from 'prop-types';

export default function GraphiteCheck({ testClient }){

  const graphiteCheckComponent = (navigator.userAgent.toLowerCase().indexOf(testClient) > -1);

  return (<div>{graphiteCheckComponent ? "Firefox detected. Graphite-enabled fonts will be displayed" : "Firefox not detected. Graphite-enabled fonts will not be displayed"}</div>);
};

GraphiteCheck.propTypes = {
  /** name of browser to test */
  name: PropTypes.string.isRequired,
};

GraphiteCheck.propDefaults = {
    testClient: { testClient: 'firefox' },
};

