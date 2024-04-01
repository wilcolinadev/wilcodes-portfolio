import React from 'react';
import Typography from '@mui/material/Typography';
import CareerTimeline from './CareerTimeline/CareerTimeline';

const Career = () => {
  return (
    <div id="career">
      <Typography variant={'h2'} textAlign={'center'} sx={{ margin: '2rem 0' }}>
        Career Preparation
      </Typography>
      <CareerTimeline />
    </div>
  );
};

export default Career;
