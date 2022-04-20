<!-- # FontOptions -->
This clickable example renders a single font whether or not it is detected (unless showAll is changed from true to false).
```jsx
import { FontOptions } from 'font-detect-rhl';

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
