import React from "react";
import Footer from "../Footer/Footer";
import Navigation from '../Navigation/Navigation';
import {Wrapper} from "../Wrapper";
import Typography from "@mui/material/Typography";
import ActionCall from "../ActionCall/ActionCall";
const Projects = ()=>{
    return(
        <Wrapper type={'projects'}>
            <Navigation page={'projects'}/>
            <Typography>
               Projects
            </Typography>
            <ActionCall/>
            <Footer/>
        </Wrapper>
    )
};

export default Projects;