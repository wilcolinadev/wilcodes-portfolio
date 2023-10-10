import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

export const SoftBox = styled(Stack)`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
  animation: infinite 20s linear infinite;
 
  @keyframes cycle {
    0% {
      transform: translateX(-100%);

    }

    100% {
      transform: translateX(0);
    }
  }
  
  
    @keyframes infinite{
      0%{
        
    transform: translateX(-100%);
    }

  100% {
    transform: translateX(0);
  }
}
    
    ${(props) => props.theme.breakpoints.up('lg')} {
      animation: cycle 14s linear 1;
      
    }
  }
`;

export const SoxtText = styled(Typography)`
  font-size: 1.2rem;
  margin: 0 1rem;
  font-family: 'Inconsolata', monospace;
  padding: 0.5rem;
  text-transform: uppercase;
  flex: 0 0 auto;
  color: #3f3d55;
`;
export const IconBox = styled('span')`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  color: #3f3d55;
`;
