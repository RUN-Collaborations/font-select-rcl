import {useDeepCompareMemo} from 'use-deep-compare';
import PropTypes from 'prop-types';
import { detectFonts } from '../helpers/font';

export default function useDetectFonts({
  fonts,
  baselineFont,
  testString,
  showAll,
}) {

  /** Are fonts locally installed? */
  const detectedFonts = useDeepCompareMemo(() => (
    detectFonts({ fonts, testString, baselineFont, showAll } )
  ),[fonts, baselineFont, testString, showAll]);

  return (detectedFonts);
};

useDetectFonts.propTypes = {
  /** Font object passed in */
  fonts: PropTypes.shape({
    /** name of font to display */
    name: PropTypes.string.isRequired,
  }),
  /** String for use in font detection */
  testString: PropTypes.string,
  /** Baseline font *(use a generic font family)* */
  baselineFont: PropTypes.string,
};

useDetectFonts.defaultProps = {
  testString: 'abcdefghijklmnopqrstuvwxyz0123456789',
  baselineFont: 'monospace',
};