import * as React from "react";
import Navigation from "./Navigation/Navigation"
import {Wrapper} from "./Wrapper";
import Description from "./Description/Description";
import Skills from "./Skills/Skills";
import LatestProjects from "./LatestProjects/LatestProjects";
const Home = ()=>{
    return(
        <Wrapper>
            <Navigation/>
            <Description/>
            <Skills/>
            <LatestProjects/>
        </Wrapper>
    )
}

export default Home;

