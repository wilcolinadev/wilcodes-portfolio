import React from 'react';
import { ContactImage, Description, HeaderBox, Title } from './FormHeaderStyles';
import contactImage from '../../../assets/undraw_fill_form_re_cwyf.svg';
import { Stack } from '@mui/material';
import SocialLinks from '../../SocialLinks';
import Typography from '@mui/material/Typography';

const FormHeader = () => {
  return (
    <HeaderBox>
      <Stack>
        <Title variant={'h3'}>Get in touch 👋🏼</Title>
        <Description variant={'h4'}>Love to hear from you!</Description>
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} marginTop={'1rem'}>
          <SocialLinks align={'left'} />
          <Stack>
            <Typography sx={{ fontFamily: 'inconsolata' }}>Location</Typography>
            <Typography variant={'h6'}>Austin, Texas.</Typography>
          </Stack>
        </Stack>
      </Stack>

      <ContactImage src={contactImage} alt={'resume developer'} />
    </HeaderBox>
  );
};

export default FormHeader;
