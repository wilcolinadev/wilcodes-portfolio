import React from "react";
import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";
import bg from "../../assets/bg.svg"

export const Wrapper = styled(Box)`
  background-image: url(${bg});
  height: auto;
  width: 100%;
  background-position: center;
  background-size:cover ;
  z-index: 99;
  overflow-x:unset ;
`