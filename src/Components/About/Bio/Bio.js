import React from "react";
import {BioContentBox, BioImage, BioLink, BioSpan, BioTittle, BioWrapper} from "./BioStyles";
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import {Description, TextController} from "../Introduction/IntroductionStyles";
import {Box} from "@material-ui/core";
import wilGrad from '../../../assets/wil-grad-min.png'

const Bio = () => {
    return (<BioWrapper>

        <BioContentBox>
            <TextController>
                <BioTittle variant={'h2'}>
                    Bio 👨🏻‍💻
                </BioTittle>
                <Description>
                    <BioSpan>I</BioSpan> started coding at 17 years old, in a software academy that taught me how to
                    approach algorithms and the most basic data structures. During my journey, I explored multiple tools
                    and found C++ as my first programming language in college, with it I started to understand more the
                    flow of data and programming concepts. However, I quickly discovered Javascript and its
                    possibilities and for that reason, I decided to continue my programming preparation by focusing on
                    Web technologies.
                </Description>
                <Description>
                    <BioSpan>I</BioSpan> have worked with a variety of tools and technologies which includes HTML, CSS,
                    JavaScript, PHP, TypeScript, React, Next.js, Gatsby.js, Redux, MaterialUI, and Bootstrap for the
                    architecture, design, and organization of my projects. In regards to the design aspect, I feel
                    comfortable using Adobe photoshop and Figma. In addition to my technical skills, I have a good eye
                    for details and organization, as well as clear communication experience that I developed during my
                    time working at retail with customers.
                </Description>

            </TextController>
            <Box>
                <figure style={{textAlign:'center'}}>
                    <BioImage src={wilGrad} alt={'bio of a web developer'}/>
                </figure>

                <BioLink
                    href={'https://res.cloudinary.com/djf9jqpml/image/upload/v1670975935/wilcodes/wcolinaresume_wm1xer.pdf'}
                    download={'WilfredoColina.pdf'}>
                    Download Resume
                    <CloudDownloadOutlinedIcon sx={{marginLeft: '.5rem'}}/>
                </BioLink>
            </Box>

        </BioContentBox>


    </BioWrapper>)
}

export default Bio