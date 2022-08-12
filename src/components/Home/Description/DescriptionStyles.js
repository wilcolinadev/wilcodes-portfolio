import {styled} from "@mui/material/styles";
import {Grid, Button, Box} from "@mui/material";
import Typography from "@mui/material/Typography";


export const GridController = styled(Grid)`
  width: 100%;
  box-sizing: border-box;
  height: auto;
  padding: .5rem;
  margin-bottom: 2rem;
  ${props => props.theme.breakpoints.up("lg")} {
    width: 60%;
    padding: 1rem;
  }
`

export const MainTitle = styled(Typography)`

  font-weight: bold;
  font-family: 'Inconsolata', monospace;
  box-sizing: border-box;
  font-size: 5rem;

  ${props => props.theme.breakpoints.down("sm")} {
    font-size: 4rem;
  }

  ${props => props.theme.breakpoints.up("sm")} {
    font-size: 5rem;
  }


`;

export const MainDescription = styled(Typography)`
  font-family: 'Open Sans', serif;
  text-align: justify;
  margin-top: .5rem;
  width: 90%;

  ${props => props.theme.breakpoints.up("sm")} {
    font-size: 1.2rem;
    width: 80%;
  }

  ${props => props.theme.breakpoints.up("md")} {
    width: 70%;
  }
  ${props => props.theme.breakpoints.up("lg")} {
    font-size: 1.1rem;
    width: 65%;
  }
  ${props => props.theme.breakpoints.up("xl")} {
    font-size: 1.2rem;
    width: 60%;
  }

  
  


`;

export const MainButton = styled(Button)`
  margin-top: .5rem;
  font-size: 1.3rem;
  border-radius: 10px;
  text-transform: unset;
  font-family: 'Inconsolata', monospace;
  letter-spacing: -1px;
  
  &:hover {
    transition: .4ms ease-in-out;
    background-color: transparent;
  }
  ${props => props.theme.breakpoints.up("sm")} {
    font-size: 2.2rem;
    margin-top: 1rem;
  }
`

export const ImageS = styled('img')`
  width: 250px;
  height: 250px;
  ${props => props.theme.breakpoints.up("sm")} {
    width: 350px;
    height: 350px;
  }
 
  
`
export const ImageBox = styled(Box)`
  ${props => props.theme.breakpoints.down("sm")} {
    text-align: center;
  }
`