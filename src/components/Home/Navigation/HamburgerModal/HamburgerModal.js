import React from "react";
import Link from "next/link";
import {Stack} from "@mui/material";
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import SocialLinks from "../../SocialLinks";

const ModalController = styled((props) => <Stack {...props}/>)`
  width: 100%;
  height: 100%;
  position: fixed;
  min-height: 100vh;
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
  color: #066852;
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
    --s: 0.1em;   /* the thickness of the line */
    --c: #1095c1; /* the color */
    color: #0000;
    padding-bottom: var(--s);
    background:
            linear-gradient(90deg,var(--c) 50%,#000 0) calc(100% - var(--_p,0%))/200% 100%,
            linear-gradient(var(--c) 0 0) 0% 100%/var(--_p,0%) var(--s) no-repeat;
    -webkit-background-clip: text,padding-box;
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
            <Link href={'/'}>
                <LinkItem>
                    ABOUT
                </LinkItem>
            </Link>
            <Link href={'/'}>
                <LinkItem>
                    Let's Chat

                </LinkItem>

            </Link>

            <SocialLinks/>
        </ModalController>)
};

export default HamburgerModal;