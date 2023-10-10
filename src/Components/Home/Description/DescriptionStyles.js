import { styled } from '@mui/material/styles';
import { Box, Button, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

export const GridController = styled(Grid)`
  width: 100%;
  box-sizing: border-box;
  height: auto;

  padding: 0.5rem;
`;

export const MainTitle = styled(Typography)`
  font-weight: bold;
  font-family: 'Inconsolata', monospace;
  box-sizing: border-box;
  font-size: 4rem;

  ${(props) => props.theme.breakpoints.up('sm')} {
    font-size: 5rem;
  }
`;

export const MainDescription = styled(Typography)`
  font-family: 'Open Sans', serif;

  margin: 1rem 0rem;
  width: 100%;

  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 1.1rem;
    width: 70%;
  }
`;

export const MainButton = styled(Button)`
  margin-top: 0.5rem;
  font-size: 1.3rem;
  border-radius: 10px;
  text-transform: unset;
  font-family: 'Inconsolata', monospace;
  letter-spacing: -1px;

  &:hover {
    transition: 0.4ms ease-in-out;
    background-color: transparent;
  }

  ${(props) => props.theme.breakpoints.up('sm')} {
    font-size: 2.2rem;
    margin-top: 1rem;
  }
`;

export const ImageS = styled('img')`
  width: 250px;
  height: 250px;

  ${(props) => props.theme.breakpoints.up('sm')} {
    width: 350px;
    height: 350px;
  }
`;
export const ImageBox = styled(Box)`
  ${(props) => props.theme.breakpoints.down('sm')} {
    text-align: center;
  }
`;
