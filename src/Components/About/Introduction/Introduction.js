import React from "react";
import Typography from "@mui/material/Typography";
import devImage from "../../../assets/undraw_programming_re_kg9v.svg";
import {AboutImage, Description, IntroductionBox, TextController} from "./IntroductionStyles";


const Introduction = () => {
    return (
        <IntroductionBox>
            <TextController spacing={'1rem'}>
                <Typography variant={'h3'}>
                    Hi, Hello 👋🏼
                </Typography>

                <Typography variant={'h2'}>
                    I'm
                    Wilfredo Colina
                </Typography>

                <Description>
                    I would describe myself as the type of person who is always looking for
                    better solutions, and alternatives to complete multiple tasks efficiently.
                </Description>

            </TextController>

            <AboutImage src={devImage} alt={'Web developer'}/>
        </IntroductionBox>

    )
};

export default Introduction;