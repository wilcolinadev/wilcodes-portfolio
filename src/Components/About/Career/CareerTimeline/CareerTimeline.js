import React from "react";
import {TimelineBox} from "../CareerStyles";
import Timeline from '@mui/lab/Timeline';
import TimelineStep from "./TimelineItem/TimelineItem";

const CareerTimeline = () => {
    const data = [{
        year: '2016', about: 'Data structures and Algorithms', type: 'Bootcamp', institution: 'cadif1', link: ''
    }, {
        year: '2017', about: 'Engineer Degree', type: 'University', institution: 'Fermin Toro', link: ''
    },
        {
            year: '2017', about: 'Engineer Degree', type: 'University', institution: 'Fermin Toro', link: ''
        }


    ];


    return (<TimelineBox>

        <Timeline position="alternate">
            {data.map(background =>(
                <TimelineStep year={background.year} about={background.about} type={background.type}
                              institution={background.institution} id={background.about}/>
            ))}
        </Timeline>

    </TimelineBox>)
};

export default CareerTimeline;