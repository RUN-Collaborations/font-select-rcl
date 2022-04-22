<!-- # useDetectRTL -->
**useDetectDir** returns 'rtl' or 'ltr'.
```jsx
import { useDetectDir } from 'font-detect-rhl';

function Component(){

    const useDetectDirProps = { text: 'TEST', ratioThreshold: 0.3 };

    dir = useDetectDir( useDetectDirProps );

    return (<div>{dir}</div>);
};

<Component />
```