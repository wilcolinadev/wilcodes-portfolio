import React from "react";
import Footer from "../Footer/Footer";
import Navigation from '../Navigation/Navigation';
import {Wrapper} from "../Wrapper";
import Introduction from "./Introduction/Introduction";
import Bio from "./Bio/Bio";
import Career from "./Career/Career";

const About = () => {
    return (
        <Wrapper type={'about'}>
            <Navigation page={'about'}/>
            <Introduction/>
            <Bio/>
            <Career/>
            <Footer/>
        </Wrapper>
    )
};

export default About;