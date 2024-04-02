import React from 'react';
import { BioContentBox, BioImage, BioLink } from './BioStyles';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import { Description } from '../../Introduction/IntroductionStyles';
import { Box } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
const Bio = () => {
  return (
    <Grid id="about" container>
      <Grid item xs={12} md={8}>
        <div>
        <Typography variant={'h2'} sx={{
        textAlign: 'center',
        margin: { xs: '2rem 0 1rem 0', md: '4rem 0 2rem 0' },
        fontWeight: 'bold',
        fontFamily: 'Inconsolata',
        fontSize: { xs: '2.5rem', md: '3.5rem' }
      
      }}>About me</Typography>
          
          <Description>
            From my early coding journey that began at the age of 17, I've embarked on a dynamic path of learning and
            growth in the world of software development. My journey began at a software academy where I honed my
            algorithmic thinking and grasped the fundamentals of data structures. This foundation laid the groundwork
            for my passion for programming.
          </Description>
          <Description>
            I'm a versatile web developer with a passion for creating outstanding digital experiences. My journey
            started with a strong foundation in JavaScript and evolved into expertise in various web technologies,
            including HTML, CSS, TypeScript, React, WordPress, Angular, Node.js, and PHP.
          </Description>
          <Description>
            As a proficient in Adobe Photoshop and Figma, I seamlessly merge design with functionality. With a sharp eye
            for detail and strong organizational skills, I've effectively managed projects and led teams in my current
            role.
          </Description>
          <Description>
            At Gaido's Seaside Inn and StayGalveston, I've played a pivotal role in web development and SEO strategies,
            driving substantial growth in online traffic and bookings.
          </Description>
          <Description>
            Let's connect and discuss how I can leverage my skills to contribute to your team's success.
          </Description>
          <BioLink
            target="_blank"
            href={'https://res.cloudinary.com/djf9jqpml/image/upload/v1710017770/wcolinacv-2024_wv9nka.pdf'}
            download={'WilfredoColina.pdf'}
          >
            Download Resume
            <CloudDownloadOutlinedIcon sx={{ marginLeft: '.5rem' }} />
          </BioLink>
        </div>
      </Grid>

      <Grid item xs={12} md={4}>
        <BioContentBox>
          <Box>
            <figure style={{ textAlign: 'center' }}>
              <BioImage
                src={
                  'https://res.cloudinary.com/djf9jqpml/image/upload/w_auto,f_auto,c_fill,q_auto/v1710021727/wil-grad-min-b15ff6c3a2fb0d1b6d48bc73f5d4bd9d_Large_Background_Removed_y4wxnn.png'
                }
                alt={'bio of a web developer'}
              />
            </figure>
          </Box>
        </BioContentBox>
      </Grid>
    </Grid>
  );
};

export default Bio;
