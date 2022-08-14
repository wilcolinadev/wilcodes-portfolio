import React from "react";
import {ProjectBox, ProjectImage, ProjectTitle, ProjectDescription} from "./ProjectStyles";
import {Grid} from '@material-ui/core';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
const Project = ({name, url, urlImage}) => {

    const urlHandler = (url) => {
        if (Array.isArray(url)) {
            return url[1];
        } else {
            return url
        }
    }

    return (
        <Grid item md={6} style={{margin: '0 auto'}}>
            <ProjectBox>

                <ProjectTitle variant={'h5'} >
                    <a href={'/'}> {name}  </a> <ArrowCircleRightIcon style={{marginLeft:'6px'}} />
                </ProjectTitle>
                <ProjectDescription>
                    Application that will allow companies to keep on track of issues presented with their customers.

                </ProjectDescription>
                <ProjectImage src={urlHandler(urlImage)}/>


            </ProjectBox>
        </Grid>

    )
};

export default Project