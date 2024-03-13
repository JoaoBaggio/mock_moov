import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function CharityBanner() {
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
                    Flee charity cars
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: '20px',
                }}>
                    <Typography variant="body3" >
                        We support the <b>&apos;Taxi Solidale&apos; project by the Heal Foundation</b>, providing Flee rental cars for free use.
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: '20px',
                }}>
                    <Typography variant="body3" >
                        Every day, the cars from <b>Heal&apos;s charitable taxi</b> service <b>help children</b> and their families <b>get to medical facilities for the essential cancer treatments</b> they need.
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: '20px',
                }}>
                    <Typography variant="body3" >
                        Furthermore, we&apos;ll offer our customers an opportunity to make their journeys more meaningful: by donating €0.01 to the Heal Foundation for every kilometer traveled.
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: '20px',
                }}>
                    <Typography variant="body3" >
                        <b>Interested in learning more about the Heal Foundation?</b> <br />
                        <a href="https://www.progettoheal.com/" target="_blank">Visit their website</a> and the <a href="https://shop.progettoheal.com/" target="_blank">charity shop.</a>
                    </Typography>
                </Box>
            </Box>
            <Image src="/img2.png" alt="How it works image" width={400} height={400} style={{
                alignSelf: 'center',
            }}/>
        </Box>
    );
}
