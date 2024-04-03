import React from 'react';
import { Stack } from '@mui/material';
import SocialLinks from '../SocialLinks';
import { FooterBox, FooterCopyright } from './FooterStyles';

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <FooterBox>
      <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} maxWidth={'lg'} margin={'0 auto'}>
        <FooterCopyright>©{getCurrentYear()} Wilfredo Colina. All Rights Reserved.</FooterCopyright>
        <SocialLinks padding={false} />
      </Stack>
    </FooterBox>
  );
};

export default Footer;
