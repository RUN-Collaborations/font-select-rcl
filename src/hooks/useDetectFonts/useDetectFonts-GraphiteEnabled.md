<!-- # useDetectFonts -->
When useGraphite is true, this returns an array of detected Graphite-enabled fonts from a json file with a detected boolean attribute.
```jsx
import { useDetectFonts, useGraphite, useGraphiteEnabledFonts } from 'font-detect-rhl';

const fonts = useGraphiteEnabledFonts;

function Component(){

  const useGraphiteProps = { testClient: 'firefox', alwaysUse: false };

  const isGraphiteAssumed = useGraphite( useGraphiteProps );

  const detectedFontsToMap = isGraphiteAssumed && useDetectFonts({ fonts });

  const detectedFonts = isGraphiteAssumed && detectedFontsToMap.map((i, k) => (
    <div key={k}>{i.name} detected: {i.detected.toString()}</div>
  ));

  const noneDetectedMsg = 'none detected';

  return (
      <React.Fragment>
        {!isGraphiteAssumed && `useGraphite is ${isGraphiteAssumed.toString()}.`}{detectedFonts.length !== 0 ? detectedFonts :  noneDetectedMsg}
      </React.Fragment>
  );
};

<Component />
```
