import React from "react";
import {Stack} from "@mui/material";
import Link from "../../Link";
import SocialLinks from "../SocialLinks";
import {FooterBox, FooterLink} from "./FooterStyles";
import {Grid} from "@material-ui/core"

const Footer = () => {
    return (

        <FooterBox>
            <Grid container fluid="true" justifyContent={'space-evenly'} alignItems={'center'}>

                <Grid item >
                    <Stack direction="row">
                        <Link href="/pages" color="secondary">
                            <FooterLink> Home </FooterLink>

                        </Link>

                        <Link href="/pages/projects" color="secondary">
                            <FooterLink> Projects </FooterLink>
                        </Link>
                        <Link href="/pages/about" color="secondary">
                            <FooterLink> About </FooterLink>
                        </Link>
                        <Link href="/pages/about" color="secondary">
                            <FooterLink> Contact </FooterLink>
                        </Link>

                    </Stack>
                </Grid>

                <Grid item >
                    <SocialLinks padding={true}/>
                </Grid>
                <Grid item >
                    <p>
                        © 2022 Wilfredo Colina. All Rights Reserved.
                    </p>
                </Grid>





            </Grid>
        </FooterBox>)
};

export default Footer;