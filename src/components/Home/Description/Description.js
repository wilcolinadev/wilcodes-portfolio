import React from "react";
import Typography from "@mui/material/Typography";
import {Box, Grid} from "@mui/material";
import {GridController} from "./DescriptionStyles";
const Description = ()=>{
    return(

        <GridController>
            <Typography variant={"h1"}>
                UI/UX Developer
            </Typography>

            <Typography >
                I love to face new challenges because they help me to be better in my every day,
                and professional life. For that reason, I stay motivated toward my aspirations
                and the completion of my goals.
                I am currently living in Houston, and majoring in web development applications.
            </Typography>

        </GridController>
    )
};


export default Description