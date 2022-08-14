import React from "react";
import Image from "next/image";
import {ProjectBox} from "./ProjectStyles";
import {Grid} from '@material-ui/core'

const Project = ({name, url, urlImage})=>{

    const urlHandler = (url)=>{
        if (Array.isArray(url) ){
            return url[0];
        }else {
            return url
        }
    }

    return(
        <Grid item md={6} style={{margin: '0 auto'}} >
            <ProjectBox>


            <img src={urlHandler(urlImage)}  height={'300px'} width={'450px'} />
            <p key={name}>
                {name}
            </p>
            <a href={'/'}> {name} link </a>
            </ProjectBox>
        </Grid>

    )
};

export default Project