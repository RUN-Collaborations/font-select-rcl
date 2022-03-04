<!-- # FontOptions -->

```jsx
const fontOptions = [
  { name: 'Arial', id: 'arial' },
  { name: 'Times New Roman', id: 'times-new-roman' },
];
const onSelect = (id) => { alert(id); };


<FontOptions fontOptions={fontOptions} onSelect={onSelect}></FontOptions>
```