<!-- # useDetectFonts -->
This returns an array of detected fonts from a json file with a detected boolean attribute.
```jsx
import { useDetectFonts } from 'font-detect-rhl';

import fonts from '../../fonts/fonts.json';

function Component(){

  const detectedFontsToMap = useDetectFonts({ fonts });

  const detectedFonts = detectedFontsToMap.map((i, k) => (
    <div key={k}>{i.name} detected: {i.detected.toString()}</div>
  ));

  const noneDetectedMsg = 'none detected';

  return (
      <React.Fragment>
        {detectedFonts.length !== 0 ? detectedFonts : noneDetectedMsg}
      </React.Fragment>
  );
};

<Component />
```
