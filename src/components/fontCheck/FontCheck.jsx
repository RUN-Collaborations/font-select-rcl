import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

export default function FontCheck({ name, testString, baselineFont }) {

  /** Test font availability. */
  const doesFontExist = useCallback(( name, testString, baselineFont ) => {
    /** Create an in-memory Canvas element. */
    let canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    /** The text whose final pixel size will be measured */
    const text = testString;
    /** A baseline font must be available for the test to work. */
    context.font = `72px ${baselineFont}`;
    /** Get the size of text with the baseline font. */
    const baselineSize = context.measureText(text).width;
    /** Specify the font to test */
    context.font = `72px '${name}', ${baselineFont}`;
    /** Get the size of the text with the tested font. */
    const newSize = context.measureText(text).width;
    /** Remove the in-memory Canvas element. */
    canvas = null;
    /** If the size of the two text instances differs, then font exists. */
    return (newSize !== baselineSize);
  }, []);

  /** Is font locally installed? */
  const isFontDetected = useMemo(() => doesFontExist(name, testString, baselineFont), [doesFontExist]);

  return (isFontDetected);
};

FontCheck.propTypes = {
  /** Name of font to test */
  name: PropTypes.string.isRequired,
  /** String for use in font detection (default is 'abcdefghijklmnopqrstuvwxyz0123456789') */
  testString: PropTypes.string,
  /** Baseline font (default is 'monospace') */
  baselineFont: PropTypes.string,
};

FontCheck.propDefaults = {
  testString: 'abcdefghijklmnopqrstuvwxyz0123456789',
  baselineFont: 'monospace',
};