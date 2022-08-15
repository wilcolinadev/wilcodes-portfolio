import React from "react";
import {Stack} from "@mui/material";
import Link from "../../../Link";
import SocialLinks from "../SocialLinks";
import {FooterBox} from "./FooterStyles";

const Footer = () => {
    return (

        <FooterBox>
            <div>
                <p>
                    © 2022 Wilfredo Colina. All Rights Reserved.
                </p>
            </div>

            <Stack direction="row">
                <Link href="/" color="secondary">
                    <p> Home </p>

                </Link>

                <Link href="/projects" color="secondary">
                    <p> Projects </p>
                </Link>
                <Link href="/about" color="secondary">
                    <p> About </p>
                </Link>

            </Stack>
            <SocialLinks/>

        </FooterBox>)
};

export default Footer;