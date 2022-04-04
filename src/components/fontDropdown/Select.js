import React from 'react';

import gfonts from '../../fonts/graphite-enabled-fonts.json';
import rfonts from '../../fonts/fonts.json';
import rwfonts from '../../fonts/web-fonts.json';
import gwfonts from '../../fonts/graphite-enabled-web-fonts.json';
import useDetectFonts from '../../hooks/useDetectFonts/useDetectFonts';
import useGraphite from '../../hooks/useGraphite/useGraphite';

import { isRtl } from './detectRTL';

// import GlobalFonts from '../../fonts/fonts';

import '../../fonts/WebFonts.css';
import '../../fonts/GraphiteEnabledWebFonts.css';

export default function SelectFont() {
  const [selectedFont, setSelectedFont] = React.useState('');
  const [selectedFontSize, setSelectedFontSize] = React.useState('1em');
  const [selectedLineHeight, setSelectedLineHeight ] = React.useState('normal');
  const [dir, setDir ] = React.useState('');

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
  const useGraphiteProps = { testClient: 'firefox', alwaysUse: false };

  const isGraphiteAssumed = useGraphite( useGraphiteProps );

  // Utilizing Graphite-enabled web fonts
  const gWebFonts = isGraphiteAssumed && gwfonts.map((i, k) => (
    <option key={k} value={i.id}>{i.name} {i.version}</option>
  ));

  // Detecting Graphite-enabled fonts
  let fonts = gfonts;
  const gdetectedFonts = isGraphiteAssumed && useDetectFonts({ fonts }).map((i, k) => (
    <option key={k} value={i.name}>{i.name}</option>
  ));

  const noneDetectedGMsg = 'none detected';

  // Utilizing web fonts
  const rWebFonts = rwfonts.map((i, k) => (
    <option key={k} value={i.name + ' ' + i.version}>{i.name} {i.version}</option>
  ));

  //Detecting fonts:
  fonts = rfonts;
  const detectedFonts = useDetectFonts({ fonts }).map((i, k) => (
    <option key={k} value={i.id}>{i.name}</option>
  ));

  const noneDetectedMsg = 'none detected';

  let example = '';

  return (
    <div >
              <label htmlFor="font"><b>Select Font:</b></label>
              <select
                name="font"
                id="font"
                defaultValue=""
                onChange={handleChange}
              >
                <option value="" disabled hidden>Select Font</option>
                {isGraphiteAssumed && <optgroup label="Graphite-Enabled Web Fonts:">
                  {gWebFonts}
                </optgroup>}
                {isGraphiteAssumed && <optgroup label="Graphite-Enabled (local):">
                  {gdetectedFonts.length === 0 && <option value="none" disabled>{noneDetectedGMsg}</option>}
                  {gdetectedFonts}
                </optgroup>}
                <optgroup label="Web Fonts:">
                  {rWebFonts}
                </optgroup>
                <optgroup label="Detected Fonts:">
                  {detectedFonts.length === 0 && <option value="none" disabled>{noneDetectedMsg}</option>}
                  {detectedFonts}
                </optgroup>
              </select>

              <label htmlFor="font-size"><b>Set Font Size:</b></label>
              <select
                name="font-size"
                id="font-size"
                value=""
                onChange={handleChangeSize}
              >            
                <option value="" disabled hidden>Set Font Size</option>
                <option key={1} value={'0.75em'}>75%</option>
                <option key={2} value={'1.25em'}>125%</option>
                <option key={3} value={'1.5em'}>150%</option>
                <option key={4} value={'1em'}>default</option>
              </select>

            <label htmlFor="line-height"><b>Set Line Height:</b></label>
            <select
              name="line-height"
              id="line-height"
              value=""
              onChange={handleChangeLineHeight}
            >
              <option value="" disabled hidden>Set Line Height</option>
              <option key={1} value={'150%'}>150%</option>
              <option key={2} value={'200%'}>200%</option>
              <option key={3} value={'250%'}>250%</option>
              <option key={4} value={'normal'}>default</option>
            </select>

          <textarea
            rows="6"
            name="example"
            onChange={(event) => {
              example = event.target.value
              if (isRtl(example)) setDir('rtl');
              if (!isRtl(example)) setDir('ltr');
            }}
            style= {{ fontFamily: selectedFont, fontSize: selectedFontSize, lineHeight: selectedLineHeight, width: '100%', direction: dir, }}
            defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            >
          </textarea>

    </div >
  )
}
