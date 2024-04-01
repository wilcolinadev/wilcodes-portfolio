import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import { ContactLink, Item, Logo, UList, Wrapper } from './NavigationStyles';
import Link from '../../Link';
import Typography from '@mui/material/Typography';
import BoxIcon from '../BoxIcon';
import HamburgerModal from './HamburgerModal/HamburgerModal';

const Navigation = ({ page }) => {
  const [logHover, isLogHover] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

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
    <Wrapper>
      <HamburgerModal active={isBurgerOpen} />
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
          <Box onMouseEnter={() => isLogHover(true)} onMouseLeave={() => isLogHover(false)}>
            <Link href="/contact" color="secondary" aria-label={'contact-page'}>
              <ContactLink direction="row">
                <Typography style={{ display: 'flex', alignItems: 'center' }}>Let's chat</Typography>
                <BoxIcon hoverState={logHover} />
              </ContactLink>
            </Link>
          </Box>
        </Stack>
      </UList>
    </Wrapper>
  );
};

export default Navigation;
