import { styled } from '@mui/material/styles';
import { Box, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

export const AboutImage = styled('img')`
  width: 80%;
  height: auto;
`;



export const TextController = styled(Stack)`
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 35%;
  }
`;
export const Description = styled(Typography)`
  font-family: 'Open Sans', serif;
  line-height: 1.8;
  margin-top: 0.5rem;

  ${(props) => props.theme.breakpoints.up('sm')} {
    font-size: 1.2rem;
  }

  ${(props) => props.theme.breakpoints.up('lg')} {
    font-size: 1.1rem;
  }

  ${(props) => props.theme.breakpoints.up('xl')} {
    font-size: 1.2rem;
  }
`;
