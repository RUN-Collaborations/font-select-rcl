<!-- # useDetectFonts -->
**useDetectFonts** returns an array of detected fonts with a detected boolean attribute. For additional information see [Font Detection Approach](#Font_Detection_Approach).
```jsx
import { useDetectFonts } from 'font-detect-rhl';

function Component(){

  const fonts = [
    { name: 'Arial', id: 'arial' },
    { name: 'Times New Roman', id: 'times-new-roman' },
    { name: 'Not A Font', id: 'not-a-font' },
  ];

  const detectedFonts = useDetectFonts({ fonts, showAll: true });

  const detectedFontsComponents = detectedFonts.map((font, index) => (
    <div style={ font.detected ? {fontFamily: font.name} : { textDecoration: 'line-through' }} key={index}>{font.name} detected: {font.detected.toString()}</div>
  ));

  const noneDetectedMsg = 'none detected';

  return (
      <div style = {{ border: 'solid 2px blue'}}>
        {detectedFontsComponents.length !== 0 ? detectedFontsComponents : noneDetectedMsg}
      </div>
  );
};

<Component />
```
