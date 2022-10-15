import React from "react";
import {useEffect, useState} from "react";
import {getDatabase, ref, get} from "firebase/database";


const useProjects = (path)=>{
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const getProjects = async () => {
            const db = getDatabase();
            const data = await get(ref(db, path));
            const projectsObject = data.val();
            const projects = [];
            Object.values(projectsObject).forEach(project => {
                projects.push(project)
            });
            setProjects(projects);
        }
        getProjects();
    }, []);
    return projects;
};

export default useProjects