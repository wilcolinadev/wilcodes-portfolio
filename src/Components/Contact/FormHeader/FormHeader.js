import React from "react";
import {Title, HeaderBox, Description, ContactImage} from "./FormHeaderStyles";
import contactImage from "../../../assets/undraw_fill_form_re_cwyf.svg"
import {Stack} from "@mui/material";
const FormHeader = ()=>{

    return(
        <HeaderBox>
            <Stack >
                <Title variant={'h3'}>
                    Love to hear from you!
                </Title>
                <Description variant={'h5'}>
                    Get in touch <br/> and fill the form below! 👋🏼
                </Description>

            </Stack>

            <ContactImage src={contactImage}/>

        </HeaderBox>
    )
};

export default FormHeader;