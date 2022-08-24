import React from "react";
import Footer from "../Footer/Footer";
import Navigation from '../Navigation/Navigation';
import {Wrapper} from "../Wrapper";
import Introduction from "./Introduction/Introduction";
import Bio from "./Bio/Bio";

const About = () => {
    return (
        <Wrapper type={'about'}>
            <Navigation/>
            <Introduction/>
            <Bio/>
            <Footer/>
        </Wrapper>
    )
};

export default About;