import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import GraphiteCheck from './GraphiteCheck';

export default function GraphiteCheckShow({ testClient, alwaysUse }){

  const graphiteEnabledFonts = useMemo(() => GraphiteCheck({ testClient, alwaysUse }), [GraphiteCheck]);

  return (<div>{graphiteEnabledFonts ? "Graphite-enabled fonts will be presented. Note that they only render properly where Graphite is enabled." : "Graphite-enabled fonts will not be displayed."}</div>);
};

GraphiteCheckShow.propTypes = {
  /** name of browser to test */
  name: PropTypes.string,
  /** skip environment test */
  alwaysUse: PropTypes.bool,
};

GraphiteCheckShow.propDefaults = {
  testClient: 'firefox',
  alwaysUse: false,
};

