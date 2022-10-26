import React from "react"
import {TimelineOppositeContent} from "@mui/lab";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from '@mui/icons-material/School';
import TimelineContent from "@mui/lab/TimelineContent";
import Typography from "@mui/material/Typography";
import {TimelineItem} from "@mui/lab";
import EngineeringIcon from '@mui/icons-material/Engineering';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import DataObjectIcon from '@mui/icons-material/DataObject';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';

const TimelineStep = (props) => {
    const {year, about, type, institution, location} = props;
    const determineIcon = () => {
        const newType = type.toLowerCase();
        switch (newType) {
            case 'college':
                return <SchoolIcon/>;
            case 'freelance':
                return <EngineeringIcon/>;
            case 'online software academy':
                return <CastForEducationIcon/>;
            case 'bootcamp':
                return <DataObjectIcon/>;
            case 'organization':
                return <AssuredWorkloadIcon/>;
            default:
                return <SchoolIcon/>
        }
    };
    return (<TimelineItem>
        <TimelineOppositeContent
            sx={{m: 'auto 0'}}
            align="right"
            variant="body2"
            color="text.secondary"
        >
            {year}
            <Typography style={{textTransform:'capitalize'}}>{about}</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator sx={{
            height: '170px',
            color: '#3F3D55',

        }}>
            <TimelineConnector/>
            <TimelineDot sx={{
                color: '#3F3D56',
                backgroundColor: 'transparent'
            }}>
                {determineIcon()}
            </TimelineDot>
            <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent sx={{py: '14px', px: 2}}>
            <Typography variant="h6" component="span" style={{textTransform:'capitalize'}}>
                {institution}

            </Typography>

            <Typography>{location}</Typography>

        </TimelineContent>

    </TimelineItem>)

};


export default TimelineStep;

