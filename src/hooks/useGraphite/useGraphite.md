<!-- # useDetectGraphite -->
A single boolean is returned by useGraphite.
```jsx
import { useGraphite } from 'font-select-rcl';

function Component(){

    const useGraphiteProps = { testClient: 'firefox', alwaysUse: false };

    isGraphiteAssumed = useGraphite( useGraphiteProps );

    return (<div>Detect for Graphite-enabled fonts: {isGraphiteAssumed.toString()}</div>);
};

<Component />
```