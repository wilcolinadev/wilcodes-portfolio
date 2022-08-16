import React from "react";
import Footer from "../Footer/Footer";
import Navigation from '../Navigation/Navigation';
import {Wrapper} from "../Wrapper";
import Typography from "@mui/material/Typography";
const Projects = ()=>{
    return(
        <Wrapper>
            <Navigation/>
            <Typography>
               Projects
            </Typography>
            <Footer/>
        </Wrapper>
    )
};

export default Projects;