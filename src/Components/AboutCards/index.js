import { Box, Typography } from "@mui/material";
import React from "react";

export default function AboutCards(props) {
    const { title, children } = props;
    return (
        <Box style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            margin: '20px 0',
            padding: '20px',
            textAlign: 'left',
            width: '320px',
            /** shadow around */
            boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
        }}        >

            <Typography style={{
                marginTop: '10px',
                marginBottom: '30px',
                fontSize: '36px',
                fontWeight: '600',
                backgroundImage: `linear-gradient(45deg, #0054FF, #00e0ff)`,
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
            }}>
                {title}
            </Typography>

            {
                React.Children.map(children, child => {
                    return React.cloneElement(child, { style: { marginBottom: '30px' } });
                })
            }

        </Box>
    );
}
