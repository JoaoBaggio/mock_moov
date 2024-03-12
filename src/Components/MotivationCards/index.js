import { Box, Typography } from "@mui/material";

export default function MotivationCards(props) {
    const { number, title, subtitle, body } = props;
    return (
        <Box style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'white',
            margin: '20px',
            padding: '10px',
            paddingBottom: '40px',
            width: '33%',
            /** shadow around */
            boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
        }}

        >
            <Box style={{

                fontSize: '50px',
                fontWeight: '600',
                color: 'royalblue',
                marginRight: '20px',
            }}>
                {number}
            </Box>
            <Box style={{
                // padding: '20px',
                textAlign: 'left',

            }}>
                <Typography variant="body2" style={{
                    marginTop: '10px',
                    marginBottom: '20px',
                    fontSize: '20px',
                    fontWeight: '600',
                    marginBottom: '10px',
                }}>
                    {title}
                </Typography>
                <Typography style={{
                    fontSize: '17px',
                }}>
                    <b>{subtitle}:</b> {body}
                </Typography>

            </Box>
        </Box>
    );
}
