import React from 'react';
import PropTypes from 'prop-types';

export default function useAssumeGraphite(){
  return (<React.Fragment></React.Fragment>);
};

useAssumeGraphite.propTypes = {
  /** name of browser to test */
  testClient: PropTypes.string,
  /** skips browser test if true *(true is the same as not applying useAssumeGraphite)* */
  alwaysUse: PropTypes.bool,
};

useAssumeGraphite.defaultProps = {
  testClient: 'firefox',
  alwaysUse: false,
};
