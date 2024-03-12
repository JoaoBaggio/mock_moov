
import React from "react";
import Header from "@/Components/Header";
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import Footer from "@/Components/Footer";
import BannerDegrade from "@/Components/BannerDegrade";
import MotivationBanner from "@/Components/MotivationBanner";
import HowBanner from "@/Components/HowBanner";
import Commit from "@/Components/Commit";
import CharityBanner from "@/Components/CharityBanner";


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
        <Commit />
        <CharityBanner />
      </Container>
      <Footer />

    </Box>
  );
}
