// Note: This file is used to create a custom theme for the Material-UI components. 
'use client';
import { Roboto } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});


const poppins = Poppins({ 
    weight: ['300', '400', '500', '700'],
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
            main: '#0c0c0c'
        },
        link:{
            main: '#17afe7'
        }


    },
    typography: {
        fontFamily: poppins.style.fontFamily,
        h3: {
            fontSize: '19px',
            fontWeight: 700,
            marginBottom: '10px',
        },
        body1: {
            fontSize: '15px',
            fontWeight: 400,
        },
    },
});

export default theme;
