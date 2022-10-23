import React, {useState} from "react";
import {
    ProjectBox,
    ProjectImage,
    ProjectTitle,
    ProjectDescription,

} from "./ProjectStyles";
import {Grid} from '@material-ui/core';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Link from "../../../../Link"
const Project = ({name, url, urlImage, description}) => {

    const urlHandler = (url) => {
        if (Array.isArray(url)) {
            return url[1];
        } else {
            return url
        }
    }
    const [isImageHover, setIsImageHover] = useState(false);


    return (
        <Grid item md={6} style={{margin: '0 auto'}}>
            <ProjectBox>

                <ProjectTitle variant={'h5'}>
                    <Link href={'/projects'} style={{display:'flex',alignItems:'center'}}> {name}  <ArrowCircleRightIcon style={{marginLeft: '6px'}}/> </Link>
                </ProjectTitle>

                <ProjectDescription>
                    {description}

                </ProjectDescription>

                <ProjectImage src={urlHandler(urlImage)}/>


            </ProjectBox>
        </Grid>

    )
};

export default Project