<!-- # FontOption -->

```jsx
const onSelect = (id) => { alert(id); }
const style = { border: 'solid 1px red'};

const fontOption = { name: 'Arial', id: 'arial' };

<FontOption {...fontOption} onSelect={onSelect} style={style}></FontOption>;
```