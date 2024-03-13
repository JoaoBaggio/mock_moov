import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function Footer() {
    return (

        <footer style={{
            position: '',
            bottom: 0,
            width: '100%',
            backgroundColor: '#eef4fd',
            padding: '10px',
            textAlign: 'center'
        }}>
            <Container maxWidth='lg'>
                <Box style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: '45px',
                    paddingBottom: '45px',
                }}>
                    <Box style={{ textAlign: 'left' }}>
                        <Image
                            src="/logo.svg"
                            alt="Moov Logo"
                            width={200}
                            height={100}
                        />
                        <Typography variant="body2" color="dark.main">
                            Follow us on <a href="https://www.linkedin.com/company/group-moov/" target="_blank" >LinkedIn</a>
                        </Typography>
                    </Box>
                    <Box style={{ textAlign: 'left' }}>
                        <Typography color="dark.main" variant="h3">
                            MOOV - Tech Srl
                        </Typography>
                        <Typography color="dark.main">
                            Address:
                        </Typography>
                        <Typography color="dark.main">
                            Via Cornelia 498
                        </Typography>
                        <Typography color="dark.main">
                            00166 Roma (RM), Italia
                        </Typography>
                        <Typography color="dark.main" style={{
                            marginTop: '50px',
                            marginBottom: '50px'
                        }}>
                            VAT number: 17132741004
                        </Typography>
                        <Typography color="dark.main">
                            Email:
                        </Typography>
                        <Typography color="link.main" >
                            <a href="mailto:contact@moov-group.com" >
                                contact@moov-group.com</a>
                        </Typography>
                        <Typography color="dark.main">
                            Phone Number:
                        </Typography>
                        <Typography color="link.main"  >
                            <a href="tel:390694505873"  >
                                +39 06 9450 5873</a>
                        </Typography>
                    </Box>
                    <Box style={{ textAlign: 'left' }}>
                        <Typography color="dark.main" variant="h3">
                            Flee                        </Typography>
                        <Typography color="dark.main" >
                            Website:
                        </Typography>
                        <Typography color="link.main">
                            <a href="https://driveflee.com" target="_blank">
                                driveflee.com</a>
                        </Typography>
                        <Typography color="dark.main">
                            Email:
                        </Typography>
                        <Typography color="link.main">
                            <a href="mailto:info@driveflee.com" >
                                info@driveflee.com</a>
                        </Typography>
                    </Box>
                    <Box style={{ textAlign: 'left' }}>
                        <Typography color="dark.main" variant="h3">
                            We support Fondazione Heal
                        </Typography>
                        <Typography color="dark.main">
                            Website:
                        </Typography>
                        <Typography color="link.main">
                            <a href="https://progettoheal.com" target="_blank">
                                progettoheal.com</a>
                        </Typography>
                        <Typography color="dark.main">
                            Charity Shop:
                        </Typography>
                        <Typography color="link.main">
                            <a href="https://shop.progettoheal.com" target="_blank">
                                shop.progettoheal.com</a>
                        </Typography>
                    </Box>

                </Box>
            </Container>
        </footer>
    );
}