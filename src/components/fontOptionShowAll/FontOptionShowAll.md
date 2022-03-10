<!-- # FontOptionShowAll -->

```jsx
const onSelect = (id) => { alert(id); }
const style = { border: 'solid 1px red'};

const fontOptionShowAll = { name: 'Not A Font', id: 'not-a-font' };

<FontOptionShowAll {...fontOptionShowAll} onSelect={onSelect} style={style}></FontOptionShowAll>;
```