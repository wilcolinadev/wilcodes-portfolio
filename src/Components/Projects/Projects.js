import React from "react";
import Footer from "../Footer/Footer";
import Navigation from '../Navigation/Navigation';
import {Wrapper} from "../Wrapper";
import ActionCall from "../ActionCall/ActionCall";
import Project from "./Project/Project";
import ProjectsHeader from "./ProjectsHeader/ProjectsHeader";
import useProjects from "../../hooks/useProjects";
import {ProjectWrapper} from "./Project/ProjectStyles";

const Projects = () => {
    const serverProjects = useProjects('projects');

    return (<Wrapper type={'projects'}>
            <Navigation page={'projects'}/>
            <ProjectsHeader/>
            <ProjectWrapper container>
                {serverProjects.map((projectData, i) => <Project key={i} name={projectData.name} url={projectData.url}
                                                                 githubUrl={projectData.githubUrl}
                                                                 urlImage={projectData.urlImage}/>)}
            </ProjectWrapper>

            <ActionCall/>
            <Footer/>
        </Wrapper>)
};

export default Projects;