import * as React from 'react';
import Home from '../src/components/Home/Home'
import {Box} from "@mui/material";
import Head from "next/head";

const Index = () => {
    return (
        <Box>
            <Head>
                <title> Hello Wil</title>
            </Head>
            <Home/>
        </Box>

    );
}
export default Index;