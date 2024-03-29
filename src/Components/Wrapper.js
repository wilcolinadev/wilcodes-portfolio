import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import homeBg from '../assets/home-bg.svg';
import aboutBg from '../assets/about-bg.svg';
import contactBg from '../assets/contact-bg.svg';
import projectBg from '../assets/projects-bg.svg';

const getBg = (type) => {
  switch (type) {
    case 'about':
      return aboutBg;
    case 'contact':
      return contactBg;
    case 'projects':
      return projectBg;
    default:
      return homeBg;
  }
};

export const Wrapper = styled((props) => <Box {...props} />)`
  background-image: url(${(props) => getBg(props.type)});
  height: auto;
  width: 100%;
  background-position: center;
  background-size: cover;
  z-index: 99;
  background-color: #ffffff;
  min-height: 100vh;
  scroll-behavior: smooth;
`;

export const OverFlow = styled(Box)`
  overflow-x: hidden;
`;
