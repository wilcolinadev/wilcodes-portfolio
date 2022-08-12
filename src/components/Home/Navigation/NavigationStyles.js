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
  justify-content: space-around;
  align-items: center;
  padding: .5rem;
  font-weight: 400;

  & a {

    text-decoration: none;
  }

  & * {
    font-family: 'Inconsolata', monospace;
  }

  ${props => props.theme.breakpoints.down("md")} {
    justify-content: space-between;

  }
`

export const Wrapper = styled(Grid)`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  background-color: #f8f7f7;
  top: 0;
  position: sticky;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, .2);
  z-index: 99;
`

export const Logo = styled(Typography)`
  color: #000;
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


export const Identifier = styled('span')`
  position: absolute;
  background: #01B19C;
  border: 1px solid #000;
  border-radius: 60%;
  height: 10px;
  width: 10px;
  top: 45px;
`
export const BurgerController = styled(Box)`
  ${props => props.theme.breakpoints.up("md")} {
    display: none;
  }
`

export const Burger = styled((props) => (<Button{...props} />))`

  ${props => props.theme.breakpoints.down("md")} {
    padding: .5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    width: 24px;
    line-height: 50px;
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

    &:hover {
      background-color: transparent;
    }

    div {
      width: 2rem;
      height: 0.2rem;
      background: ${(props) => props.open ? "#313030" : "#0b0b0b"};
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 3px;
    }

    div:first-of-type {
      transform: ${(props) => props.open ? "rotate(45deg)" : "rotate(0)"};
    }

    div:nth-of-type(2) {
      margin-top: 0.4rem;
      opacity: ${(props) => (props.open ? "0" : "1")};
      transform: ${(props) => props.open ? "translateX(20px)" : "translateX(0)"};
    }

    div:nth-of-type(3) {
      margin-top: 0.4rem;
      transform: ${(props) => props.open ? "rotate(-45deg)" : "rotate(0)"};
    }

  }

`
