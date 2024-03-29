import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import { Burger, BurgerController, ContactLink, Identifier, Item, Logo, UList, Wrapper } from './NavigationStyles';
import Link from '../../Link';
import Typography from '@mui/material/Typography';
import BoxIcon from '../BoxIcon';
import HamburgerModal from './HamburgerModal/HamburgerModal';

const Navigation = ({ page }) => {
  const [logHover, isLogHover] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  return (
    <Wrapper>
      <HamburgerModal active={isBurgerOpen} />
      <UList>
        <Link href="/">
          <Box>
            <Logo variant={'h5'}>Wilfredo Colina</Logo>
          </Box>
        </Link>
        <Stack direction="row">
          <Link href="#projects" color="secondary">
            <Item> Projects {page === 'home' && <Identifier />} </Item>
          </Link>
          <Link href="#career" color="secondary">
            <Item> Career {page === 'about' && <Identifier />} </Item>
          </Link>
          <Link href="#about" color="secondary">
            <Item> About {page === 'projects' && <Identifier />} </Item>
          </Link>
        </Stack>
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
