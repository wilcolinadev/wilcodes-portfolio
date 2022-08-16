import React from "react";
import {Stack} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import {styled} from "@mui/material/styles";
import Link from "next/link";

const SocialStack = styled((props)=><Stack {...props}/>)`
  
  display: flex;
  justify-content: center;
  margin-top: .5rem;
  padding: ${props => !props.padding ? '0' : '1.5rem'};
  cursor: pointer;
  *{
    margin-left: .7rem;
  }
  ${props => props.theme.breakpoints.up("sm")} {
    margin-top: ${props => !props.padding ? '0' : '1.5rem'};
  }
 
  
`


const SocialLinks = () => {

    return (

        <SocialStack direction={'row'}>
            <Link href={'https://www.linkedin.com/in/wilcodes/'}>
                <LinkedInIcon fontSize={'large'}/>
            </Link>

            <Link href={'https://github.com/wilcodes'}>
                <GitHubIcon fontSize={'large'}/>
            </Link>
            <Link href={'https://github.com/wilcodes'}>
                <InstagramIcon fontSize={'large'}/>
            </Link>
        </SocialStack>)

};

export default SocialLinks;