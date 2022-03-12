<!-- # FontCheckShow -->
This shows application of the FontCheck component.
```jsx
const fontCheckShow = { name: 'Arial', id: 'arial' };

const testString = 'abcdefghijklmnopqrstuvwxyz0123456789';

const baselineFont = 'monospace';

<FontCheckShow {...fontCheckShow} testString={testString} baselineFont={baselineFont} ></FontCheckShow>;
```