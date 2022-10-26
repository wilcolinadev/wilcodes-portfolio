import * as React from 'react';
import About from "../src/Components/About/About";
import Head from "next/head";
import {Box} from "@mui/material";

const AboutPage = () => {
    return (<Box>
        <Head>
            <title> About | UI / UX Web Developer </title>

            <meta name="description"
                  content="I'm Wilfredo Colina, a UI/UX Web developer who loves to face new challenges every day. I am located in Houston Texas, and I am a graduated in Web development Applications "/>
            <meta charSet="utf-8"/>

        </Head>
        <About/>
    </Box>);
}

export default AboutPage
