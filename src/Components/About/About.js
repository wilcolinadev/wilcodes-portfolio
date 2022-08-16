import React from "react";
import Footer from "../Footer/Footer";
import Navigation from '../Navigation/Navigation';
import {Wrapper} from "../Wrapper";
import Typography from "@mui/material/Typography";
const About = ()=>{
return(
    <Wrapper>
        <Navigation/>
        <Typography>
            About us
        </Typography>
        <Footer/>
    </Wrapper>
)
};

export default About;