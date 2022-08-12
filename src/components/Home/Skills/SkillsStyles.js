import {styled} from "@mui/material/styles";
import {ListItem, Stack, Typography, Grid} from "@mui/material";

export const SkillsBox = styled(Stack)`
  background-color: #575571;
  height: auto;
  padding: 1rem;
  box-sizing: border-box;
  overflow: hidden;
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
  margin: .5rem 1rem;
  animation: translateinfinite 1s infinite alternate;
  text-align: center;
  position: relative;
  transition: 3ms ease-in-out;
  display: flex;
  flex-flow: column;
  
  @keyframes translateinfinite {
    to { transform: scale(1.1); }
    
  }

  ${props => props.theme.breakpoints.up("sm")} {
    margin: 1rem 2rem;
  }

`
export const SkillsRow = styled(Grid)`
 
  margin: .8rem 0;
  justify-content: center;
  ${props => props.theme.breakpoints.up("sm")} {
    margin: 1rem 0;
    
  }
`

export const Label = styled(Typography)`
  top: 100%;
  position: absolute;
  box-sizing: border-box;
`