import React from "react";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";

const ActionCallWrapper = styled('div')`


  background-color: #ffffff;

`
const ActionCallMainBox = styled('div')`
  background-color: #3F3D55;
  border-radius: 50px 50px 0 0;
  padding: 1rem;
  text-align: center;

  ${props => props.theme.breakpoints.up("sm")} {
    border-radius: 100px 100px 0 0;
  }
`

const ActionCallText = styled(Typography)`
  font-size: 1rem;
  text-align: center;
  margin: 0 auto;
  width: 80%;
  color: #fff;

  box-sizing: border-box;
  font-family: 'Inconsolata', monospace;
  animation: translateinfinite 1s infinite alternate;
  ${props => props.theme.breakpoints.up("md")} {
    font-size: 1.6rem;
    
  }
  ${props => props.theme.breakpoints.up("sm")} {
    font-size: 1.4rem;
  }
  ${props => props.theme.breakpoints.up("lg")} {
    font-size: 1.5rem;
    width: 90%;
  }
  @keyframes translateinfinite {
    to {
      transform: scale(1.05);
    }
  }
`

const ActionCall = () => {
    return (
        <ActionCallWrapper>
            <ActionCallMainBox>
                <ActionCallText>
                    Get in touch and let's build something amazing! 👋🏼
                </ActionCallText>
            </ActionCallMainBox>
        </ActionCallWrapper>
    )
};

export default ActionCall;
