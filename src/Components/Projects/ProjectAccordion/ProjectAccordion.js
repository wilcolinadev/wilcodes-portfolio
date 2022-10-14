import React from "react";
import { AccordionDetails, AccordionSummary, Stack} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloudIcon from "@mui/icons-material/Cloud";
import GitHubIcon from "@mui/icons-material/GitHub";
import {AccordionWrapper, ProjectDescription,ProjectButton, AccordionLabel, ButtonWrapper} from "./AccordionStyles";

export const ProjectAccordion = () => {
    return (<AccordionWrapper>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
        >
            <AccordionLabel sx={{color: 'text.secondary'}} >Show more!</AccordionLabel>
        </AccordionSummary>
        <AccordionDetails sx={{ padding:'0'}}>
            <ProjectDescription> In this Project I will build an application that will allow companies to keep
                on
                track of
                issues presented with their customers . It will be possible to create a record that will have a
                status, description and the basic information of the client. With it the issue can be addressed
                properly later if it cannot be solved at the moment.
            </ProjectDescription>

            <ButtonWrapper direction={'row'}>
                <ProjectButton color={'primary'} variant={'text'} startIcon={<CloudIcon/>}>
                    <a href={''} target={"_blank"}> Live project Link</a>
                </ProjectButton>
                <ProjectButton variant={'text'} startIcon={<GitHubIcon/>}>
                    <a href={''} target={"_blank"}> Github Link</a>
                </ProjectButton>
            </ButtonWrapper>
        </AccordionDetails>
    </AccordionWrapper>)
};

export default ProjectAccordion;