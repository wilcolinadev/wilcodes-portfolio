import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

export const Wrapper = styled(Grid)`
  margin-top: 2rem;
  padding-bottom: 4rem;
`;

export const MainWrapper = styled(Grid)`
  background: #fefffe;

  * {
    text-decoration: none;
  }
`;

export const Title = styled(Typography)`
  text-align: center;
  font-family: 'Inconsolata', monospace;
  font-weight: bold;
  padding: 3rem 0 1rem 0;
  color: #000;
  font-size: 2.5rem;

  ${(props) => props.theme.breakpoints.up('lg')} {
    font-size: 3.3rem;
    padding: 5rem 0 1rem 0;
  }
`;
export const Description = styled(Typography)`
  text-align: center;
  font-family: 'Open Sans', serif;

  color: #000;
  font-size: 1rem;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
  justify-content: center;

  ${(props) => props.theme.breakpoints.up('lg')} {
    font-size: 1.2rem;
  }
`;

export const ProjectsLink = styled(Typography)`
  text-align: center;
  font-family: 'Inconsolata', monospace;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #3f3d55;
`;
