import React from 'react';
import Typography from '@mui/material/Typography';
import { AboutImage, Description } from './IntroductionStyles';
import Grid from '@mui/material/Grid';
const Introduction = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={8} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <Typography variant={'h4'} sx={{ marginBottom: '1rem', fontFamily: 'Inconsolata', fontWeight: '500' }}>
            Hi, Hello 👋🏼
          </Typography>

          <Typography variant={'h1'} sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            I'm Wilfredo Colina
          </Typography>
          <Description>
            I'm a <span style={{ fontWeight: 'bolder', fontStyle: 'italic' }}> Web Developer</span> who loves to face
            new challenges every day. My passion about translating designs into functional web applications allow me to
            focus on the development of remarkable software taking into consideration user experience, good practices
            and the needs of the application.
          </Description>
        </div>
      </Grid>

      <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <AboutImage
          src={
            'https://res.cloudinary.com/djf9jqpml/image/upload/v1711674129/wilcodes/assets/undraw_developer_f55kfw.svg'
          }
          alt={'Web developer'}
        />
      </Grid>
    </Grid>
  );
};

export default Introduction;
