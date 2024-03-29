import React from 'react';
import { Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { styled } from '@mui/material/styles';

const SocialStack = styled((props) => <Stack {...props} />)`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
  padding: ${(props) => (!props.padding ? '0rem' : '1rem')};
  cursor: pointer;
  a {
    color: #3f3d55;
  }
  * {
    margin-right: 0.7rem;
  }
  ${(props) => props.theme.breakpoints.up('sm')} {
    margin-top: ${(props) => (!props.padding ? '0' : '1rem')};
  }
`;

const SocialLinks = (props) => {
  return (
    <SocialStack direction={'row'} padding={props.padding}>
      <a href={'https://www.linkedin.com/in/wilcolinadev/'} target={'_blank'}>
        <LinkedInIcon fontSize={'large'} />
      </a>

      <a href={'https://github.com/wilcolinadev'} target={'_blank'}>
        <GitHubIcon fontSize={'large'} />
      </a>
      <a href={'https://www.instagram.com/wilcolinadev'} target={'_blank'}>
        <InstagramIcon fontSize={'large'} />
      </a>
    </SocialStack>
  );
};

export default SocialLinks;
