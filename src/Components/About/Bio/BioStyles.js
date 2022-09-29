import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";
import Link from "@mui/material/Link";


export const BioWrapper = styled(Box)`
  background-color: rgba(255, 255, 255, 0.7);
  border-top: 2px solid #3F3D55;
  padding: 2rem;
  ${props => props.theme.breakpoints.up("md")} {
    margin-top: 2.5rem;
  }
 
`

export const BioTittle = styled(Typography)`
  padding: .5rem 0;
`
export const BioImage = styled('img')`
  width: 90%;
  height: auto;
  margin-top: 2rem;

  ${props => props.theme.breakpoints.up("md")} {
    width: 300px;
    margin-left: 4rem;
  }
`
export const BioContentBox = styled(Box)`
  display: flex;
  padding: .5rem;
  box-sizing: border-box;
  justify-content: center;
  flex-flow: column nowrap;

  ${props => props.theme.breakpoints.up("md")} {
    flex-flow: row nowrap;
    padding: 1rem;
    margin-top: .5rem;
  }

`
export const BioSpan = styled('span')`
  font-size: 2rem;
  text-transform: uppercase;
`

export const BioLink = styled(Link)`
  font-size: 1.1rem;
  
  margin: 2rem 0;
  color: #3F3D55;
  display: flex;
  align-items: center;
 
  font-weight: bold;
  text-decoration-color: #3F3D55;
  
  &:hover {
    transition: .5s ease-in-out;
    text-decoration-color: #20c976;
  }
  ${props => props.theme.breakpoints.up("md")} {
    justify-content: flex-end;
  }
  
`