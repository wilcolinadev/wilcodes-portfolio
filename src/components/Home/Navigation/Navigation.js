import React from "react";
import Box from "@mui/material/Box";
import {ListItem, Stack} from "@mui/material";
import {Item, UList, Wrapper, Logo} from "./NavigationStyles";
import Link from "../../../Link"
import Typography from "@mui/material/Typography";

const Navigation = () => {

    return (<Wrapper>
            <UList>
                <Box>
                    <Logo variant={"h6"} >
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

                    <Link href="/contact" color="secondary">
                        <Item> Contact </Item>
                    </Link>
                </Stack>
            </UList>
        </Wrapper>)
};

export default Navigation;