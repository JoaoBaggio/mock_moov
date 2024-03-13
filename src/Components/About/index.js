import { Box, Typography } from "@mui/material";
import AboutCards from "../AboutCards";

export default function About() {
    return (
        <Box style={{
            paddingTop: '75px',
            paddingBottom: '75px',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
        }}>

            <Typography variant="h1" style={{
                marginBottom: '20px',
            }}>
                MOOV Group
            </Typography>


            <Box style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <AboutCards title='Moov-Tech'>
                    <Typography variant="body3">
                        Moov-Tech is our <b>innovative start-up</b> and <b>it leads the Group</b>.
                    </Typography>
                    <Typography variant="body3">
                        We blend <b>technology</b>, commitment to <b>user experience</b> and <b>protection</b>. We envision a future of mobility where everyone journeys safely, sustainably, and affordably.
                    </Typography>
                    <Typography variant="body3">
                        <b>Moov-Tech owns the Flee brand.</b>
                    </Typography>
                </AboutCards>

                <AboutCards title='Moov-Drive'>
                    <Typography variant="body3">
                        <b>Moov-Drive</b> is our group's operational company, the beating heart that <b>delivers mobility services.</b>
                    </Typography>
                    <Typography variant="body3">
                        We have a dedicated and skilled team working closely with Moov-Tech and Moov-Insurance to provide <b>innovative and reliable solutions, addressing people's mobility needs.</b> Every day, we strive to offer a premium service to our end customers
                    </Typography>
                </AboutCards>

                <AboutCards title='Moov-Insurance'>
                    <Typography variant="body3">
                        <b>Moov-Insurance</b> is our company specialized in <b>insurance solutions for mobility.</b>
                    </Typography>
                    <Typography variant="body3">
                        Through our partners, the Moov-Insurance team collaborates closely with Moov-Tech and Moov-Drive to craft <b>insurance products tailored for mobility</b>, ensuring our clients are always protected with utmost flexibility.                          </Typography>

                </AboutCards>

            </Box>
        </Box>
    );
}
