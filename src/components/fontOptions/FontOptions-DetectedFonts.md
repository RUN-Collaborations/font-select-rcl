<!-- # FontOptions -->
This example renders only fonts that are detected (unless showAll is changed from false to true).
```jsx
import { FontOptions, useDetectFonts } from 'font-detect-rhl';

function Component(){
  const fontOptions = [
    { name: 'Arial', id: 'arial' },
    { name: 'Times New Roman', id: 'times-new-roman' },
    { name: 'Not A Font', id: 'not-a-font' },
  ];
  const onSelect = (id) => { alert(id); };

  const testString = 'abcdefghijklmnopqrstuvwxyz0123456789';

  const baselineFont = 'monospace';

  const showAll = false;

  return (<FontOptions fonts={fontOptions} onSelect={onSelect} testString={testString} baselineFont={baselineFont} showAll={showAll}></FontOptions>);
};

<Component />
```
