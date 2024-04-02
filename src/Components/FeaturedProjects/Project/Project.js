import React from 'react';
import { ProjectBox, ProjectDescription, ProjectImage, ProjectTitle } from './ProjectStyles';
import { Grid} from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Project = ({ name, urlImage, description, url }) => {
  const urlHandler = (url) => {
    if (Array.isArray(url)) {
      return url[1];
    } else {
      return url;
    }
  };

  return (
    <Grid item md={6} style={{ margin: '0 auto' }}>
      <a href={url} target="_blank" style={{ textDecoration: 'none' }}>
        <ProjectBox>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
          <Typography variant={'h5'} sx={{  fontFamily: 'Inconsolata', fontWeight: '500', color: 'text.primary','&:hover': { color: '#019058'}  }}>
            {name}
          </Typography>
          <ArrowCircleRightIcon sx={{ fontSize: '1.5rem', marginLeft: '0.5rem', color: '#3f3d55' }} />
          </Stack>
          
          <ProjectDescription>{description}</ProjectDescription>
          <ProjectImage src={urlHandler(urlImage)} alt={name} />
        </ProjectBox>
      </a>
    </Grid>
  );
};

export default Project;
