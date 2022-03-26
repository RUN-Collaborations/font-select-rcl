import React, {useState, useEffect} from 'react';
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

import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';

import './WebFonts.css';
import './GraphiteEnabledWebFonts.css';

export default function SelectFont() {
  const [selectedFont, setSelectedFont] = React.useState('');
  const [selectedFontSize, setSelectedFontSize] = React.useState('');
  const [selectedLineHeight, setSelectedLineHeight ] = React.useState('');

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

  const [areGFontsDetected, setAreGFontsDetected] = useState(true);
    useEffect(() => {
      if (gdetectedFonts.length === 0) setAreGFontsDetected(false);
  }, [gdetectedFonts]);

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

  const [areFontsDetected, setAreFontsDetected] = useState(true);
    useEffect(() => {
      if (detectedFonts.length === 0) setAreFontsDetected(false);
  }, [detectedFonts]);

  return (
    <div >
      <Grid container spacing={2}   >
        <Grid item xs={4} style={{ padding: '20px' }}>
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
                <b>{isGraphiteAssumed && "Graphite-Enabled (local):" }{!areGFontsDetected && isGraphiteAssumed && noneDetectedGMsg}</b>
                {gdetectedFonts}
                <hr />
                <b>Web Fonts:</b>
                {rWebFonts}
                <hr />
                <b>Detected Fonts: {!areFontsDetected && noneDetectedMsg}</b>
                {detectedFonts}
              </Select>
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={3} style={{ padding: '20px' }}>
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
                <MenuItem key={1} value={10}>20</MenuItem>
                <MenuItem key={2} value={30}>50</MenuItem>
                <MenuItem key={3} value={50}>100</MenuItem>
                <MenuItem key={4} value={16}>default</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={2} style={{ padding: '20px' }}>
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
              <MenuItem key={1} value={1.7}>1.7</MenuItem>
              <MenuItem key={2} value={2.14}>2.14</MenuItem>
              <MenuItem key={3} value={2.7}>2.7</MenuItem>
              <MenuItem key={4} value={1}>default</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>

        <Grid item xs={10} >
          <Paper variant="outlined" square style={{ padding: '15px' }}>
            <p style={{ fontFamily: selectedFont, fontSize: selectedFontSize, lineHeight: selectedLineHeight }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Paper>

        </Grid>



      </Grid>


    </div >
  )
}
