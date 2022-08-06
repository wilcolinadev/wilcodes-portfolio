import React, {useEffect} from "react";
import { getDatabase, ref, set } from "firebase/database";


const LatestProjects = () => {

  const testApp = async () => {
      const db = await getDatabase();
        console.log(db);
    }

    useEffect(() => {
       testApp();
    }, []);

    return (<>
        Hello
    </>)
};

export default LatestProjects