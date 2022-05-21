<!-- # useDetectFonts -->
* Applies **useDetectFonts** to **fontList** and returns detected fonts in a dropdown list.
* Utilizes **useAssumeGraphite** to determine whether or not to also apply **useDetectFonts** to **graphiteEnabledFontList**.
* Shows font size and line height controls.
* Text can be typed or pasted into the text area, with RTL and LTR text autodetected by **useDetectDir**.

<sup>*(See also [Simple USFM Editor App](https://simple-usfm-editor-app.netlify.app/) / [source code](https://github.com/klappy/simple-usfm-editor-app/blob/main/src/components/font-configuration/).)*</sup>
```jsx
import React, { useState, useEffect, useMemo } from 'react';

import {
  useDetectFonts,
  useAssumeGraphite,
  useDetectDir,
  fontList as fontsArray,
  graphiteEnabledFontList as graphiteEnabledFontsArray
} from 'font-detect-rhl';

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
  const detectedGEFonts = useDetectFonts({ fonts: (isGraphiteAssumed ? graphiteEnabledFontsArray : []) });

  const detectedGEFontsComponents = isGraphiteAssumed && detectedGEFonts.map((font, index) => (
    <option key={index} value={font.name} style={{ fontFamily: font.name }}>{font.name}</option>
  ));

  // Heading for Graphite-enabled fonts
  const headingGraphiteEnableFonts = isGraphiteAssumed ? <optgroup label="Graphite-Enabled Fonts:" /> : "";

  // Response when no Graphite-enabled fonts are installed
  const noneDetectedGEMsg = 'none detected';
  const ifNoGEFonts = isGraphiteAssumed ? (detectedGEFontsComponents.length === 0 && <option value="none" disabled>{noneDetectedGEMsg}</option>) : "";

  //Detecting regular fonts:
  const detectedFonts = useDetectFonts({ fonts: fontsArray });

  const detectedFontsComponents = detectedFonts.map((font, index) => (
    <option key={index} value={font.name} style={{ fontFamily: font.name }}>{font.name}</option>
  ));

  // Response when no regular fonts are installed
  const noneDetectedMsg = 'none detected';
  const ifNoFonts = detectedFontsComponents.length === 0 ? <option value="none" disabled>{noneDetectedMsg}</option> : "";
  

  return (
    <div >
      <p align="left" style={{ marginTop: "0px" }}>
        <em>Change dropdowns to see selected settings applied to the editable
        text area.</em>
      </p>
      <div style={{ display: "table-cell" }}>
        <label htmlFor="font"><b>Select Font:</b></label>
        <select
          name="font"
          id="font"
          defaultValue={selectedFont}
          onChange={handleChange}
        >
          <option value="" disabled hidden>Select Font</option>
          <option value="monospace">default</option>
          {headingGraphiteEnableFonts}
            {ifNoGEFonts}
            {isGraphiteAssumed && detectedGEFontsComponents}
          <optgroup label="Detected Fonts:" />
            {ifNoFonts}
            {detectedFontsComponents}
        </select>
      </div>
      <div style={{ display: "table-cell" }}>
        &nbsp;<label htmlFor="font-size"><b>Set Font Size:</b></label>
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
      </div>
      <div style={{ display: "table-cell" }}>
        &nbsp;<label htmlFor="line-height"><b>Set Line Height:</b></label>
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
      </div>
      <p
        align="left"
        style={{ marginBottom: "0px" }}
      >
        Direction: <b>{dir}</b>
        <br />
        <em>
          &nbsp;Enter <b>{notdir}</b> text, then click out of the editable text
          area to see a direction change applied:
        </em>
      </p>

      <textarea
        rows="5"
        name="example"
        onBlur={(event) => {
          const _example = event.target.value;
          setExample(_example);
        }}
        style= {{ fontFamily: selectedFont, fontSize: selectedFontSize, lineHeight: selectedLineHeight, width: '100%', borderColor: "blue", direction: dir, }}
        defaultValue={example}
        >
      </textarea>

      <p></p>
      <hr />
      <div
        style={{
          display: "flex",
          color: "grey"
        }}
      >
        <div
          style={{
            width: "50%",
            float: "left",
            textAlign: "right"
          }}
        >
          <p style={{ fontSize: "0.9em", margin: "0px" }}>
            <b>Sample RTL Text:</b>
            <br />
            (for copy-paste)
          </p>
        </div>
        <div
          style={{
            width: "50%",
            direction: "RTL",
            border: "1px solid #969696",
            float: "right",
            textAlign: "right"
          }}
        >
          فِي ٱلْبَدْءِ كَانَ ٱلْكَلِمَةُ، وَٱلْكَلِمَةُ كَانَ عِنْدَ ٱللهِ،
          وَكَانَ ٱلْكَلِمَةُ ٱللهَ. هَذَا كَانَ فِي ٱلْبَدْءِ عِنْدَ ٱللهِ.
          كُلُّ شَيْءٍ بِهِ كَانَ، وَبِغَيْرِهِ لَمْ يَكُنْ شَيْءٌ مِمَّا كَانَ.
          فِيهِ كَانَتِ ٱلْحَيَاةُ، وَٱلْحَيَاةُ كَانَتْ نُورَ ٱلنَّاسِ،
          وَٱلنُّورُ يُضِيءُ فِي ٱلظُّلْمَةِ، وَٱلظُّلْمَةُ لَمْ تُدْرِكْهُ.
        </div>
      </div>
      
    </div >
  );
};

<Component />
```
