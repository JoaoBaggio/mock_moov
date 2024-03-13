import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function HowBanner() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: {
                xs: 'column',
                md: 'row',
            
            }
        }}>
            <Box>
                <Typography variant="h2" sx={{
                    marginBottom: '20px',
                    fontSize: '36px',
                    fontWeight: '600',
                }}>
                    How we do it
                </Typography>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: '20px',
                }}>

                    <CheckCircleIcon sx={{
                        color: '#0054ff',
                        marginRight: '10px',
                    }} />
                    <Typography variant="body3" >
                        we <b>use technology</b>     to enable and enhance all phases of the  <b>mobility services process (E2E)</b>, including the insurance aspect;
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: '20px',
                }}>                <CheckCircleIcon sx={{
                    color: '#0054ff',
                    marginRight: '10px',
                }} />
                    <Typography variant="body3" >
                        we create pricing models to incentivize virtuous behaviors, such as optimizing consumption, sustainable and safe driving;
                    </Typography></Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: '20px',
                }}>

                    <CheckCircleIcon sx={{
                        color: '#0054ff',
                        marginRight: '10px',
                    }} />
                    <Typography variant="body3" >
                        we guarantee flexibility to customers in terms of price and contract duration;
                    </Typography>


                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: '20px',
                }}>
                    <CheckCircleIcon sx={{
                        color: '#0054ff',
                        marginRight: '10px',
                    }} />
                    <Typography variant="body3" >
                        we create an easy and transparent user experience;
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: '20px',
                }}>
                    <CheckCircleIcon sx={{
                        color: '#0054ff',
                        marginRight: '10px',
                    }} />
                    <Typography variant="body3" >
                        We guarantee a premium yet accessible service level, where the cost benefit comes from flexibility
                    </Typography>
                </Box>
            </Box>
            <Image src="/img.png" alt="How it works image" width={400} height={400} style={{
                alignSelf: 'center',
            }} />
        </Box>
    );
}
