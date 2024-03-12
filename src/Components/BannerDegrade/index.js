import { Box, Typography } from "@mui/material";

export default function BannerDegrade(props) {
    const { title, subtitle } = props;
    return (
        <Box style={{
            paddingTop: '75px',
            paddingBottom: '75px',
            background: 'linear-gradient(to right, #0054ff, #00e0ff)',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            

        }}>

        <Typography variant="body2" style={{
            marginBottom: '20px',
        }}>
            {title}
        </Typography>
        <Typography variant="h2">
            {subtitle}
        </Typography>
        </Box>
    );
}
