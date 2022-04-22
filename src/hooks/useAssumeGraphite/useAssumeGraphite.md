<!-- # useDetectGraphite -->
A single boolean is returned by **useAssumeGraphite**.
```jsx
import { useAssumeGraphite } from 'font-detect-rhl';

function Component(){

    const useAssumeGraphiteProps = { testClient: 'firefox', alwaysUse: false };

    isGraphiteAssumed = useAssumeGraphite( useAssumeGraphiteProps );

    return (<div>Detect for Graphite-enabled fonts: {isGraphiteAssumed.toString()}</div>);
};

<Component />
```