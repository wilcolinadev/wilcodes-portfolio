import React from "react";
import Footer from "../Footer/Footer";
import Navigation from '../Navigation/Navigation';
import {Wrapper} from "../Wrapper";
import Typography from "@mui/material/Typography";
const Contact = ()=>{
    return(
        <Wrapper>
            <Navigation/>
            <Typography>
                Contact me
            </Typography>
            <Footer/>
        </Wrapper>
    )
};

export default Contact;