import React, { useState} from "react";
import Project from "./Project/Project";
import BoxIcon from "../../BoxIcon";
import {Wrapper, MainWrapper, Title, Description, ProjectsLink} from "./FeaturedProjectStyles";
import Link from "../../../Link";
import useProjects from "../../../hooks/useProjects";

const FeaturedProjects = () => {
    const [logHover, isLogHover] = useState(false);
   const serverProjects = useProjects('featuredProjects');
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
            {serverProjects.map(project => {
                return (<Project key={project.name} name={project.name} urlImage={project.urlImage} url={project.url}
                                 description={project.description}/>)
            })}
        </Wrapper>
    </MainWrapper>)
};

export default FeaturedProjects