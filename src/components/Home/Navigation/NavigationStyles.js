import {styled} from "@mui/material/styles";
import {ListItem, List, Box} from "@mui/material";
import Typography from "@mui/material/Typography";


export const Item = styled(ListItem)`
  color: #20b2aa;
`

export const UList = styled(List)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

export const Wrapper = styled(Box)`
  width: 100%;
  height: 60px;
  background-color:#000;
`

export const Logo = styled(Typography)`
color: #fff;
  
`
