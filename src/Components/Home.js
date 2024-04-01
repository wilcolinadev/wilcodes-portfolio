import * as React from 'react';
import Navigation from './Navigation/Navigation';
import { OverFlow, Wrapper } from './Wrapper';
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

const maxSize = "xl"
const marginSize = '5rem 0'
const Home = () => {
  return (
    <Wrapper type={'home'}>
      <Navigation page={'home'} />
    
        <Introduction />
        <SoftSkills />
        <Skills />
        <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '1rem' }} id='projects'>
          <Container maxWidth={maxSize}>
            <FeaturedProjects />
          </Container>
          <hr style={{ margin: marginSize, color: '#3f3d55' }} id='about' />
          <Container maxWidth={maxSize}>
            <Bio />
          </Container>
          <hr style={{ margin: marginSize, color: '#3f3d55' }} id='career' />
          <Container maxWidth={maxSize}>
            <Career />
          </Container>
          <hr style={{ margin: marginSize, color: '#3f3d55' }} id='contact' />
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
