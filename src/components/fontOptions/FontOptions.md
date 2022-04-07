<!-- # FontOptions -->
Three examples are shown below:  1) A Single Font, 2) Detected Fonts, and 3) All Requested Fonts.

### 1) A Single Font: 
This example renders a single font whether or not it is detected (unless showAll is changed from true to false).
```jsx
import { useDetectFont } from 'font-detect-rhl';

function Component(){
  const fontOptions = [
    { name: 'Arial', id: 'arial' },
  ];

  const onSelect = (id) => { alert(id); };

  const testString = 'abcdefghijklmnopqrstuvwxyz0123456789';

  const baselineFont = 'monospace';

  const showAll = true;

  return (<FontOptions fonts={fontOptions} onSelect={onSelect} testString={testString} baselineFont={baselineFont} showAll={showAll}></FontOptions>);
};

<Component />
```
### 2) Detected Fonts: 
This example renders only fonts that are detected (unless showAll is changed from false to true).
```jsx
import { useDetectFont } from 'font-detect-rhl';

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
### 3) All Requested Fonts:
This example renders all fonts whether or not they are detected (unless showAll is changed from true to false).
```jsx
import { useDetectFont } from 'font-detect-rhl';

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