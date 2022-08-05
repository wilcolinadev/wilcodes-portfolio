import * as React from "react";
import Navigation from "./Navigation/Navigation"
import {Wrapper} from "./Wrapper";
import Description from "./Description/Description";
import Skills from "./Skills/Skills";
const Home = ()=>{
    return(
        <Wrapper>
            <Navigation/>
            <Description/>
            <Skills/>
        </Wrapper>
    )
}

export default Home;

