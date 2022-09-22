import React from "react";
import Link from "next/link";
import {Stack} from "@mui/material";
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import SocialLinks from "../../SocialLinks";

const ModalController = styled((props) => <Stack {...props}/>)`
  width: 100%;
  height: 100%;
  position:fixed;
  top: 0;
  background-color: rgba(251, 251, 255, 0.85);
  transform: ${(props) =>
    props.open ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.4s ease-in-out;
  box-sizing: border-box;
  padding-top: 3.5rem;
  
  ${props => props.theme.breakpoints.up("md")} {
    display: none;
  }
`;

const LinkItem = styled(Typography)`
  cursor: pointer;
  color: #3F3D55;
  font-family: 'Inconsolata', monospace;
  font-size: 2.2rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding: .5rem;
  align-items: center;
  font-weight: bold;
  transition: .5s;
  &:hover, &:active{
    color: #0cb978;
    transition: 0.5s;
  }
  
`


const HamburgerModal = ({active}) => {
    return (
        <ModalController direction="column" open={active}>
            <Link href={'/'}>
                <LinkItem>
                    HOME

                </LinkItem>
            </Link>
            <Link href={'/'}>
                <LinkItem>
                    PROJECTS
                </LinkItem>
            </Link>
            <Link href={'/about'}>
                <LinkItem>
                    ABOUT
                </LinkItem>
            </Link>
            <Link href={'/'}>
                <LinkItem>
                    Let's Chat

                </LinkItem>

            </Link>

            <SocialLinks  padding={true}/>
        </ModalController>)
};

export default HamburgerModal;