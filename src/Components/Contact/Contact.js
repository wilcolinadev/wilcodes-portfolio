import React from "react";
import Footer from "../Footer/Footer";
import Navigation from '../Navigation/Navigation';
import {Wrapper} from "../Wrapper";
import FormHeader from "./FormHeader/FormHeader";
import Form from './Form/Form'
import ActionCall from "../ActionCall/ActionCall";
const Contact = ()=>{
    return(
        <Wrapper type={'contact'}>
            <Navigation/>
           <FormHeader/>
            <Form/>
            <ActionCall/>
            <Footer/>
        </Wrapper>
    )
};

export default Contact;