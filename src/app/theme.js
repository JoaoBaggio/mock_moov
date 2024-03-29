// Note: This file is used to create a custom theme for the Material-UI components. 
'use client';
import { Poppins } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const poppins = Poppins({ 
    weight: ['300', '400', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
        },
        secondary: {
            main: '#0054FF',
        },
        dark: {
            main: '#0c0c0c',
            light: '#60697b',
        },
        link:{
            main: '#17afe7'
        }


    },
    typography: {
        fontFamily: poppins.style.fontFamily,
        h1: {
            fontSize: '35px',
            fontWeight: 600,
            
        },
        h2: {
            fontSize: '40px',
            fontWeight: 700,
            marginBottom: '10px',
        },
        h3: {
            fontSize: '19px',
            fontWeight: 700,
            marginBottom: '10px',
        },
        body1: {
            fontSize: '15px',
            fontWeight: 400,
        },
        body2: {
            fontSize: '20px',
            fontWeight: 400,
        },
        body3: {
            fontSize: '18px',
            fontWeight: 400,
            lineWeight: 1.6,
            
        },
    },

});

export default theme;
