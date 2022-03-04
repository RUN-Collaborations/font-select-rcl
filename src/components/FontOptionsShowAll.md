<!-- # FontOptionsShowAll -->

```jsx
const fontOptionsShowAll = [
  { name: 'Arial', id: 'arial' },
  { name: 'Times New Roman', id: 'times-new-roman' },
  { name: 'Not A Font', id: 'not-a-font' },
];
const onSelect = (id) => { alert(id); };


<FontOptionsShowAll fontOptionsShowAll={fontOptionsShowAll} onSelect={onSelect}></FontOptionsShowAll>
```