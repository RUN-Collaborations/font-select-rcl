<!-- # fontList -->
The fontList array **includes** *Windows 11 system and supplemental font families* and *MacOS system and downloadable font families thru Monterey (v12)*, but **excludes**:
   * Variants like bold, italic, oblique, light, medium, thin, extra, etc
   * Thick fonts such as Impact and Cooper
   * Symbols, icons, emojis, assets, wingdings, webdings, ornaments, math, Marlett, etc
   * MS Office Cloud fonts or MacOS document fonts except where there is overlap

This example below applies **useDetectFonts** to **fontList** and returns an array of detected fonts with the detected boolean attribute displayed.
```jsx
import { useDetectFonts, fontList } from 'font-detect-rhl';

const fontsArray = fontList;

function Component(){

  const detectedFonts = useDetectFonts({ fonts: fontsArray });

  const detectedFontsComponents = detectedFonts.map((font, index) => (
    <div key={index}>{font.name} detected: {font.detected.toString()}</div>
  ));

  const noneDetectedMsg = 'none detected';

  return (
      <React.Fragment>
        {detectedFontsComponents.length !== 0 ? detectedFontsComponents : noneDetectedMsg}
      </React.Fragment>
  );
};

<Component />
```
