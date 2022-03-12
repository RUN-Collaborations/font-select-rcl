<!-- # FontCheck -->
A boolean is returned by FontCheck -- true if the font is detected; false if the font is not detected. See FontCheckShow for a more verbose respose.
```jsx
const fontCheck = { name: 'Arial', id: 'arial' };

const testString = 'abcdefghijklmnopqrstuvwxyz0123456789';

const baselineFont = 'monospace';

<FontCheck {...fontCheck} testString={testString} baselineFont={baselineFont}></FontCheck>;
```