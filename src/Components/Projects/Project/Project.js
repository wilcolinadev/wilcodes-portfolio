import React from "react";
import {ProjectWrapper, ProjectTitle} from "./ProjectStyles";
import {Grid} from "@mui/material";
import {ProjectImage} from "../../Home/FeaturedProjects/Project/ProjectStyles";
import ProjectAccordion from "../ProjectAccordion/ProjectAccordion";

const Project = () => {

    return (
        <ProjectWrapper container>
            <Grid item xs={12} md={6}>
                <ProjectTitle variant={"h2"}> Project Title</ProjectTitle>
                <ProjectImage
                    src={'https://res.cloudinary.com/djf9jqpml/image/upload/v1659758720/Issuestrack-1_gw9irw.png'}
                    alt={'Image test'}/>
                <ProjectAccordion/>
            </Grid>
            <Grid item xs={12} md={6}>
                <ProjectTitle variant={"h2"}> Project Title</ProjectTitle>
                <ProjectImage
                    src={'https://res.cloudinary.com/djf9jqpml/image/upload/v1659758720/Issuestrack-1_gw9irw.png'}
                    alt={'Image test'}/>
                <ProjectAccordion/>


            </Grid>

        </ProjectWrapper>
    )

};

export default Project;