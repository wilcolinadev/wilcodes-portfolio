import * as React from "react";
import Navigation from "./Navigation/Navigation"
import {Wrapper, OverFlow} from "./Wrapper";
import Description from "./Description/Description";
import Skills from "./Skills/Skills";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";
import SoftSkills from "./SoftSkills/SoftSkills";

const Home = () => {
    return (
        <Wrapper>
            <Navigation/>
            <OverFlow>
            <Description/>
            <SoftSkills/>
            <Skills/>
            <FeaturedProjects/>
            </OverFlow>
        </Wrapper>
    )
}

export default Home;

