import React from 'react';
import PropTypes from 'prop-types';

export default function useAssumeGraphite(){
  return (<React.Fragment></React.Fragment>);
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
