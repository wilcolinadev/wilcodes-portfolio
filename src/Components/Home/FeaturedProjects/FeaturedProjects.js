import React, {useEffect, useState} from "react";
import {getDatabase, ref, get} from "firebase/database";
import Project from "./Project/Project";
import BoxIcon from "../../BoxIcon";
import {Wrapper, MainWrapper, Title, Description, ProjectsLink, InnerText} from "./FeaturedProjectStyles";
import Link from "../../../Link";

const FeaturedProjects = () => {
    const [projects, setProjects] = useState([]);
    const [logHover, isLogHover] = useState(false);
    useEffect(() => {
        const getProjects = async () => {
            const db = getDatabase();
            const data = await get(ref(db, 'featuredProjects'));
            const projectsObject = data.val();
            const projects = [];
            Object.values(projectsObject).forEach(project => {
                projects.push(project)
            });
            setProjects(projects);
        }
        getProjects();
    }, []);

    return (<MainWrapper>
        <Title variant={'h3'}>Feature Projects</Title>

        <Description>Get a first Impression on my feature projects</Description>
        <Link href='/projects' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
              onMouseEnter={() => isLogHover(true)} onMouseLeave={() => isLogHover(false)}>
            <ProjectsLink>
                Show me more!
            </ProjectsLink>
            <BoxIcon hoverState={logHover}/>
        </Link>

        <Wrapper container fluid="true">
            {projects.map(project => {
                return (<Project key={project.name} name={project.name} urlImage={project.urlImage} url={project.url}
                                 description={project.description}/>)
            })}
        </Wrapper>
    </MainWrapper>)
};

export default FeaturedProjects