import React from 'react';
import Typography from '@mui/material/Typography';
import { CareerWrapper } from './CareerStyles';
import CareerTimeline from './CareerTimeline/CareerTimeline';

const Career = () => {
  return (
    <CareerWrapper id="career">
      <Typography variant={'h2'} textAlign={'center'} sx={{ margin: '2rem 0' }}>
        Career Preparation
      </Typography>
      <CareerTimeline />
    </CareerWrapper>
  );
};

export default Career;
