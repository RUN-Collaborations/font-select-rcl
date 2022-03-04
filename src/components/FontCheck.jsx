import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

export default function FontCheck({ name }, testString) {

  /** Test font availability. */
  const doesFontExist = useCallback((fontName) => {
    /** Create an in-memory Canvas element. */
    let canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    /** The text whose final pixel size will be measured */
    const text = 'abcdefghijklmnopqrstuvwxyz0123456789';
    /** Baseline font; A default monospace font must be available for the test to work. */
    context.font = '72px monospace';
    /** Get the size of text with the baseline font. */
    const baselineSize = context.measureText(text).width;
    /** Specify the font to test */
    context.font = `72px '${fontName}', monospace`;
    /** Get the size of the text with the tested font. */
    const newSize = context.measureText(text).width;
    /** Remove the in-memory Canvas element. */
    canvas = null;
    /** If the size of the two text instances differs, then font exists. */
    return (newSize !== baselineSize);
  }, []);

  /** Is font locally installed? */
  const fontCheckComponent = useMemo(() => doesFontExist(name), [doesFontExist]);

  return (<div>{name}: {fontCheckComponent ? "detected as locally installed" : "not detected as locally installed"}</div>);
};

FontCheck.propTypes = {
  /** name of font to display */
  name: PropTypes.string.isRequired,
  /** String for use in font detection */
  testString: PropTypes.string.isRequired,
};

FontCheck.propDefaults = {
  testString: 'abcdefghijklmnopqrstuvwxyz0123456789',
};