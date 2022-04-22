<!-- # useDetectFonts -->
When **useAssumeGraphite** is true, this example applies **useDetectFonts** to **useGraphiteEnabledFonts** and returns an array of detected Graphite-enabled fonts with a detected boolean attribute.
```jsx
import { useDetectFonts, useAssumeGraphite, useGraphiteEnabledFonts } from 'font-detect-rhl';

const fonts = useGraphiteEnabledFonts;

function Component(){

  const useAssumeGraphiteProps = { testClient: 'firefox', alwaysUse: false };

  const isGraphiteAssumed = useAssumeGraphite( useAssumeGraphiteProps );

  const detectedFontsToMap = isGraphiteAssumed && useDetectFonts({ fonts });

  const detectedFonts = isGraphiteAssumed && detectedFontsToMap.map((i, k) => (
    <div key={k}>{i.name} detected: {i.detected.toString()}</div>
  ));

  const noneDetectedMsg = 'none detected';

  return (
      <React.Fragment>
        {!isGraphiteAssumed && `useAssumeGraphite is ${isGraphiteAssumed.toString()}.`}{detectedFonts.length !== 0 ? detectedFonts :  noneDetectedMsg}
      </React.Fragment>
  );
};

<Component />
```
