<!-- # graphiteEnabledFontList -->
The graphiteEnabledFontList array contains over 50 [Graphite](https://graphite.sil.org/)-enabled *[font](https://software.sil.org/fonts/) families<sup>[[1]](#f1)</sup>*. User-controlled line-height settings and font-size settings are recommended for Graphite-enabled fonts, for purposes of mitigating collisions or near collisions across rows, and for customizable presentation optimization.

When **useAssumeGraphite** is true, this example below applies **useDetectFonts** to **graphiteEnabledFontList** and returns an array of detected Graphite-enabled fonts with the detected boolean attribute displayed.
```jsx
import { useDetectFonts, useAssumeGraphite, graphiteEnabledFontList } from 'font-detect-rhl';

const graphiteEnabledFontsArray = graphiteEnabledFontList;

function Component(){

  const useAssumeGraphiteProps = { testClient: 'firefox', alwaysUse: false };

  const isGraphiteAssumed = useAssumeGraphite( useAssumeGraphiteProps );

  const detectedFonts = useDetectFonts({ fonts: (isGraphiteAssumed ? graphiteEnabledFontsArray : []) });

  const detectedFontsComponents = isGraphiteAssumed && detectedFonts.map((font, index) => (
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
        {!isGraphiteAssumed && <span><em>useAssumeGraphite</em> is <b>{isGraphiteAssumed.toString()}</b>.</span>}{detectedFontsComponents.length !== 0 ? detectedFontsComponents : noneDetectedMsg}
      </React.Fragment>
  );
};

<Component />
```
