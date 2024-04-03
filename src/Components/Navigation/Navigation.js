import React, { useState } from 'react';
import { Stack, Box } from '@mui/material';
import { ContactLink, Item, Logo, UList, Wrapper } from './NavigationStyles';
import Typography from '@mui/material/Typography';
import BoxIcon from '../BoxIcon';

const Navigation = ({ page }) => {
  const [logHover, isLogHover] = useState(false);

  const scrollIntoView = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Scroll to the element with the id "myElement" with an offset of 100 pixels
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: 'smooth',
      });
    }
  };
  return (
    <UList>
      <Box sx={{ cursor: 'pointer' }}>
        <Logo variant={'h6'} onClick={() => scrollIntoView('home')}>
          Wilfredo Colina
        </Logo>
      </Box>

      {page !== 'contact' && (
        <Stack direction="row">
          <Item onClick={() => scrollIntoView('projects')}> Projects </Item>
          <Item onClick={() => scrollIntoView('career')}> Career </Item>
          <Item onClick={() => scrollIntoView('about')}> About </Item>
        </Stack>
      )}
      <Stack direction={'row'}>
        <Box
          onMouseEnter={() => isLogHover(true)}
          onMouseLeave={() => isLogHover(false)}
          onClick={() => scrollIntoView('contact')}
          sx={{ cursor: 'pointer' }}
        >
          <ContactLink direction="row">
            <Typography style={{ display: 'flex', alignItems: 'center', fontFamily: 'Inconsolata' }}>
              Let's chat
            </Typography>
            <BoxIcon hoverState={logHover} />
          </ContactLink>
        </Box>
      </Stack>
    </UList>
  );
};

export default Navigation;
