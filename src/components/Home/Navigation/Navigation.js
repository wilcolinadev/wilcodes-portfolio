import React, {useState} from "react";
import Box from "@mui/material/Box";
import {Stack, Grid} from "@mui/material";
import {Item, UList, Wrapper, Logo, ContactLink, BoxIcon, Identifier, Burger, BurgerController} from "./NavigationStyles"
import Link from "../../../Link"
import Typography from "@mui/material/Typography";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const Navigation = () => {
    const [logHover, isLogHover] = useState(false);
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    return (<Wrapper>
        <UList>
            <Link href='/'>
                <Box>
                    <Logo variant={"h5"}>
                        Wilfredo Colina
                    </Logo>
                </Box>
            </Link>
            <Stack direction="row">
                <Link href="/" color="secondary">
                    <Item> Home <Identifier/> </Item>

                </Link>

                <Link href="/projects" color="secondary">
                    <Item> Projects </Item>
                </Link>
                <Link href="/about" color="secondary">
                    <Item> About </Item>
                </Link>

            </Stack>
            <Stack direction={'row'}>


            <Box onMouseEnter={() => isLogHover(true)} onMouseLeave={() => isLogHover(false)}>
                <Link href="/contact" color="secondary">
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
            <BurgerController>
                <Burger open={isBurgerOpen}
                        onClick={()=>setIsBurgerOpen(!isBurgerOpen)}
                >
                    <div/>
                    <div/>
                    <div/>
                </Burger>
            </BurgerController>
            </Stack>
        </UList>
    </Wrapper>)
};

export default Navigation;