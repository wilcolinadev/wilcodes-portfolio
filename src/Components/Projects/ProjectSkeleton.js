import React from "react";
import {Skeleton} from "@mui/lab";
import {Stack} from "@mui/material";
import {styled} from "@mui/material/styles";

const SkeletonOne = styled(Skeleton)`
width: 95%
`
const ProjectSkeleton = ()=>{

    return(
        <Stack >
            <SkeletonOne variant="rectangular"/>
            <SkeletonOne   height={200} />
            <SkeletonOne variant="rectangular" />
            <SkeletonOne   height={200} />
        </Stack>

    )
};

export default ProjectSkeleton;