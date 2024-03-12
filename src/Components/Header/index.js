import { AppBar, Button, Container, Toolbar } from "@mui/material";
import Image from "next/image";



export default function Header() {
    return (
        <AppBar style={{
            // position: 'fixed',
            backgroundColor: '#fcfcfc',
            // zIndex: 1000,
        }}>
            <Toolbar>



                <Container display="flex" maxWidth='lg' style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    // backgroundColor: 'red'
                }} >
                    <Image
                        src="/logo.svg"
                        alt="Moov Logo"
                        width={100}
                        height={50}
                    />
                    <Button variant="contained" color="secondary">
                        Contact us
                    </Button>
                </Container>
            </Toolbar>

        </AppBar>
    );
}
