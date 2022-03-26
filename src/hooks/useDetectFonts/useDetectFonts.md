<!-- # useDetectFonts -->

This returns an array of detected fonts with a detected boolean attribute.
```jsx
import { useState, useEffect } from 'react';
import { useDetectFonts } from 'font-select-rcl';

function Component(){

  const fonts = [
    { name: 'Arial', id: 'arial' },
    { name: 'Times New Roman', id: 'times-new-roman' },
    { name: 'Not A Font', id: 'not-a-font' },
  ];

  const detectedFonts = useDetectFonts({ fonts }).map((i, k) => (
    <div key={k}>{i.name} detected: {i.detected.toString()}</div>
  ));

  const noneDetectedMsg = 'none detected';

  const [areFontsDetected, setAreFontsDetected] = useState(true);
    useEffect(() => {
      if (detectedFonts.length === 0) setAreFontsDetected(false);
  }, [detectedFonts]);

  return (
      <React.Fragment>
        {areFontsDetected ? detectedFonts : noneDetectedMsg}
      </React.Fragment>
  );
};

<Component />
```
This returns an array of detected fonts from a json file with a detected boolean attribute.
```jsx
import { useState, useEffect } from 'react';
import { useDetectFonts } from 'font-select-rcl';

import fonts from '../../fonts/fonts.json';

function Component(){

  const detectedFonts = useDetectFonts({ fonts }).map((i, k) => (
    <div key={k}>{i.name} detected: {i.detected.toString()}</div>
  ));

  const noneDetectedMsg = 'none detected';

  const [areFontsDetected, setAreFontsDetected] = useState(true);
    useEffect(() => {
      if (detectedFonts.length === 0) setAreFontsDetected(false);
  }, [detectedFonts]);

  return (
      <React.Fragment>
        {areFontsDetected && detectedFonts}{!areFontsDetected && noneDetectedMsg}
      </React.Fragment>
  );
};

<Component />
```
When useGraphite is true, this returns an array of detected Graphite-enabled fonts from a json file with a detected boolean attribute.
```jsx
import { useState, useEffect } from 'react';
import useGraphite from '../../hooks/useGraphite/useGraphite';
import { useDetectFonts } from 'font-select-rcl';

import fonts from '../../fonts/graphite-enabled-fonts.json';

function Component(){

  const useGraphiteProps = { testClient: 'firefox', alwaysUse: false };

  const isGraphiteAssumed = useGraphite( useGraphiteProps );

  const detectedFonts = isGraphiteAssumed && useDetectFonts({ fonts }).map((i, k) => (
    <div key={k}>{i.name} detected: {i.detected.toString()}</div>
  ));

  const noneDetectedMsg = 'none detected';

  const [areFontsDetected, setAreFontsDetected] = useState(true);
    useEffect(() => {
      if (detectedFonts.length === 0) setAreFontsDetected(false);
  }, [detectedFonts]);

  return (
      <React.Fragment>
        {!isGraphiteAssumed && `useGraphite: ${isGraphiteAssumed.toString()}`}{areFontsDetected && detectedFonts}{!areFontsDetected && noneDetectedMsg}
      </React.Fragment>
  );
};

<Component />
```