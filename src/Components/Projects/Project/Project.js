import React from "react";
import {ProjectTitle} from "./ProjectStyles";
import {Grid} from "@mui/material";
import ProjectAccordion from "../ProjectAccordion/ProjectAccordion";
import ProjectSkeleton from "../ProjectSkeleton";
import {ProjectImage} from "../../Home/FeaturedProjects/Project/ProjectStyles";

const Project = (props) => {
    const {name, githubUrl, urlImage, url, description} = props;
    const defineImage = () => {
        if (Array.isArray(urlImage)) return urlImage[1];
        return urlImage;
    };


    const determineRender = () => {
        if (!urlImage) {
            return <ProjectSkeleton/>
        } else {
            return (<div>
                <ProjectTitle variant={"h2"}> {name} </ProjectTitle>

                <ProjectImage
                    src={defineImage()}
                    alt={name}/>


                <ProjectAccordion githubUrl={githubUrl} url={url} description={description}/></div>)
        }
    }

    return (<Grid item xs={12} md={6}>
        {determineRender()}
    </Grid>)

};

export default Project;