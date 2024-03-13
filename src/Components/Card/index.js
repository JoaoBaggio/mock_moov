import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Card(props) {
    const { logo, alt = 'anything', title, children, style } = props;
    return (
        <Box style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'white',
            paddingBottom: '40px',
            paddingRight: '40px',
            marginBottom: '40px',
            textAlign: 'left',
            /** shadow around */
            boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
            ...style
        }}        >
            <Image src={logo} alt={alt} width={75} height={75} style={{
                margin: '20px',
            }} />

            <Box style={{
                display: 'flex',
                flexDirection: 'column',
            }}>

                <Typography style={{
                    marginTop: '10px',
                    marginBottom: '30px',
                    fontSize: '19px',
                    fontWeight: '600',
                    lineHeight: '1.7',

                }}
                    color='dark.main'
                >
                    {title}
                </Typography>

                {
                    React.Children.map(children, child => {
                        return React.cloneElement(child, { style: { marginBottom: '30px' } });
                    })
                }
            </Box>
        </Box>
    );
}
