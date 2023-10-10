import React from 'react';
import { ProjectBox, ProjectDescription, ProjectImage, ProjectTitle } from './ProjectStyles';
import { Grid } from '@material-ui/core';
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
      <a href={url} target="_blank">
        <ProjectBox>
          <ProjectTitle variant={'h5'} sx={{ color: '#3F3D55' }}>
            {name}
            <ArrowCircleRightIcon style={{ marginLeft: '6px' }} />
          </ProjectTitle>
          <ProjectDescription>{description}</ProjectDescription>
          <ProjectImage src={urlHandler(urlImage)} alt={name} />
        </ProjectBox>
      </a>
    </Grid>
  );
};

export default Project;
