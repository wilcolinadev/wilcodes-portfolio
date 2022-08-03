import React,{useState} from "react";
import Box from "@mui/material/Box";
import {ListItem, Stack} from "@mui/material";
import {Item, UList, Wrapper, Logo, ContactLink, BoxIcon} from "./NavigationStyles";
import Link from "../../../Link"
import Typography from "@mui/material/Typography";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const Navigation = () => {
const [logHover, isLogHover] = useState(false);
    return (<Wrapper>
        <UList>
            <Box>
                <Logo variant={"h5"}>
                    Wilfredo Colina
                </Logo>
            </Box>

            <Stack direction="row">
                <Link href="/" color="secondary">
                    <Item> Home </Item>
                </Link>
                <Link href="/projects" color="secondary">
                    <Item> Projects </Item>
                </Link>

                <Link href="/about" color="secondary">
                    <Item> About</Item>
                </Link>
            </Stack>
            <Box onMouseEnter={()=>isLogHover(true)} onMouseLeave={()=>isLogHover(false)}>
                <Link  href="/contact" color="secondary" >
                <ContactLink direction="row">
                    <BoxIcon hoverState={logHover}>
                        <TrendingFlatIcon/>
                    </BoxIcon>
                    <Typography>
                        Let's chat
                    </Typography>
                </ContactLink>
                </Link>
            </Box>
        </UList>
    </Wrapper>)
};

export default Navigation;