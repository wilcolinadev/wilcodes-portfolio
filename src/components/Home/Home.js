import * as React from "react";
import Navigation from "./Navigation/Navigation"
import {Wrapper} from "./Wrapper";
import Description from "./Description/Description";
const Home = ()=>{
    return(
        <Wrapper>
            <Navigation/>
            <Description/>
        </Wrapper>
    )
}

export default Home;

