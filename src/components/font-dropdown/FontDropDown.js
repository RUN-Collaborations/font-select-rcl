import React from 'react';
import SelectFont from './Select'
import PaperField from './Paper'
import { Grid } from '@mui/material';
// import PropTypes from 'prop-types';







export default function FontDropDown() {
    return (
        // <Grid container spacing={2} justifyContent="center">
            // <Grid item xs={4}>
            <div>
                <SelectFont />

            </div>
            // </Grid>
        
            // <Grid item xs={6}>
            // </Grid>
            // <Grid item xs={10} >
            //     <PaperField />

            // </Grid>
            // <Grid item xs={8}>
            // </Grid>
    );
};

// FontOption.propTypes = {
//   /** name of font to display */
//   name: PropTypes.string.isRequired,
//   /** id of font */
//   id: PropTypes.string.isRequired,
//   /** callback for selection */
//   onSelect: PropTypes.func.isRequired,
// };

// FontOption.propDefaults = {
// };