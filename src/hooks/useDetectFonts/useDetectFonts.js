import {useDeepCompareMemo} from 'use-deep-compare';
import PropTypes from 'prop-types';
import { detectFonts } from '../helpers';

export default function useDetectFonts({
  fonts,
  baselineFont,
  testString,
  showAll,
}) {

  /** Is font locally installed? */
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
  /** String for use in font detection (default is 'abcdefghijklmnopqrstuvwxyz0123456789') */
  testString: PropTypes.string,
  /** Baseline font (default is 'monospace') */
  baselineFont: PropTypes.string,
};

useDetectFonts.propDefaults = {
  testString: 'abcdefghijklmnopqrstuvwxyz0123456789',
  baselineFont: 'monospace',
};