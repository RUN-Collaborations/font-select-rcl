<!-- # useAssumeGraphite -->
[Graphite](https://scripts.sil.org/cms/scripts/page.php?site_id=projects&item_id=graphite_about) is a rendering engine for complex scripts that supports “smart fonts” capable of advanced behaviors, including combination and positioning of letters in complex ways. [Electronite](https://www.npmjs.com/package/electronite) is a framework that caters to building and [packaging](https://www.npmjs.com/package/electronite-packager) applications implementing [Graphite](https://scripts.sil.org/cms/scripts/page.php?site_id=projects&item_id=graphite_about), and *Firefox<sup id="a1">[[1]](#f1)</sup>* is an example of an application in which Graphite is implemented.

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
