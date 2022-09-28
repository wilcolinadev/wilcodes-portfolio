import React from "react";
import {BioTittle, BioWrapper, BioImage, BioContentBox, BioSpan, BioLink} from "./BioStyles";
import bioImage from "../../../assets/undraw_profile_details_re_ch9r.svg";
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import {TextController, Description} from "../Introduction/IntroductionStyles";
import {Box} from "@material-ui/core";



const Bio = () => {
    return (<BioWrapper>

        <BioContentBox >
            <TextController>
                <BioTittle variant={'h2'}>
                    Bio 👨🏻‍💻
                </BioTittle>
            <Description>
               <BioSpan>L</BioSpan>orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </Description>
                <Description>
                    <BioSpan>D</BioSpan>uis autem vel eum iriure dolor
                    in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis
                    dolore te feugait nulla facilisi.
                </Description>

            </TextController>
            <Box>
                <BioImage src={bioImage} alt={'bio of a web developer'}/>
                <BioLink href={'https://res.cloudinary.com/djf9jqpml/image/upload/v1664377054/WilfredoResume_zgqpyh.pdf'} download={'WilfredoColina.pdf'}>
                    Download Resume
                    <CloudDownloadOutlinedIcon sx={{marginLeft:'.5rem'}}/>
                </BioLink>
            </Box>

        </BioContentBox>


    </BioWrapper>)
}

export default Bio