<!-- # fontList -->
The fontList array of [over 950 font families](#1-font-families) focuses on normal, regular, roman, and plain fonts. The example below applies **useDetectFonts** to **fontList** and returns an array of detected fonts with the detected boolean attribute displayed.
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
        fontFamily: "'" + font.name + "'",
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
