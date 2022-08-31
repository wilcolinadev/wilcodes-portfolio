import {ref, getDatabase, set} from "firebase/database";
import React from "react";

const db = getDatabase();
const reference = ref(db, 'career-data');

const useDb = () => {
    const updateDb = async (obj) => {
        const response = await set(reference, obj);
        console.log(response);
    }
    const databaseData = {
        cadif1: {
            year: '2015',
            about: 'Data structures and algorithms',
            type: 'Bootcamp',
            institution: 'cadif1',
            link: 'https://cadif1.com/',
            location: 'Barquisimeto, Venezuela'
        },
        ferminToro: {
            year: '2016-2018',
            about: 'Engineer degree',
            type: 'University',
            institution: 'Fermin Toro',
            link: 'http://www.uft.edu.ve/',
            location: 'Cabudare, Venezuela'
        },
        others:{
            year: '2018-2020',
            about: 'Frontend developer path',
            type: 'Online software academy',
            institution: 'Platzi',
            link: 'https://platzi.com/',
            location: 'Remote'
        },
        sanJacinto: {
            year: '2020-2022',
            about: 'Web development application',
            type: 'College',
            institution: 'San Jacinto College',
            link: 'https://publications.sanjac.edu/areas-study/science-technology-engineering-math/cit-web-applications-development-specialty-aas/#planofstudytext',
            location: 'Houston, Texas'
        },
        wildlifeResponse: {
            year: '2021',
            about: 'Web Development / Design',
            type: 'Freelance',
            institution: 'Wildlife Response Services',
            link: 'https://www.wildliferesponse.net/',
            location: 'Seabrook, Texas'
        },
        phiThetaKappa:{
            year: '2022',
            about: 'Honor Society',
            type: 'Organization',
            institution: 'Phi Theta Kappa',
            link: 'https://www.ptk.org/',
            location: 'Houston, Texas'
        }

    };

    React.useEffect(() => {
        updateDb(databaseData);
    }, [])
}
export default useDb;
