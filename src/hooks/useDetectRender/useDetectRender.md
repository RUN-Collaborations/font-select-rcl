<!-- # useDetectRender -->
**useDetectRender** with **useDetectFonts** returns an array of detected fonts with one of the following three detected attributes: 'RenderingUnknown', 'RenderingOpenType', or 'RenderingGraphite'.

For example:
- Awami Nastliq 3.300 will return either 'RenderingGraphite' or 'RenderingUnknown. This font does not display properly without Graphite. *(If it is known for certain that Awami Nastliq 3.300 is available, then this can be used as a test to identify whether or not rendering is being handled by Graphite in cases other than Firefox, or could be used to identify if Graphite is disabled in Firefox config.)*
- The woff2 format of Abyssinica SIL 2.201 or Padauk 5.100 will return either 'RenderingGraphite' or 'RenderingOpenType. It is will display properly in either.
- Alkalami 3.000, Harmattan 4.300, Lateef 4.300, Ruwudu 3.000, or Scheherazade New 4.300 will return "RenderingOpenType".

A line through a font means that the font was not detected, in which case the rendering test result of the fallback font is shown.

```jsx
import { useDetectFonts, useDetectRender } from 'font-detect-rhl';

function Component(){

  const fonts = [
    { name: 'Awami Nastaliq', id: 'awami-nastaliq' },
    { name: 'Abyssinica SIL', id: 'abyssinica-sil' },
    { name: 'Padauk', id: 'padauk' },
    { name: 'Alkalami', id: 'alkalami' },
    { name: 'Harmattan', id: 'harmattan' },
    { name: 'Lateef', id: 'lateef' },
    { name: 'Ruwudu', id: 'ruwudu' },
    { name: 'Scheherazade New', id: 'scheherazade-new' },
  ];

  const detectedFonts = useDetectFonts({ fonts, showAll: true });

  const detectedFontsRendering = useDetectRender({ fonts: detectedFonts, fallbackFont: 'monospace' });

  const detectedFontsComponents = detectedFontsRendering.map((font, index) => (
    <div style={ font.detected ? {fontFamily: "'" + font.name + "'"} : { textDecoration: 'line-through' }} key={index}>{font.name}: <b>{font.detectedRender.toString()}</b></div>
  ));

  const noneDetectedMsg = 'none detected';

  return (
      <div style = {{ border: 'solid 2px blue'}}>
        {detectedFontsComponents.length !== 0 ? detectedFontsComponents : noneDetectedMsg}
      </div>
  );
};

<Component />
```
