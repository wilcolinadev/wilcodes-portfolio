import React from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import { Wrapper } from '../Wrapper';
import ActionCall from '../ActionCall/ActionCall';
import Project from './Project/Project';
import ProjectsHeader from './ProjectsHeader/ProjectsHeader';
import useProjects from '../../hooks/useProjects';
import { ProjectWrapper } from './Project/ProjectStyles';
import { Grid } from '@mui/material';

const Projects = () => {
  const serverProjects = useProjects('projects');

  return (
    <Wrapper type={'projects'}>
      <Navigation page={'projects'} />
      <ProjectsHeader />
      <ProjectWrapper maxWidth={'xl'} margin={'auto'}>
        <Grid container  >
          {serverProjects.map((projectData, i) => (
            <Project
              key={i}
              name={projectData.name}
              url={projectData.url}
              githubUrl={projectData.githubUrl}
              description={projectData.description}
              urlImage={projectData.urlImage}
            />
          ))}
        </Grid>
      </ProjectWrapper>
      <ActionCall />

      <Footer />
    </Wrapper>
  );
};

export default Projects;
