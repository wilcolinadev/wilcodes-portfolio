import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";


export const FooterBox = styled('footer')`
  background-color: #f8f7f7;
  border-top: 2px solid #3F3D55;
  padding: 1rem;
 
  *{
    text-decoration: none;
    font-family: 'Open Sans', serif;
    color: #3F3D55;
  }

`
export const FooterLink = styled(Typography)`
  margin: 0 .5rem;
  font-size: 1rem;
  text-transform: uppercase;

  &:hover {
    transition: .4ms ease-in-out;
    color: #0cb978;

  }
`

