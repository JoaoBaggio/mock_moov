
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
import Card from "@/Components/Card";


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
        overflow: 'hidden',
      }}>
        <Image src="/cover.png" alt="cover image of a lady" objectFit="cover" layout="fill" style={{}} />
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
              fontSize: '60px',
              fontWeight: '600',
              lineHeight: '1.15',
            }} color='dark.main'>
              Let&apos;s imagine a world where movement is freedom
            </Typography>
            <Typography style={{
              fontSize: '30px',
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
        </Box>
        <MotivationBanner />
        <Box style={{ margin: "40px 0" }}>
          <BannerDegrade title="Every day we work to redefine the mobility landscape to make it" subtitle="more simple, reliable, and sustainable." />
        </Box>

        <Box style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
        }}>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
              paddingRight: '50px',
              position: '-webkit-sticky', /* Safari */
              position: 'sticky',
              alignSelf: 'flex-start',
              left: 0,
              top: 140,

            }}>

            <Typography variant="h1" style={{ margin: '25px 0' }}>
              What we do
            </Typography>

            <Typography variant="body3" style={{ marginBottom: '25px' }}>
              The world is changing very quickly, just as behavioral models are. That&apos;s why <b>we want to create agile and easy to adapt solutions.</b>
            </Typography>

            <Typography variant="body3" style={{ marginBottom: '25px' }}>
              We directly engage with the market under the <b>Flee</b> brand and <b>empower partners and distribution networks</b> eager to pursue mobility initiatives <b>through</b>:<br />
            </Typography>


            <Typography variant="body3" style={{ marginBottom: '15px', marginLeft: '15px' }}>
              • <b>platforms that orchestrate mobility</b> using top-tier technologies.<br />
            </Typography>


            <Typography variant="body3" style={{ marginBottom: '15px', marginLeft: '15px' }}>
              • an outstanding <b>customer experience‍</b><br />
            </Typography>


            <Typography variant="body3" style={{ marginBottom: '50px', marginLeft: '15px' }}>
              • <b>insurance products</b> tailored to <b>mobility</b>, ensuring maximum protection, and <b>usage-based pricing</b> models that are grounded in consumption and behavior patterns.
            </Typography>


          </Box>
          <Box style={{
            width: '50%',
            // backgroundColor: 'red',
          }}>
            <Card title="Flee" logo="/logo_green1.svg" >
              <Typography color='dark.light' variant="body1">
                We directly engage with the market under our brand <b>Flee, owned by Moov-Tech.</b>
              </Typography>
              <Typography color='dark.light' variant="body1">
                <b>Flee aims to become the main mobility ecosystem</b> that adapts to every journey.mobility ecosystem.
              </Typography>
              <Typography color='dark.light' variant="body1">
                ‍The first Flee service is <b>an innovative flexible long-term car rental.</b>
              </Typography>
              <Typography color='dark.light' variant="body1">
                <a href="https://driveflee.com/" target="_blank">Find out more</a>
              </Typography>
            </Card>
            <Card title="Tailor-made mobility solutions" logo="/cars2.svg">
              <Typography color='dark.light' variant="body1">
                We have created a <b>modular solution,</b> usable in <b>PaaS (Platform as a Service)</b> mode by customers and partners to carry out customized projects in the mobility world.
              </Typography>
              <Typography color='dark.light' variant="body1">
                <b>What does it consist of?</b> We adapt or activate one or more modules of our platform to create a <b>plug and play end-to-end solution</b> that can be integrated into existing business processes or third-party applications.
              </Typography>
              <Typography color='dark.light' variant="body1">
                <b>What are our modules?</b> Advisory, fleet management, risk management & insurance program, telematics, lead management and customer care, technological platform, marketing, billing & payment, and much more
              </Typography>
            </Card>
            <Card title="Insurance solutions" logo="/insurance1.svg">
              <Typography color='dark.light' variant="body1">
                We work closely with the <b>insurance big players</b> and create <b>embedded &quot;protection&quot; systems</b> for our direct customers and partners.
              </Typography>
              <Typography color='dark.light' variant="body1">
                <b>Where do we make a difference?</b> <br />
                We always follow our mission and make every proposal: <br />


                • simple and fast<br />


                • sustainable and flexible<br />


                • safe and transparent.

              </Typography>
              <Typography color='dark.light' variant="body1">
                <b>Where do we stand out?</b>  <br />
                ‍We consistently adhere to our mission, ensuring every offering is: <br />


                • quick and straightforward<br />


                • sustainable and adaptable<br />


                • transparent and secure.

              </Typography>
            </Card>
          </Box>
        </Box>
        <Box style={{ margin: '40px 0' }}>
          <HowBanner />

        </Box>
        <About />
        <Box style={{ margin: '60px 0' }}>
          <Commit />

        </Box>
        <Box style={{ margin: '60px 0' }}>
          <CharityBanner />

        </Box>
      </Container>
      <Footer />

    </Box>
  );
}
