import * as React from 'react';
import Navigation from './Navigation/Navigation';
import {  Wrapper } from './Wrapper';
import Skills from './Skills/Skills';
import FeaturedProjects from './FeaturedProjects/FeaturedProjects';
import SoftSkills from './SoftSkills/SoftSkills';
import Footer from './Footer/Footer';
import ActionCall from './ActionCall/ActionCall';
import Bio from './About/Bio/Bio';
import Career from './Career/Career';
import Introduction from './Introduction/Introduction';
import Form from './Form/Form';
import FormHeader from './FormHeader/FormHeader';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
const maxSize = 'lg';


const Home = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const hrStyles = {
    color: '#3f3d55',
    border: '1px solid #3f3d55',
    margin: isMobile ? '2rem 0' : '4rem 0',
  };
  return (
    <Wrapper type={'home'} id="home">
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          position: 'sticky',
          top: 0,
          zIndex: 999,
          backdropFilter: 'blur(5px)',
        }}
      >
        <Container maxWidth={maxSize}>
          <Navigation />
        </Container>
      </Box>
      <Container maxWidth={'lg'} sx={{ margin: { xs: '2rem auto', md: '4rem auto' } }}>
        <Introduction />
      </Container>
      <SoftSkills />
      <Skills />
      <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '1rem' }} id="projects">
        <Container maxWidth={maxSize}>
          <FeaturedProjects />
        </Container>
        <hr style={hrStyles} id="about" />
        <Container maxWidth={maxSize}>
          <Bio />
        </Container>
        <hr style={hrStyles} id="career" />
        <Container maxWidth={maxSize}>
          <Career />
        </Container>
        <hr style={hrStyles} id="contact" />
        <Container maxWidth={maxSize}>
          <FormHeader />
          <Form />
        </Container>
      </Box>
      <ActionCall />
      <Footer />
    </Wrapper>
  );
};

export default Home;
