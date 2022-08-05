import {styled} from "@mui/material/styles";
import {ListItem, Stack, Typography} from "@mui/material";

export const SkillsBox = styled(Stack)`
  background-color: #575571;
  height: auto;
  padding: 1rem;
  box-sizing: border-box;

`;

export const SkillsTitle = styled(Typography)`
  color: #fff;
  text-align: center;
  font-family: 'Inconsolata', monospace;
  letter-spacing: -1.5px;
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  
  ${props => props.theme.breakpoints.up("sm")} {
    font-size: 2.5rem;
  }

`

export const Element = styled(ListItem)`
  color: #fff;
  display: flex;
  flex-flow: row;
  justify-content: space-between;


`
export const SkillsRow = styled(Stack)`
  
  transform: translate3d(0, 0, 0);
  animation: 30s linear .2s infinite running translateinfinite;
  margin-top: 1rem;
  @keyframes translateinfinite {
    100% {
      transform: translateX(calc(-100px * 24));
    }
    
  }
`