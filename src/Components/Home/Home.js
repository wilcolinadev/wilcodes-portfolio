import * as React from "react";
import Navigation from "../Navigation/Navigation"
import {OverFlow, Wrapper} from "../Wrapper";
import Description from "./Description/Description";
import Skills from "./Skills/Skills";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";
import SoftSkills from "./SoftSkills/SoftSkills";
import Footer from "../Footer/Footer";
import ActionCall from "../ActionCall/ActionCall";

const Home = () => {
    return (
        <Wrapper type={'home'}>
            <Navigation page={'home'}/>
            <OverFlow>
                <Description/>
                <SoftSkills/>
                <Skills/>
                <FeaturedProjects/>
                <ActionCall/>
                <Footer/>
            </OverFlow>

        </Wrapper>
    )
}

export default Home;

