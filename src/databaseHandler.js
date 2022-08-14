import {ref, getDatabase,set} from "firebase/database";
import React from "react";
const db = getDatabase();
const reference = ref(db,'featuredProjects');

const useDb = ()=>{
    const updateDb = async (obj)  =>{
        const response =  await set(reference,obj);
        console.log(response);
    }
    const databaseData = {

        issuestrack:{
            name:'Issuestrack',
            urlImage:['https://res.cloudinary.com/djf9jqpml/image/upload/v1659758720/Issuestrack-1_gw9irw.png','https://res.cloudinary.com/djf9jqpml/image/upload/v1659758716/IssuesTrack_ymjpfv.png'],
            url:'https://main--benevolent-clafoutis-fee81f.netlify.app/'

        },
        planetsApp:{
            name:'The Planets',
            urlImage:'https://res.cloudinary.com/djf9jqpml/image/upload/v1659758718/Planets_lmdwod.png',
            url:'https://elegant-kilby-1dced9.netlify.app/'
        },
        devChat:{
            name:'Dev Chat',
            urlImage:'https://res.cloudinary.com/djf9jqpml/image/upload/v1659758719/slack-clone_eumy9g.png',
            url:'https://shimmering-gaufre-6ec0b9.netlify.app/'
        },
        mainStArepa:{
            name:'Main Street Arepa',
            urlImage: 'https://res.cloudinary.com/djf9jqpml/image/upload/v1659758719/MainSt_h3id5w.png',
            url:'https://sad-perlman-bf5547.netlify.app/'
        }



    };

    React.useEffect(()=>{
        updateDb(databaseData);
    },[])
}
export default useDb;
