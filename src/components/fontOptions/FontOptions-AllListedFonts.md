<!-- # FontOptions -->
This example renders all fonts whether or not they are detected (unless showAll is changed from true to false).
```jsx
import { FontOptions, useDetectFonts } from 'font-detect-rhl';

function Component(){
  const fonts = [
    { name: 'Arial', id: 'arial' },
    { name: 'Times New Roman', id: 'times-new-roman' },
    { name: 'Not A Font', id: 'not-a-font' },
  ];
  const onSelect = (id) => { alert(id); };

  const testString = 'abcdefghijklmnopqrstuvwxyz0123456789';

  const baselineFont = 'monospace';

  const showAll = true;

  return (<FontOptions fonts={fonts} onSelect={onSelect} testString={testString} baselineFont={baselineFont} showAll={showAll}></FontOptions>);
};

<Component />
```
