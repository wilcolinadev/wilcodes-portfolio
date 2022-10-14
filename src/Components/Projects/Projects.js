import React from "react";
import Footer from "../Footer/Footer";
import Navigation from '../Navigation/Navigation';
import {Wrapper} from "../Wrapper";
import Typography from "@mui/material/Typography";
import ActionCall from "../ActionCall/ActionCall";
import Project from "./Project/Project";
import ProjectsHeader from "./ProjectsHeader/ProjectsHeader";
const Projects = ()=>{
    return(
        <Wrapper type={'projects'}>
            <Navigation page={'projects'}/>
           <ProjectsHeader/>
            <Project/>
            <ActionCall/>
            <Footer/>
        </Wrapper>
    )
};

export default Projects;