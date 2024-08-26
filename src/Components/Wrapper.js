import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';


export const Wrapper = styled((props) => <Box {...props} />)`
  background-image: url('https://res.cloudinary.com/djf9jqpml/image/upload/v1724636074/wilcodes/home-bg_jttsxu.svg');
  height: auto;
  width: 100%;
  background-position: center;
  background-size: cover;
  z-index: 99;
  background-color: #ffffff;
  min-height: 100vh;
  scroll-behavior: smooth;
`;
