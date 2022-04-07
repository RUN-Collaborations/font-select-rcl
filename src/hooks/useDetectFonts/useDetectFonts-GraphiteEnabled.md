<!-- # useDetectFonts -->
When useGraphite is true, this returns an array of detected Graphite-enabled fonts from a json file with a detected boolean attribute.
```jsx
import useGraphite from '../../hooks/useGraphite/useGraphite';
import { useDetectFonts } from 'font-detect-rhl';

import fonts from '../../fonts/graphite-enabled-fonts.json';

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
