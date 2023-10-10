import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const FooterBox = styled('footer')`
  background-color: #f8f7f7;
  border-top: 2px solid #3f3d55;
  padding: 1rem;

  * {
    text-decoration: none;
    font-family: 'Open Sans', serif;
    color: #3f3d55;
  }
`;
export const FooterLink = styled(Typography)`
  margin: 0 1rem;
  font-size: 1rem;
  text-transform: uppercase;

  &:hover {
    transition: 0.4ms ease-in-out;
    color: #0cb978;
  }

  ${(props) => props.theme.breakpoints.up('lg')} {
    margin: 0 0.6rem;
  }
`;

export const FooterCopyright = styled('p')`
  margin: 0.5rem 0;
  padding: 0.5rem;
`;
