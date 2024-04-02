import React, { useEffect, useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import { get, getDatabase, ref } from 'firebase/database';
import TimelineStep from './TimelineItem/TimelineItem';

const CareerTimeline = () => {
  const [careerData, setCareerData] = useState([]);

  useEffect(() => {
    const sortArray = (array) => {
      // Sort the array by order property
      return array.sort((a, b) => {
        return a.order - b.order;
      });
    };

    const getData = async () => {
      const db = getDatabase();
      const data = await get(ref(db, 'career-data'));
      let serverData = [];
      Object.values(data.val()).forEach((project) => {
        serverData.push(project);
      });
      const orderedCollection = sortArray(serverData);
      setCareerData(orderedCollection);
    };
    getData();
  }, []);

  return (
    <>
      <Timeline position="left" sx={{ margin: 0 }}>
        {careerData.map((background, i) => (
          <TimelineStep
            key={i}
            year={background.year}
            about={background.about}
            type={background.type}
            institution={background.institution}
            id={background.about}
            location={background.location}
          />
        ))}
      </Timeline>
    </>
  );
};

export default CareerTimeline;
