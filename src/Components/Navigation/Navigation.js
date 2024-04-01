import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Stack, Container} from '@mui/material';
import { ContactLink, Item, Logo, UList } from './NavigationStyles';
import Link from '../../Link';
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
    <Container sx={{position: 'sticky', top: 0, zIndex: 99}} maxWidth={'xl'}>
      <UList>
        <Link href="/">
          <Box>
            <Logo variant={'h5'}>Wilfredo Colina</Logo>
          </Box>
        </Link>
        {page !== 'contact' && (
          <Stack direction="row">
            <Item onClick={() => scrollIntoView('projects')}> Projects </Item>
            <Item onClick={() => scrollIntoView('career')}> Career </Item>
            <Item onClick={() => scrollIntoView('about')}> About </Item>
          </Stack>
        )}
        <Stack direction={'row'}>
          <Box onMouseEnter={() => isLogHover(true)} onMouseLeave={() => isLogHover(false)} onClick={() => scrollIntoView('contact')}>
           
              <ContactLink direction="row">
                <Typography style={{ display: 'flex', alignItems: 'center' }}>Let's chat</Typography>
                <BoxIcon hoverState={logHover} />
              </ContactLink>
          
          </Box>
        </Stack>
      </UList>
    </Container>
  );
};

export default Navigation;
