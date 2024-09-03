/**
 * Some SIL fonts change text entered as "RenderingUnknown" (16 characters) and instead display:
 * - "RenderingGraphite" (17 characters) if Graphite is enabled and in use by the font (e.g., Awami Nastliq)
 * - "RenderingOpenType" (17 characters) if OpenType is in use by the font (e.g., Alkalami, Harmattan, Lateef, Ruwudu, Scheherazade New)
 * Otherwise "RenderingUnknown" will be displayed.
 * If Awami Nastiliq renders this as "RenderingUnknown" then Graphite is not enabled and in that case that particular font will not render properly.
 */
export const detectFontRender = ({ name, fallbackFont='monospace' }) => {

  /** Create an in-memory Canvas element. */
  let canvas = document.createElement('canvas');
  let context = canvas.getContext('2d');

  /** The fallback generic-family for when the font is not available. */
  context.font = `72px '${name}', ${fallbackFont}`;

  /** Get the size of text. */
  const baselineSize = context.measureText('RenderingUnknown').width;
  const graphiteSize = context.measureText('RenderingGraphite').width;
  const openTypeSize = context.measureText('RenderingOpenType').width;
  
  let renderedResult = ''

  /** Identify test results */
  if (baselineSize === graphiteSize) {
    renderedResult = 'RenderingGraphite';
  } else if (baselineSize === openTypeSize) {
    renderedResult = 'RenderingOpenType';
  } else {
    renderedResult = 'RenderingUnknown';
  };

  /** Remove the in-memory Canvas element. */
  canvas = null;

  // return the rendered result of 'RenderingUnknown'
  return renderedResult;
};

export const detectFontsRender = ({
  fonts,
  fallbackFont
}) => {
  let detectedFontsRender = [];

  detectedFontsRender = fonts.map((font) => (
    {
      ...font,
      detectedRender: detectFontRender( {...font, fallbackFont} ),
    }
  ));

  return detectedFontsRender;
}