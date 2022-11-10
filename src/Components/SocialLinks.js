import React from "react";
import {Stack} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import {styled} from "@mui/material/styles";

const SocialStack = styled((props) => <Stack {...props}/>)`
  
  display: flex;
  justify-content: center;
  margin-top: .5rem;
  padding: ${props => !props.padding ? '0rem' : '1rem'};
  cursor: pointer;
  a{
    color:#3F3D55;
  }
  *{
    margin-right: .7rem;
  }
  ${props => props.theme.breakpoints.up("sm")} {
    margin-top: ${props => !props.padding ? '0' : '1rem'};
  }
 
  
`


const SocialLinks = (props) => {

    return (

        <SocialStack direction={'row'} padding={props.padding}>
            <a href={'https://www.linkedin.com/in/wilcodes/'} target={'_blank'}>
                    <LinkedInIcon fontSize={'large'}/>
            </a>

            <a href={'https://github.com/wilcodes'} target={'_blank'}>
                <GitHubIcon fontSize={'large'}/>
            </a>
            <a href={'https://www.instagram.com/wilcodes.dev/'} target={'_blank'}>
                <InstagramIcon fontSize={'large'}/>
            </a>
        </SocialStack>)

};

export default SocialLinks;