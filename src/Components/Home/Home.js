import * as React from 'react';
import Navigation from '../Navigation/Navigation';
import { OverFlow, Wrapper } from '../Wrapper';
import Description from './Description/Description';
import Skills from './Skills/Skills';
import FeaturedProjects from './FeaturedProjects/FeaturedProjects';
import SoftSkills from './SoftSkills/SoftSkills';
import Footer from '../Footer/Footer';
import ActionCall from '../ActionCall/ActionCall';
import Bio from '../About/Bio/Bio';
import Career from '../About/Career/Career';
import Introduction from '../About/Introduction/Introduction';
import Container from '@mui/material/Container';
const Home = () => {
  return (
    <Wrapper type={'home'}>
      <Navigation page={'home'} />
      <OverFlow>
        <Introduction />
        <SoftSkills />
        <Skills />
        <FeaturedProjects />
        <Career />
        <Bio />
        <ActionCall />
        <Footer />
      </OverFlow>
    </Wrapper>
  );
};

export default Home;
