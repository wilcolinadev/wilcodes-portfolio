import React from "react";
import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";
import bg from "../../assets/Fluid-10s-1235px.svg"

export const Wrapper = styled(Box)`
  background-image: url(${bg});
  height: auto;
  width: 100%;
 background-position:center ;
  background-size: cover;
  z-index: 99;

 `
  export const OverFlow= styled(Box)`
    overflow-x: hidden;
`