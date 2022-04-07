<!-- # useDetectFonts -->
This returns an array of detected fonts with a detected boolean attribute.
```jsx
import { useDetectFonts } from 'font-detect-rhl';

function Component(){

  const fonts = [
    { name: 'Arial', id: 'arial' },
    { name: 'Times New Roman', id: 'times-new-roman' },
    { name: 'Not A Font', id: 'not-a-font' },
  ];

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
<!-- # useDetectFonts -->
When useGraphite is true, this returns an array of detected Graphite-enabled fonts from a json file with a detected boolean attribute.
```jsx
import { useGraphite, useDetectFonts } from 'font-detect-rhl';

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
