import React from "react";
import Projects from "../src/Components/Projects/Projects";
import Head from "next/head";
import {Box} from "@mui/material";


const ProjectsPage = ()=> {
    return (
        <Box>
            <Head>
                <title> Projects | UI / UX Web Developer </title>

                <meta name="description"
                      content="I'm Wilfredo Colina, a UI/UX Web developer who loves to face new challenges every day. I am located in Houston Texas, and I am a graduated in Web development Applications "/>
                <meta charSet="utf-8"/>

            </Head>
            <Projects/>
        </Box>
    )
};

export default ProjectsPage;
