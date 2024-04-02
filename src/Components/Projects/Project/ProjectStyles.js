import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

export const ProjectWrapper = styled(Grid)`
  background-color: rgba(255, 255, 255, 0.7);
  border-top: 2px solid #3f3d55;

  img {
    width: 100%;
    height: auto;
  }
`;

export const ProjectTitle = styled(Typography)`
  margin-bottom: 1.5rem;
`;
