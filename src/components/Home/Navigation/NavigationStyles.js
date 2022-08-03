import {styled} from "@mui/material/styles";
import {ListItem, List, Box, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";


export const Item = styled(ListItem)`
  color: #000;
  margin-left: 1rem;
  font-size: 1.5rem;
  
`

export const UList = styled(List)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: .5rem;
  font-weight: 400;
  & a{
    
    text-decoration: none;
  }
  & *{
    font-family: 'Inconsolata', monospace;
  }
`

export const Wrapper = styled(Box)`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  background-color:rgba(0,0,0,0.005);
  top: 0;
  position: sticky;
  box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
`

export const Logo = styled(Typography)`
  color: #000;
  margin-left: 1rem;
  text-transform: uppercase;
  font-family: 'Inconsolata', monospace;
  font-weight: bold;
  
  `

export const ContactLink = styled(Stack)`
  color: #000;
  font-weight: 400;
  margin-right: 1rem;

`

export const BoxIcon = styled(props => (
    <Box {...props} />
))`

  background: #01B19C;
  border: 1px solid #000;
  border-radius: 60%;
  align-items: center;
  height: 28px;
  margin-right: .5rem;
  cursor: pointer;
  box-shadow: ${props => props.hoverState ? "4px 0 #000" : 'none'};
  &:hover {
    transition: .4ms ease-in-out;
    
  }
`
