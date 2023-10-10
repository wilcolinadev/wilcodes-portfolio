import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

export const ProjectWrapper = styled(Grid)`
  background-color: rgba(255, 255, 255, 0.7);
  border-top: 2px solid #3f3d55;
  padding: 2rem;

  img {
    width: 100%;
    height: auto;
    margin: 0.5rem 0;

    ${(props) => props.theme.breakpoints.up('md')} {
      width: 90%;
    }
  }
`;

export const ProjectTitle = styled(Typography)`
  margin-bottom: 1.5rem;
`;
