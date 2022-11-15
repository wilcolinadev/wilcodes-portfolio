import {styled} from "@mui/material/styles";
import {Stack} from "@mui/material";
import Typography from "@mui/material/Typography";

export const SoftBox = styled(Stack)`
  display: flex;
  justify-content: space-evenly;
  animation: cycle 14s linear 1;
  padding: 1rem;
  
 
  @keyframes cycle {
    0% {
      transform: translateX(-100%);

    }
    
    100% {
      transform: translateX(0);
    }
  }
`

export const SoxtText = styled(Typography)`
  font-size: 1.2rem;
  margin: 0 1rem;
  font-family: 'Inconsolata', monospace;
  padding: .5rem;
  text-transform: uppercase;
  flex: 0 0 auto;
  color: #3F3D55;
`
export const IconBox = styled("span")`
  padding: .5rem;
  display: flex;
  align-items: center;
  color: #3F3D55;
`