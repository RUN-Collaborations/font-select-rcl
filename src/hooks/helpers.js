/** Test font availability. */

export const detectFont = ({ name, testString='abcdefghijklmnopqrstuvwxyz0123456789', baselineFont='monospace' }) => {
    /** Create an in-memory Canvas element. */
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
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
};

export const detectFonts = ({
    fonts,
    baselineFont,
    testString,
    showAll=false,
}) => {
    let detectedFonts = [];

    detectedFonts = fonts.map((font) => (
        {
            ...font,
            detected: detectFont( {...font, testString, baselineFont} ),
        }
    ));

    if (!showAll) {
        detectedFonts = detectedFonts.filter(font => font.detected);
    };
    
    return detectedFonts;
}