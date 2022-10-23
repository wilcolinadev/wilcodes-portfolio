import * as React from 'react';
import Home from '../src/Components/Home/Home'
import {Box} from "@mui/material";
import Head from "next/head";

const Index = () => {
    return (
        <Box>
            <Head>
                <title> Wilfredo Colina | UI / UX Web Developer </title>

                <meta name="description"
                      content="I'm Wilfredo Colina, a UI/UX Web developer who loves to face new challenges every day. I am located in Houston Texas, and I am a graduated in Web development Applications "/>
                <meta charSet="utf-8"/>

            </Head>
            <Home/>
        </Box>

    );
}
export default Index;