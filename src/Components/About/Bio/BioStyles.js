import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Link from '@mui/material/Link';

export const BioWrapper = styled(Box)`
  background-color: rgba(255, 255, 255, 0.7);
  border-top: 2px solid #3f3d55;
  padding: 2rem;

  ${(props) => props.theme.breakpoints.up('md')} {
    margin-top: 2.5rem;
  }
`;

export const BioTittle = styled(Typography)`
  padding: 0.5rem 0;
`;
export const BioImage = styled('img')`
  width: 90%;
  height: auto;
  margin-top: 2rem;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0) 80%, transparent 100%);
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 280px;

    padding-left: 1rem;
    text-align: center;
  }
`;
export const BioContentBox = styled(Box)`
  display: flex;
  padding: 0.5rem;
  box-sizing: border-box;
  justify-content: center;
  flex-flow: column nowrap;

  ${(props) => props.theme.breakpoints.up('md')} {
    flex-flow: row nowrap;
    padding: 1rem;
    margin-top: 0.5rem;
  }
`;
export const BioSpan = styled('span')`
  font-size: 2rem;
  text-transform: uppercase;
`;

export const BioLink = styled(Link)`
  font-size: 1.1rem;
  font-family: 'Inconsolata', monospace;
  color: #3f3d55;
  margin: 2rem 0;
  color: #3f3d55;
  display: flex;
  font-weight: bold;
  text-decoration-color: #3f3d55;

  &:hover {
    transition: 0.5s ease-in-out;
    color: #20c976;
    text-decoration-color: #20c976;
  }
`;
