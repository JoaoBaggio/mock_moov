
import React from "react";
import Image from 'next/image';
import Header from "@/Components/Header";
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import Footer from "@/Components/Footer";
import BannerDegrade from "@/Components/BannerDegrade";
import MotivationBanner from "@/Components/MotivationBanner";
import HowBanner from "@/Components/HowBanner";
import Commit from "@/Components/Commit";
import CharityBanner from "@/Components/CharityBanner";
import About from "@/Components/About";


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
      <Box style={{
        position: 'absolute',
        width: '50%',
        height: '60vh',
        right: 0,
        top: 0,
        maxHeight: '100vh',
        objectFit: 'cover',
        boxSize: 'border-box',

        backgroundColor: 'red',
        overflow: 'hidden',
      }}>
        <Image src="/cover.png" alt="cover image of a lady" layout="fill" objectFit='cover' style={{}} />
      </Box>
      <Container maxWidth='lg'>

        <Box style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
          <Box style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '50%',
          }}>
            <Typography style={{
              fontSize:'60px',
              fontWeight: '600',
              lineHeight: '1.15',
            }} color='dark.main'>
              Let's imagine a world where movement is freedom
            </Typography>
            <Typography style={{
              fontSize:'30px',
              fontWeight: '400',
              lineHeight: '1.4',
              marginTop: '20px',
              marginBottom: '20px',
            }} color='dark.main'>
              We innovate mobility in every aspect!
            </Typography>
            <Button variant="contained" color="secondary" style={{
              marginTop: '20px',
              width: '150px',
            }}>
              Contact us
            </Button>
          </Box>

          {/* <Image src="/cover.png" alt="cover image of a lady" layout="fill" /> */}
        </Box>


        <MotivationBanner />
        <BannerDegrade title="Every day we work to redefine the mobility landscape to make it" subtitle="more simple, reliable, and sustainable." />
        <HowBanner />
        <About />
        <Commit />
        <CharityBanner />
      </Container>
      <Footer />

    </Box>
  );
}
