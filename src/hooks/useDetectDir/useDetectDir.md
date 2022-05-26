<!-- # useDetectRTL -->
**useDetectDir** examines the range of unicode values of characters in the text, returning 'rtl' for right-to-left or 'ltr' for left-to-right. Code utilized in this hook originated from [detectRTL.js](https://github.com/unfoldingWord-box3/simple-text-editor-rcl/blob/9e34aa5618cf1b06409b2c169ba5bd86229e6d45/src/helpers/detectRTL.js), developed by [Christopher Klapp](https://github.com/klappy).
```jsx
import { useDetectDir } from 'font-detect-rhl';

function Component(){

    const useDetectDirProps = { text: 'TEST', ratioThreshold: 0.3 };

    dir = useDetectDir( useDetectDirProps );

    return (<div>Direction: <b>{dir}</b></div>);
};

<Component />
```