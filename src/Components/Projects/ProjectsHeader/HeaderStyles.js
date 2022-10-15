import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";


export const HeaderWrapper = styled(Box)`
  padding: 1rem;
  text-align: center;

  img:first-of-type {
    display: none;
  }

  ${props => props.theme.breakpoints.up("sm")} {
    img:first-of-type {
      display: block;
    }
   
  }

  img {
    width: 90%;
    height: 200px;
    margin-top: 2rem;

    ${props => props.theme.breakpoints.up("sm")} {
      width: 300px;
    }
  }
`
export const HeaderTitle = styled(Typography)`
  margin: 1rem 0;
  font-weight: normal;
  font-size: 2rem;
  font-family: 'Open Sans', serif;
  text-align: center;
  ${props => props.theme.breakpoints.up("md")} {
    font-size: 4rem;
  }
`

export const HeaderDescription = styled(Typography)`
  margin: .5rem;
  font-size: 1.2rem;
  font-family: 'Inconsolata', monospace;
  ${props => props.theme.breakpoints.up("sm")} {
   width: 60%;
    margin: 1.5rem auto;
  }
  ${props => props.theme.breakpoints.up("lg")} {
    width: 30%;
    margin: 0 auto;
  }
`