import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import WebFont from 'webfontloader';

export default function PaperField() {

    onclick = () => {
        console.log("kkkkkkkkkkkkk")
        WebFont.load({
          google: {
            families: ['beirut']
          }
        });
       };


    return (
       <div>Hellooo</div>
    );
}
