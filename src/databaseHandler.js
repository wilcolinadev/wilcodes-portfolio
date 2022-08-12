// import {ref, getDatabase,set} from "firebase/database";
// import {useEffect} from "react";

// const db = getDatabase();
// const reference = ref(db,'projects');
// const updateDb = async (obj)  =>{
//   const response =  await set(reference,obj);
//   console.log(response);
// }
// const databaseData = {
//     theMarket :{
//         name:'TheMarket',
//         urlImage:'https://res.cloudinary.com/djf9jqpml/image/upload/v1659758725/theMarket_d7xmob.png'
//     },
//     clockApp:{
//         name:'Clock App',
//         urlImage: 'https://res.cloudinary.com/djf9jqpml/image/upload/v1659758724/clock-app_h7vtie.png',
//         url:'https://hungry-einstein-8e0702.netlify.app/'
//     },
//     issuestrack:{
//         name:'Issuestrack',
//         urlImage:['https://res.cloudinary.com/djf9jqpml/image/upload/v1659758720/Issuestrack-1_gw9irw.png','https://res.cloudinary.com/djf9jqpml/image/upload/v1659758716/IssuesTrack_ymjpfv.png'],
//         url:'https://main--benevolent-clafoutis-fee81f.netlify.app/'
//
//     },
//     alelimon:{
//         name:'Alelimon',
//         urlImage:'https://res.cloudinary.com/djf9jqpml/image/upload/v1659758722/alelimon_hpefcl.png',
//         url:'https://awesome-mcclintock-6a9ec4.netlify.app/'
//     },
//     tipCalculator:{
//         name:'Tip Calculator',
//         urlImage:'https://res.cloudinary.com/djf9jqpml/image/upload/v1659758721/tip-calculator_llwhma.png',
//         url:'https://gifted-einstein-530890.netlify.app/'
//     },
//     planetsApp:{
//         name:'The Planets',
//         urlImage:'https://res.cloudinary.com/djf9jqpml/image/upload/v1659758718/Planets_lmdwod.png',
//         url:'https://elegant-kilby-1dced9.netlify.app/'
//     },
//     devChat:{
//         name:'Dev Chat',
//         urlImage:'https://res.cloudinary.com/djf9jqpml/image/upload/v1659758719/slack-clone_eumy9g.png',
//         url:'https://shimmering-gaufre-6ec0b9.netlify.app/'
//     },
//     mainStArepa:{
//         name:'Main Street Arepa',
//         urlImage: 'https://res.cloudinary.com/djf9jqpml/image/upload/v1659758719/MainSt_h3id5w.png',
//         url:'https://sad-perlman-bf5547.netlify.app/'
//     }
//
//
//
// };
//
// React.useEffect(()=>{
//     updateDb(databaseData);
// },[])