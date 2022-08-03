import Container from "@mui/material/Container";
import Head from "next/head";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "../../Link";
import ProTip from "../../ProTip";
import Copyright from "../../Copyright";
import * as React from "react";
import Navigation from "./Navigation/Navigation"

const Home = ()=>{
    return(
        <div>
            <Navigation/>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Wilfredo Colina
                </Typography>
                <Link href="/about" color="secondary">
                    Go to the about page
                </Link>
                <ProTip />
                <Copyright />
            </Box>
        </div>
    )
}

export default Home;

