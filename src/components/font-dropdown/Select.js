import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import data from '../../fonts/fonts.json'

import Paper from '@mui/material/Paper';
import WebFont from 'webfontloader';
import { Grid } from '@mui/material';



export default function SelectFont() {
  const [selectedFont, setSelectedFont] = React.useState('');
  const [selectedFontSize, setSelectedFontSize] = React.useState('');


  const handleChange = (event) => {
    // console.log(event.target.value)
    setSelectedFont(event.target.value);
  };


  const handleChangeSize = (event) => {
    console.log(event.target.value)
    setSelectedFontSize(event.target.value);
  };


  var fontData = data.data
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
                {fontData.map((i, k) => (
                  <MenuItem key={k} value={i.id}>{i.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={2} style={{ padding: '20px' }}>
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
        


        <Grid item xs={10} >
          <Paper variant="outlined" square style={{ padding: '15px' }}>
            <p style={{ fontFamily: selectedFont, fontSize: selectedFontSize }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Paper>

        </Grid>



      </Grid>


    </div >
  )
}
