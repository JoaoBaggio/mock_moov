
import React from "react";
import Header from "@/Components/Header";
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import Footer from "@/Components/Footer";
import BannerDegrade from "@/Components/BannerDegrade";
import MotivationBanner from "@/Components/MotivationBanner";
import HowBanner from "@/Components/HowBanner";


export default function Home(props) {
  return (
    <Box style={{
      paddingTop: '75px',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#fcfcfc'
    }}>
      <Header />
      <Container maxWidth='lg'>
        <MotivationBanner />

        <BannerDegrade title="Every day we work to redefine the mobility landscape to make it" subtitle="more simple, reliable, and sustainable." />

        <HowBanner />
      </Container>

      <Box style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'lightgray'
      }}>
        <h1>Welcome to Moov</h1>
      </Box>
      <Footer />

    </Box>
  );
}
