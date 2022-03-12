<!-- # FontOptions -->

```jsx
const fontOptions = [
  { name: 'Arial', id: 'arial' },
  { name: 'Times New Roman', id: 'times-new-roman' },
  { name: 'Not A Font', id: 'not-a-font' },
];
const onSelect = (id) => { alert(id); };

const testString = 'abcdefghijklmnopqrstuvwxyz0123456789';

const baselineFont = 'monospace';

<FontOptions fontOptions={fontOptions} onSelect={onSelect} testString={testString} baselineFont={baselineFont}></FontOptions>
```