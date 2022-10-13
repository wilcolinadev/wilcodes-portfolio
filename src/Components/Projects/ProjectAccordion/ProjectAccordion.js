import React from "react";
import {Accordion, AccordionDetails, AccordionSummary, Stack} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import CloudIcon from "@mui/icons-material/Cloud";
import GitHubIcon from "@mui/icons-material/GitHub";
import {styled} from "@mui/material/styles";
import {Button} from "@material-ui/core";


const ProjectButton = styled(Button)`
  color: #3F3D55 !important;

  a {
    color: #3F3D55;
    text-decoration: none;
  }
`

const AccordionWrapper = styled(Accordion)`
  background-color: rgba(255, 255, 255, 0.7);
  width: 90%;
  border: none;
  box-shadow: none;

`
export const ProjectDescription = styled(Typography)`
  font-family: 'Open Sans', serif;

  ${props => props.theme.breakpoints.up("sm")} {
    font-size: 1.2rem;
  }


  ${props => props.theme.breakpoints.up("lg")} {
    font-size: 1.1rem;;
  }

  ${props => props.theme.breakpoints.up("xl")} {
    font-size: 1.2rem;
  }
`


export const ProjectAccordion = () => {
    return (<AccordionWrapper>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
        >
            <Typography sx={{color: 'text.secondary'}}>Show more!</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <ProjectDescription> In this Project I will build an application that will allow companies to keep
                on
                track of
                issues presented with their customers . It will be possible to create a record that will have a
                status, description and the basic information of the client. With it the issue can be addressed
                properly later if it cannot be solved at the moment.
            </ProjectDescription>

            <Stack direction={'row'}>
                <ProjectButton color={'primary'} variant={'text'} startIcon={<CloudIcon/>}>
                    <a href={''} target={"_blank"}> Live project Link</a>
                </ProjectButton>
                <ProjectButton variant={'text'} startIcon={<GitHubIcon/>}>
                    <a href={''} target={"_blank"}> Github Link</a>
                </ProjectButton>

            </Stack>
        </AccordionDetails>
    </AccordionWrapper>)
};

export default ProjectAccordion;