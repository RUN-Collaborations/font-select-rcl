import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import gfonts from '../../fonts/graphite-enabled-fonts.json';
import rfonts from '../../fonts/fonts.json';
import rwfonts from '../../fonts/web-fonts.json';
import gwfonts from '../../fonts/graphite-enabled-web-fonts.json';
import useDetectFonts from '../../hooks/useDetectFonts/useDetectFonts';
import useGraphite from '../../hooks/useGraphite/useGraphite';

import { Grid, TextareaAutosize } from '@mui/material';

import { isRtl } from './detectRTL';

// import GlobalFonts from '../../fonts/fonts';

import '../../fonts/WebFonts.css';
import '../../fonts/GraphiteEnabledWebFonts.css';

export default function SelectFontMUI() {
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
    <MenuItem key={k} value={i.id}>{i.name} {i.version}</MenuItem>
  ));

  // Detecting Graphite-enabled fonts
  let fonts = gfonts;
  const gdetectedFonts = isGraphiteAssumed && useDetectFonts({ fonts }).map((i, k) => (
    <MenuItem key={k} value={i.name}>{i.name}</MenuItem>
  ));

  const noneDetectedGMsg = 'none detected';

  // Utilizing web fonts
  const rWebFonts = rwfonts.map((i, k) => (
    <MenuItem key={k} value={i.name + ' ' + i.version}>{i.name} {i.version}</MenuItem>
  ));

  //Detecting fonts:
  fonts = rfonts;
  const detectedFonts = useDetectFonts({ fonts }).map((i, k) => (
    <MenuItem key={k} value={i.id}>{i.name}</MenuItem>
  ));

  const noneDetectedMsg = 'none detected';

  let example = '';

  return (
    <div >
      <Grid container spacing={2}   >
        <Grid item xs={4} style={{ padding: '1.25em' }}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Font</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedFont}
                label="Font"
                onChange={handleChange}
              >
                {isGraphiteAssumed && <hr />}
                <b>{isGraphiteAssumed && "Graphite-Enabled Web Fonts:"}</b>
                {gWebFonts}
                {isGraphiteAssumed && <hr />}
                <b>{isGraphiteAssumed && "Graphite-Enabled (local):" }{gdetectedFonts.length === 0 && isGraphiteAssumed && noneDetectedGMsg}</b>
                {gdetectedFonts}
                <hr />
                <b>Web Fonts:</b>
                {rWebFonts}
                <hr />
                <b>Detected Fonts: {detectedFonts.length === 0 && noneDetectedMsg}</b>
                {detectedFonts}
              </Select>
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={3} style={{ padding: '1.25em' }}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">FontSize</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedFontSize}
                label="FontSize"
                onChange={handleChangeSize}
              >            
                <MenuItem key={1} value={'0.75em'}>75%</MenuItem>
                <MenuItem key={2} value={'1.25em'}>125%</MenuItem>
                <MenuItem key={3} value={'1.5em'}>150%</MenuItem>
                <MenuItem key={4} value={'1em'}>default</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={2} style={{ padding: '1.25em' }}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">LineHeight</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedLineHeight}
              label="LineHeight"
              onChange={handleChangeLineHeight}
            >            
              <MenuItem key={1} value={'150%'}>150%</MenuItem>
              <MenuItem key={2} value={'200%'}>200%</MenuItem>
              <MenuItem key={3} value={'250%'}>250%</MenuItem>
              <MenuItem key={4} value={'normal'}>default</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>

        <Grid item xs={10}>
          <TextareaAutosize
            id="example"
            onChange={(event) => {
              example = event.target.value
              if (isRtl(example)) setDir('rtl');
              if (!isRtl(example)) setDir('ltr');
            }}
            style= {{ fontFamily: selectedFont, fontSize: selectedFontSize, lineHeight: selectedLineHeight, width: '100%', direction: dir, }}
            defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />

        </Grid>



      </Grid>


    </div >
  )
}
