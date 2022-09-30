import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";


export const Title = styled(Typography)`
margin-bottom: 1rem;
  
`

export const Description = styled(Typography)`
  font-family: 'Inconsolata', monospace;
  font-weight: 400;
  
`
export const HeaderBox = styled(Box)` 
  
  margin: 1rem auto;
  display:flex;
  padding: 1rem;
  
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  flex-flow: column nowrap;
  ${props => props.theme.breakpoints.up("md")} {
    flex-flow: row nowrap;
    padding: 0;
    margin: 2rem auto;
    width: 60%;
    
  }
  
  
`
export const ContactImage = styled('img')`
  width: 90%;
  height: auto;
  margin-top: 2rem;
  ${props => props.theme.breakpoints.up("md")} {
    width: 300px;
    margin-left: 4rem;
  }
`