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
