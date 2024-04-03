import React from 'react';
import { Description } from './FormHeaderStyles';
import { Stack, Grid, Box } from '@mui/material';
import SocialLinks from '../SocialLinks';
import Typography from '@mui/material/Typography';

const FormHeader = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={9}>
        <Stack>
          <Typography variant={'h4'} sx={{ marginBottom: '1rem', fontFamily: 'Inconsolata', fontWeight: '500' }}>
            Fill the form below{' '}
          </Typography>
          <Description variant={'h6'}>Let's work together!</Description>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} marginTop={'1rem'}>
            <SocialLinks align={'left'} />
            <Stack>
              <Typography sx={{ fontFamily: 'inconsolata' }}>Location</Typography>
              <Typography variant={'h6'}>Austin, Texas.</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Grid>

      <Grid item xs={10} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src={
            'https://res.cloudinary.com/djf9jqpml/image/upload/v1711674656/wilcodes/assets/undraw_fill_form_re_cwyf_o5dqu8.svg'
          }
          alt={'resume developer'}
          style={{ width: '100%', padding: '3rem' }}
        />
      </Grid>
    </Grid>
  );
};

export default FormHeader;
