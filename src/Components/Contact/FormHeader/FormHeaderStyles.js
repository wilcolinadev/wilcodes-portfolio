import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";


export const Title = styled(Typography)`
  margin-bottom: 1rem;
  ${props => props.theme.breakpoints.up("sm")} {
    font-size: 2.8rem;
  }

`

export const Description = styled(Typography)`
  font-family: 'Inconsolata', monospace;
  font-weight: 400;

  ${props => props.theme.breakpoints.up("sm")} {
    font-size: 1.5rem;
  }

  ${props => props.theme.breakpoints.up("md")} {


  }

`
export const HeaderBox = styled(Box)`

  margin: 1rem auto;
  display: flex;
  padding: 1.5rem;

  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  flex-flow: column nowrap;
  width: 90%;
  ${props => props.theme.breakpoints.up("sm")} {
    flex-flow: row nowrap;
    padding: 1rem;

    

  }

  ${props => props.theme.breakpoints.up("lg")} {
    flex-flow: row nowrap;
    padding: 0;
    margin: 2rem auto;
    width: 60%;

  }


`
export const ContactImage = styled('img')`
  width: 80%;
  height: auto;
  margin-top: 2rem;

  ${props => props.theme.breakpoints.up("sm")} {
    width: 280px;
    margin-left: 4rem;
  }

  ${props => props.theme.breakpoints.up("md")} {
    width: 300px;
    
  }
`