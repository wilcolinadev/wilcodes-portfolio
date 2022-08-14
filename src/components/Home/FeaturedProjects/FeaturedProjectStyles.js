import {styled} from "@mui/material/styles";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

export const Wrapper =styled(Grid)`
  
  margin-top: 2rem;
`

export const MainWrapper =styled(Grid)`

  background: #e1f1ed;

  * {
    text-decoration: none;
  }

`

export const Title = styled(Typography)`
  text-align: center;
  font-family: 'Inconsolata', monospace;
  font-weight: bold;
  padding: 5rem 0 1rem 0;
  color: #000;
`
export const Description = styled(Typography)`
text-align: center;
  font-family: 'Open Sans', serif;
  font-weight: bold;
  color: #000;
  font-size: 1.2rem;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
`

export const ProjectsLink = styled(Typography)`
  text-align: center;
  font-family: 'Inconsolata', monospace;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  color: #3F3D55;



`
export const InnerText = styled(Typography)`
  display: flex;
  align-items: center;
`
