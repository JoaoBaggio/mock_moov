import { Box, Typography } from "@mui/material";

export default function Commit() {
    return (
        <Box style={{
            display: 'flex',
            flexDirection: 'column',
        }}>

            <Typography variant="h2" style={{
                marginBottom: '20px',
                fontSize: '36px',
                fontWeight: '600',
                alignSelf: 'center',
            }}>
                How we commit
            </Typography>
            <Box style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Typography variant="body3" style={{
                    marginBottom: '20px',

                }}>
                    From the outset of our operations, we've been <b>passionate about promoting ESG (Environmental, Social, Governance) themes</b>, recognizing the importance of acting responsibly and sustainably.
                </Typography>

                <Typography variant="body3" style={{
                    marginBottom: '20px',

                }}>
                    We're not mere observers; <b>we're actively engaged</b> in shaping a greener, fairer, and more accountable world.
                </Typography>
                <Typography variant="body3" style={{
                    marginBottom: '20px',

                }}>
                    Starting with the <b>environment</b>: our <b>pay-per-use model and promotion of 'green' vehicles</b> like electric and hybrids contribute to lowering CO2 emissions. Moreover, our Flee mobility platform further reduces emissions by facilitating diverse transportation combinations.
                </Typography>
                <Typography variant="body3" style={{
                    marginBottom: '20px',

                }}>
                    On the social front, we <b>enhance urban living through the Flee initiative</b>, aiming to provide more flexible and sustainable mobility. We offer our employees training and flexibility, including comprehensive insurance coverage. Additionally, we collaborate with and <b>support the Heal Foundation</b> through its social initiatives.
                </Typography>
                <Typography variant="body3" style={{
                    marginBottom: '20px',

                }}>
                    And then there's <b>governance</b>. We're in the process of formulating an ethical code and training programs to prevent corruption. <b>We make collective decisions with a participative, merit-based approach</b>, steering clear of gender discrimination and wage disparities.
                </Typography>
                <Typography variant="body3" style={{
                    marginBottom: '20px',
                    fontWeight: '700',
                }}>
                    We believe in the power of collective efforts for a sustainable future.
                </Typography>
            </Box>

        </Box>
    );
}
