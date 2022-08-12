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
  background: transparent;
  border: 1px solid #666565;
  border-radius: 60%;
  width: 40px;
  height: 40px;
  margin-right: .5rem;
  cursor: pointer;
  margin-left: .8rem;
  box-shadow: ${props => props.hoverState ? "6px 0 #464545FF" : 'none'};

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