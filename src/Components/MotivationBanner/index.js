import { Box, Typography } from "@mui/material";
import MotivationCards from "../MotivationCards";

export default function MotivationBanner() {
    return (
        <Box style={{
            paddingTop: '75px',
            marginTop: '75px',
            paddingBottom: '75px',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        }}>
            <Typography variant="h1" style={{
                marginBottom: '20px',
            }}>
                We analyze needs to shape our vision for the future.
            </Typography>
            <Typography variant="h1" style={{
                marginBottom: '20px',
            }}>
                That&apos;s why we want to make mobility:
            </Typography>

            <Box style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <MotivationCards number='01' title='Easy' subtitle='Moving is an easy thing' body='thanks to the use of innovative technologies, integrated digital platforms, and the creation of intuitive user experiences.' />
                <MotivationCards number='02' title='Reliable' subtitle='Reliability goes hand in hand with solidity' body='our operational model and the technology we employ, based on agile methodologies and trial & error, are robust and of high quality.' />
                <MotivationCards number='03' title='Sustainable' subtitle='Sustainability is our balance' body='we create a balance between environmental, social, and economic aspects.' />
            </Box>
        </Box>
    );
}
