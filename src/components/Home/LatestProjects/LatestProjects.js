import React, {useEffect} from "react";
import { getDatabase, ref, set, get } from "firebase/database";


const LatestProjects = () => {



    useEffect(() => {
        const getProjects = async () => {
            const db = getDatabase();
            const data = await get(ref(db,'projects'));
            console.log(data.val());
        }
       getProjects();
    }, []);

    return (<>
        Hello
    </>)
};

export default LatestProjects