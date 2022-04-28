<!-- # useDetectRTL -->
**useDetectDir** returns 'rtl' or 'ltr'. Code utilized in this hook originated from [Christopher Klapp](https://github.com/klappy)'s [detectRTL.js](https://github.com/unfoldingWord-box3/simple-text-editor-rcl/blob/9e34aa5618cf1b06409b2c169ba5bd86229e6d45/src/helpers/detectRTL.js).
```jsx
import { useDetectDir } from 'font-detect-rhl';

function Component(){

    const useDetectDirProps = { text: 'TEST', ratioThreshold: 0.3 };

    dir = useDetectDir( useDetectDirProps );

    return (<div>{dir}</div>);
};

<Component />
```