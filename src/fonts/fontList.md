<!-- # fontList -->
The fontList array of over 700 *font families<sup>[[1]](#f1)</sup>* ***includes***:
* Windows 11 system and supplemental font families
* MacOS system and downloadable font families thru Monterey (v12)
* Over 250 fonts common to multiple *Linux desktop environments/distributions<sup>[[2]](#f2)</sup>*
* Pre-installed *Android fonts<sup>[[3]](#f3)</sup>*
* iOS system *fonts<sup>[[4]](#f4)</sup>*

Note, however that this provided font list ***excludes***:
* Font names that include hairline, thin, ultra-light, extra-light, light, book, medium, demi-bold, semi-bold, bold, extra-bold, extra heavy, black, extra-black, ultra-black, ultra, italic, slanted, and oblique.
* Thick fonts such as Impact and Cooper
* Symbols, icons, emojis, assets, wingdings, webdings, dingbats, ornaments, math, music, hieroglyphs, cuneiform, numbers, Marlett, etc.
* MS Office Cloud fonts or MacOS document fonts except where there is overlap

This example below applies **useDetectFonts** to **fontList** and returns an array of detected fonts with the detected boolean attribute displayed.
```jsx
import { useDetectFonts, fontList } from 'font-detect-rhl';

const fontsArray = fontList;

function Component(){

  const detectedFonts = useDetectFonts({ fonts: fontsArray });

  const detectedFontsComponents = detectedFonts.map((font, index) => (
    <div key={index} style={{ fontFamily: font.name }}>{font.name} detected: {font.detected.toString()}</div>
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
