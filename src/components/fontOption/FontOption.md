<!-- # FontOption -->
This clickable example always display the font (without detecting whether or not it is locally installed), with a style injected:
```jsx
import { FontOption } from 'font-detect-rhl';

function Component(){
    const onSelect = (id) => { alert(id); };
    const style = { border: 'solid 1px red'};

    const font = { name: 'Arial', id: 'arial' };

    return (<FontOption font={font} onSelect={onSelect} style={style}></FontOption>);
};

<Component />
```