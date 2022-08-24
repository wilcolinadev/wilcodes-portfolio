import {styled} from "@mui/material/styles";
import {Box, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";

export const AboutImage = styled('img')`
  width: 90%;
  height: auto;
  margin-top: 2rem;
  ${props => props.theme.breakpoints.up("md")} {
    width: 400px;
    margin-left: 4rem;
  }
`

export const IntroductionBox = styled(Box)` 
  display:flex;
  padding: 1rem;
  margin-top: 1rem;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  ${props => props.theme.breakpoints.up("md")} {
   flex-flow: row nowrap;
    padding: 2rem;
  }
`

export const TextController = styled(Stack)`

  ${props => props.theme.breakpoints.up("md")} {
    width: 35%;
  }
`
export const Description =styled(Typography)`
  font-family: 'Open Sans', serif;
  text-align: justify;
  margin-top: .5rem;

  ${props => props.theme.breakpoints.up("sm")} {
    font-size: 1.2rem;
  }

  
  ${props => props.theme.breakpoints.up("lg")} {
    font-size: 1.1rem;
  ;
  }

  ${props => props.theme.breakpoints.up("xl")} {
    font-size: 1.2rem;
  }


`



