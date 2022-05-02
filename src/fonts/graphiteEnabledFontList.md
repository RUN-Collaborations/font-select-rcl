<!-- # graphiteEnabledFontList -->
The graphiteEnabledFontList array contains [graphite-enabled](https://software.sil.org/fonts/) fonts families. User-controlled line-height settings and font-size settings are recommended for Graphite-enabled fonts, for purposes of mitigating collisions or near collisions across rows, and for customizable presentation optimization.

When **useAssumeGraphite** is true, this example below applies **useDetectFonts** to **graphiteEnabledFontList** and returns an array of detected Graphite-enabled fonts with the detected boolean attribute displayed.
```jsx
import { useDetectFonts, useAssumeGraphite, graphiteEnabledFontList } from 'font-detect-rhl';

const graphiteEnabledFontsArray = graphiteEnabledFontList;

function Component(){

  const useAssumeGraphiteProps = { testClient: 'firefox', alwaysUse: false };

  const isGraphiteAssumed = useAssumeGraphite( useAssumeGraphiteProps );

  const detectedFonts = useDetectFonts({ fonts: (isGraphiteAssumed ? graphiteEnabledFontsArray : []) });

  const detectedFontsComponents = isGraphiteAssumed && detectedFonts.map((font, index) => (
    <div key={index}>{font.name} detected: {font.detected.toString()}</div>
  ));

  const noneDetectedMsg = 'none detected';

  return (
      <React.Fragment>
        {!isGraphiteAssumed && `useAssumeGraphite is ${isGraphiteAssumed.toString()}.`}{detectedFontsComponents.length !== 0 ? detectedFontsComponents : noneDetectedMsg}
      </React.Fragment>
  );
};

<Component />
```
