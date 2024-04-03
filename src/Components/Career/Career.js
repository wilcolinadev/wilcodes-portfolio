import React from 'react';
import Typography from '@mui/material/Typography';
import CareerTimeline from './CareerTimeline/CareerTimeline';

const Career = () => {
  return (
    <div id="career">
      <Typography
        variant={'h2'}
        sx={{
          textAlign: 'center',
          margin: { xs: '1rem 0 1rem 0', md: '2rem 0 2rem 0' },
          fontWeight: 'bold',
          fontFamily: 'Inconsolata',
          fontSize: { xs: '2.5rem', md: '3.5rem' },
        }}
      >
        Career Timeline
      </Typography>

      <CareerTimeline />
    </div>
  );
};

export default Career;
