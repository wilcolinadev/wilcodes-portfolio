import React from 'react';
import Project from './Project/Project';
import useProjects from '../../hooks/useProjects';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
const FeaturedProjects = () => {
  const serverProjects = useProjects('featuredProjects');
  return (
    <>
      <Typography variant={'h2'} sx={{
        textAlign: 'center',
        margin: { xs: '2rem 0 1rem 0', md: '4rem 0 2rem 0' },
        fontWeight: 'bold',
        fontFamily: 'Inconsolata',
        fontSize: { xs: '2.5rem', md: '3.5rem' }
      
      }}>Feature Projects</Typography>
      <Typography variant={'h6'} sx={{ textAlign: 'center', fontWeight: '500', fontFamily: 'Open Sans', marginBottom: {
        xs: '2rem',
        md: '4rem'
      }, fontSize: { xs: '1rem', md: '1.5rem' } }}>Get a first Impression on my latest feature projects </Typography >
  

      <Grid container fluid="true" margin={'auto'}>
        {serverProjects.map((project) => {
          return (
            <Project
              key={project.name}
              name={project.name}
              urlImage={project.urlImage}
              url={project.url}
              description={project.description}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default FeaturedProjects;
