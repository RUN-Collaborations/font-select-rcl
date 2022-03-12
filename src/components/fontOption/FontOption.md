<!-- # FontOption -->

```jsx
const onSelect = (id) => { alert(id); }
const style = { border: 'solid 1px red'};

const fontOption = { name: 'Arial', id: 'arial' };

const testString = 'abcdefghijklmnopqrstuvwxyz0123456789';

const baselineFont = 'monospace';

<FontOption {...fontOption} onSelect={onSelect} style={style} testString={testString} baselineFont={baselineFont}></FontOption>;
```