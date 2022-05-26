<!-- # fontList -->
The fontList array of over 700 *font families<sup>[[1]](#f1)</sup>* focuses on normal, regular, roman, and plain fonts.

***Includes***:
* Windows 11 system and supplemental font families
* MacOS system and downloadable font families thru Monterey (v12)
* Over 250 fonts common to multiple *Linux desktop environments/distributions<sup>[[2]](#f2)</sup>*
* Pre-installed *Android fonts<sup>[[3]](#f3)</sup>*
* iOS system *fonts<sup>[[4]](#f4)</sup>*

***Excludes***:
* MS Office Cloud fonts or MacOS document fonts except where there is overlap

This example below applies **useDetectFonts** to **fontList** and returns an array of detected fonts with the detected boolean attribute displayed.
```jsx
import { useDetectFonts, fontList } from 'font-detect-rhl';

const fontsArray = fontList;

function Component(){

  const detectedFonts = useDetectFonts({ fonts: fontsArray });

  const detectedFontsComponents = detectedFonts.map((font, index) => (
    <div
      style={{
        display: 'flex',
        paddingTop: '0.125rem',
        paddingBottom: '0.125rem',
        width: "400px",
        justifyContent: "space-between",
        alignItems: 'center',
        borderBottom: "1px outset",
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        lineHeight: '1.25'
      }}
        key={index}
    >
    <span>
      {font.name} detected: <b>{font.detected.toString()}</b>&nbsp;
    </span>
    <button
      style={{
        fontFamily: font.name,
        lineHeight: '1.0',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }>
      {font.detected ? font.name : ""}
    </button>
  </div>
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
