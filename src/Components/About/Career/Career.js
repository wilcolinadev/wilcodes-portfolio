import React from "react";
import Typography from "@mui/material/Typography";
import {CareerWrapper} from "./CareerStyles";
import CareerTimeline from "./CareerTimeline/CareerTimeline";

const Career = () => {
    return (<CareerWrapper>
        <Typography variant={'h2'} textAlign={'center'}>
            Career Preparation
        </Typography>
        <CareerTimeline/>
    </CareerWrapper>)
};

export default Career;