import React from "react";
import Footer from "../Footer/Footer";
import Navigation from '../Navigation/Navigation';
import {Wrapper} from "../Wrapper";
import Typography from "@mui/material/Typography";
import ActionCall from "../ActionCall/ActionCall";
import Project from "./Project/Project";
const Projects = ()=>{
    return(
        <Wrapper type={'projects'}>
            <Navigation page={'projects'}/>
            <Typography variant={'h1'}>
               This is my work so far!
            </Typography>
            <Project/>
            <ActionCall/>
            <Footer/>
        </Wrapper>
    )
};

export default Projects;