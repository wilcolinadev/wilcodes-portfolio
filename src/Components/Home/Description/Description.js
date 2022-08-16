import React, {useState} from "react";

import {Grid, Box} from "@mui/material";
import {GridController, MainTitle, MainDescription, MainButton, ImageBox} from "./DescriptionStyles";
import {ImageS} from "./DescriptionStyles";
import dev from "../../../assets/undraw_developer.svg"
import BoxIcon from "../../BoxIcon"
import Link from "next/link";


const Description = () => {
    const [logHover, isLogHover] = useState(false);

    return (

        <GridController>

            <Grid>
                <ImageBox>
                    <ImageS src={dev} alt={'Coding developer'}/>
                </ImageBox>


                <MainTitle variant={"h1"}>
                    UI/UX Developer
                </MainTitle>
                <Link href={'/contact'}>
                    <MainButton onMouseEnter={() => isLogHover(true)} onMouseLeave={() => isLogHover(false)}>
                        Let's Work Together!
                        <BoxIcon hoverState={logHover}/>
                    </MainButton>
                </Link>
                <MainDescription>
                    I'm Wilfredo, a UI/UX developer who loves to face new challenges every day. My passion about
                    translating designs
                    into functional web applications allow me to focus on the development of remarkable software taking
                    into consideration user experience, good practices
                    and the needs of the application.
                </MainDescription>


            </Grid>
        </GridController>)
};


export default Description