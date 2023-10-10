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
          <Link href="/" color="secondary">
            <Item> Home {page === 'home' && <Identifier />} </Item>
          </Link>
          <Link href="/about" color="secondary">
            <Item> About {page === 'about' && <Identifier />} </Item>
          </Link>
          <Link href="/projects" color="secondary">
            <Item> Projects {page === 'projects' && <Identifier />} </Item>
          </Link>
        </Stack>
        <Stack direction={'row'}>
          <Box onMouseEnter={() => isLogHover(true)} onMouseLeave={() => isLogHover(false)}>
            <Link href="/contact" color="secondary" aria-label={'contact-page'}>
              <ContactLink direction="row">
                <BoxIcon hoverState={logHover} />
                <Typography style={{ display: 'flex', alignItems: 'center' }}>Let's chat</Typography>
              </ContactLink>
            </Link>
          </Box>

          <BurgerController>
            <Burger open={isBurgerOpen} onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
              <div />
              <div />
              <div />
            </Burger>
          </BurgerController>
        </Stack>
      </UList>
    </Wrapper>
  );
};

export default Navigation;
