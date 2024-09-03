import {useDeepCompareMemo} from 'use-deep-compare';
import PropTypes from 'prop-types';
import { detectFontsRender } from '../helpers/render';

export default function useDetectRender({
  fonts,
  fallbackFont
}) {

  /** Are fonts locally installed? */
  const detectedFontsRender = useDeepCompareMemo(() => (
    detectFontsRender({ fonts, fallbackFont })
  ),[fonts, fallbackFont]);

  return (detectedFontsRender);
};

useDetectRender.propTypes = {
  /** Font object passed in */
  fonts: PropTypes.shape({
    /** name of font to display */
    name: PropTypes.string.isRequired,
  }),
  /** Fallback font *(use a generic font family)* */
  fallbackFont: PropTypes.string,
};

useDetectRender.defaultProps = {
  fallbackFont: 'monospace',
};