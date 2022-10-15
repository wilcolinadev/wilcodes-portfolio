import React from "react";
import {ProjectTitle} from "./ProjectStyles";
import {Grid} from "@mui/material";
import {ProjectImage} from "../../Home/FeaturedProjects/Project/ProjectStyles";
import ProjectAccordion from "../ProjectAccordion/ProjectAccordion";

const Project = (props) => {
    const {name, githubUrl, urlImage, url} = props;
    const defineImage = ()=>{
        if (Array.isArray(urlImage)) return urlImage[1];
        return urlImage;
    };
    return (

        <Grid item xs={12} md={6}>
            <ProjectTitle variant={"h2"}> {name} </ProjectTitle>
            <ProjectImage
                src={defineImage()}
                alt={'Image test'}/>
            <ProjectAccordion githubUrl={githubUrl} url={url}/>
        </Grid>

    )

};

export default Project;