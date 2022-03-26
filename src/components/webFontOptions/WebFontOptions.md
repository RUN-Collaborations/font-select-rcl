<!-- # WebFontOptions -->

This renders a single fonts even if not detected (unless showAll is set to false).
```jsx
import { useDetectFont } from 'font-select-rcl';

function Component(){
  const fontOptions = [
    { name: 'Arial', id: 'arial' },
  ];

  const onSelect = (id) => { alert(id); };

  const testString = 'abcdefghijklmnopqrstuvwxyz0123456789';

  const baselineFont = 'monospace';

  const showAll = false;

  return (<FontOptions fonts={fontOptions} onSelect={onSelect} testString={testString} baselineFont={baselineFont} showAll={showAll}></FontOptions>);
};

<Component />
```
This only renders fonts that are detected (unless showAll is set to true).
```jsx
import { useDetectFont } from 'font-select-rcl';

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
This renders all fonts even if not detected (unless showAll is set to false).
```jsx
import { useDetectFont } from 'font-select-rcl';

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