import React from "react";
import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const Icon = styled(props => (
    <Box {...props} />
))`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #01B19C;
  border: 1px solid #000;
  border-radius: 60%;
  width: 28px;
  height: 28px;
  margin-right: .5rem;
  cursor: pointer;
  margin-left: .8rem;
  box-shadow: ${props => props.hoverState ? "4px 0 #000" : 'none'};

  &:hover {
    transition: .4ms ease-in-out;
  }
`

const BoxIcon = ({hoverState}) => {

    return (
        <Icon hoverState={hoverState}>
            <TrendingFlatIcon/>
        </Icon>
    )

};

export default BoxIcon;