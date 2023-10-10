import React from 'react';
import { AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloudIcon from '@mui/icons-material/Cloud';
import GitHubIcon from '@mui/icons-material/GitHub';
import { AccordionLabel, AccordionWrapper, ButtonWrapper, ProjectButton, ProjectDescription } from './AccordionStyles';

export const ProjectAccordion = (props) => {
  const { githubUrl, url, description } = props;

  const determineProject = () => {
    if (props.description.includes('Firebase')) {
      return true;
    }
  };
  return (
    <AccordionWrapper>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <AccordionLabel sx={{ color: 'text.secondary' }}>Show more!</AccordionLabel>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: '0' }}>
        <ProjectDescription>
          {description}
          <br />

          {determineProject() && (
            <span style={{ fontStyle: 'italic' }}>
              Test the app with email: adminuser@gmail.com | password: adminuser{' '}
            </span>
          )}
        </ProjectDescription>

        <ButtonWrapper direction={'row'}>
          <ProjectButton color={'primary'} variant={'text'} startIcon={<CloudIcon />}>
            <a href={url} target={'_blank'}>
              {' '}
              Live project Link
            </a>
          </ProjectButton>
          <ProjectButton variant={'text'} startIcon={<GitHubIcon />}>
            <a href={githubUrl} target={'_blank'}>
              {' '}
              Github Link
            </a>
          </ProjectButton>
        </ButtonWrapper>
      </AccordionDetails>
    </AccordionWrapper>
  );
};

export default ProjectAccordion;
