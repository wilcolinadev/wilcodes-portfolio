import React from "react";
import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";
import bg from "../assets/home-bg.svg"
import bgAbout from "../assets/home-bg.svg";
import aboutBg from "../assets/about-bg1.svg"
import contactBg from "../assets/contact-bg1.svg"
const getBg = (type) => {
    switch (type) {
        case 'home':
            return bg;
        case 'about':
            return aboutBg;
        case 'contact':
            return contactBg
        default:
            return bgAbout
    }

}

export const Wrapper = styled((props) => <Box {...props}/>)`


  background-image: url(${(props) => getBg(props.type)});
  height: auto;
  width: 100%;
  background-position: center;
  background-size: cover;
  z-index: 99;
  background-color: #ffffff;
`


export const OverFlow = styled(Box)`
  overflow-x: hidden;
`

