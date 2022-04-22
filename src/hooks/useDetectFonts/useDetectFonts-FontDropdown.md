<!-- # useDetectFonts -->
* This applies **useDetectFonts** to **useFonts** and returns detected fonts in a dropdown list.
* It also utilizes **useAssumeGraphite** to determine whether or not to also apply **useDetectFonts** to **useGraphiteEnabledFonts**.
* Font size and line height controls are also included in this example.
* And text can be typed or pasted into the text area, with RTL and LTR text autodetected by **useDetectDir**.
```jsx
import React, { useState, useEffect, useMemo } from 'react';

import { useDetectFonts, useAssumeGraphite, useDetectDir, useFonts, useGraphiteEnabledFonts } from 'font-detect-rhl';

const graphiteEnabledFontsArray = useGraphiteEnabledFonts;
const fontsArray = useFonts;

const EXAMPLE =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac tortor. Diam maecenas ultricies mi eget mauris pharetra et. Velit scelerisque in dictum non consectetur a. Pharetra massa massa ultricies mi quis hendrerit. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Tristique sollicitudin nibh sit amet commodo. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Turpis tincidunt id aliquet risus feugiat in ante metus dictum.";

function Component(){

  const [selectedFont, setSelectedFont] = useState('monospace');
  const [selectedFontSize, setSelectedFontSize] = useState('1em');
  const [selectedLineHeight, setSelectedLineHeight] = useState('normal');
  const [example, setExample] = useState(EXAMPLE);

  const dir = useDetectDir({ text: example });

  const notdir = useMemo(() => {
    const _notdir = (dir === 'ltr') ? 'rtl' : 'ltr';
    return _notdir
  }, [dir]);

  const handleChange = (event) => {
    setSelectedFont(event.target.value);
  };

  const handleChangeSize = (event) => {
    setSelectedFontSize(event.target.value);
  };
  
  const handleChangeLineHeight = (event) => {
    setSelectedLineHeight(event.target.value);
  };

  // Should Graphite-enabled fonts be detected?
  const useAssumeGraphiteProps = { testClient: 'firefox', alwaysUse: false };

  const isGraphiteAssumed = useAssumeGraphite( useAssumeGraphiteProps );

  // Detecting Graphite-enabled fonts
  let fonts = graphiteEnabledFontsArray;
  const detectedGFontsToMap = useDetectFonts({ fonts });

  const gdetectedFonts = isGraphiteAssumed && detectedGFontsToMap.map((i, k) => (
    <option key={k} value={i.name}>{i.name}</option>
  ));

  const noneDetectedGMsg = 'none detected';

  //Detecting fonts:
  fonts = fontsArray;
  const detectedFontsToMap = useDetectFonts({ fonts });

  const detectedFonts = detectedFontsToMap.map((i, k) => (
    <option key={k} value={i.name}>{i.name}</option>
  ));

  const noneDetectedMsg = 'none detected';

  return (
    <div >
              <label htmlFor="font"><b>Select Font:</b></label>
              <select
                name="font"
                id="font"
                defaultValue={selectedFont}
                onChange={handleChange}
              >
                <option value="" disabled hidden>Select Font</option>
                <option value="monospace">default</option>
                {isGraphiteAssumed && <optgroup label="Graphite-Enabled Fonts:">
                  {gdetectedFonts.length === 0 && <option value="none" disabled>{noneDetectedGMsg}</option>}
                  {gdetectedFonts}
                </optgroup>}
                <optgroup label="Detected Fonts:">
                  {detectedFonts.length === 0 && <option value="none" disabled>{noneDetectedMsg}</option>}
                  {detectedFonts}
                </optgroup>
              </select>

              &nbsp;| <label htmlFor="font-size"><b>Set Font Size:</b></label>
              <select
                name="font-size"
                id="font-size"
                value={selectedFontSize}
                onChange={handleChangeSize}
              >            
                <option value="" disabled hidden>Set Font Size</option>
                <option key={1} value={'0.75em'}>75%</option>
                <option key={2} value={'1.25em'}>125%</option>
                <option key={3} value={'1.5em'}>150%</option>
                <option key={4} value={'1em'}>default</option>
              </select>

            &nbsp;| <label htmlFor="line-height"><b>Set Line Height:</b></label>
            <select
              name="line-height"
              id="line-height"
              value={selectedLineHeight}
              onChange={handleChangeLineHeight}
            >
              <option value="" disabled hidden>Set Line Height</option>
              <option key={1} value={'150%'}>150%</option>
              <option key={2} value={'200%'}>200%</option>
              <option key={3} value={'250%'}>250%</option>
              <option key={4} value={'normal'}>default</option>
            </select>

            <br />
            <br />
            Direction: <b>{dir}</b><br />
            <em>(Enter <b>{notdir}</b> text, then click out of the editable text area to see a direction change applied.</em>)<br />
            <br />

          <textarea
            rows="5"
            name="example"
            onBlur={(event) => {
              const _example = event.target.value;
              setExample(_example);
            }}
            style= {{ fontFamily: selectedFont, fontSize: selectedFontSize, lineHeight: selectedLineHeight, width: '100%', direction: dir, }}
            defaultValue={example}
            >
          </textarea>

    </div >
  );
};

<Component />
```
