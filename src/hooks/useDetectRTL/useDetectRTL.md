<!-- # useDetectRTL -->
A single boolean is returned by useDetectRTL.
```jsx
import { useDetectRTL } from 'font-detect-rhl';

function Component(){

    const useDetectRTLProps = { text: 'TEST', ratioThreshold: 0.3 };

    isRTL = useDetectRTL( useDetectRTLProps );

    return (<div>RTL detected: {isRTL.toString()}</div>);
};

<Component />
```