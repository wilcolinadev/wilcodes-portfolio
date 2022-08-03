import {styled} from "@mui/material/styles";
import {ListItem, List, Box, Stack, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


export const Item = styled(ListItem)`
  color: #000;
  margin-left: 1rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  ${props => props.theme.breakpoints.up("sm")} {
  
  }
  ${props => props.theme.breakpoints.down("md")} {
    display: none;
   
  }
  ${props => props.theme.breakpoints.up("lg")} {
   
  }
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

export const Wrapper = styled(Grid)`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  background-color:rgba(0,0,0,0.006);
  top: 0;
  position: sticky;
  box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
`

export const Logo = styled(Typography)`
  color: #069985;
  text-shadow: 0 0 1px #000000;
  margin-left: 1rem;
  text-transform: uppercase;
  font-family: 'Inconsolata', monospace;
  letter-spacing: -1.5px;
  font-weight: bold;
`

export const ContactLink = styled(Stack)`
  color: #000;
  font-weight: 400;
  margin-right: 1rem;
  ${props => props.theme.breakpoints.down("sm")} {
    display: none;

  }
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

export const Identifier = styled('span')`
  position: absolute;
  background:#01B19C;
  border: 1px solid #000;
  border-radius: 60%;
  height: 12px;
  width: 12px;
  top: 45px;
`
export const BurgerController = styled(Box)`
  ${props => props.theme.breakpoints.up("md")} {
    display: none;
  }
`

export const Burger = styled((props)=>(
    <Button{...props} />
))`
  
  ${props => props.theme.breakpoints.down("md")} {
   position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 24px;
  line-height: 50px;
  padding: 0;
  background: transparent;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  margin-right: 1.5rem;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  align-items: center;
  color: #f3f3bd;
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.2rem;
    background: ${(props) =>
    props.open ? "#060505" : "#0b0b0b"};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 3px;
  }
  div:first-of-type {
    transform: ${(props) =>
    props.open ? "rotate(45deg)" : "rotate(0)"};
  }
  div:nth-of-type(2) {
    margin-top: 0.4rem;
    opacity: ${(props) => (props.open ? "0" : "1")};
    transform: ${(props) =>
    props.open ? "translateX(20px)" : "translateX(0)"};
  }
  div:nth-of-type(3) {
    margin-top: 0.4rem;
    transform: ${(props) =>
    props.open ? "rotate(-45deg)" : "rotate(0)"};
  }

  }
  
`
