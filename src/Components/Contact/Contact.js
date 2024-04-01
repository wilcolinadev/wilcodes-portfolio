import React from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import { Wrapper } from '../Wrapper';
import FormHeader from './FormHeader/FormHeader';
import Form from './Form/Form';
import ActionCall from '../ActionCall/ActionCall';
import {Container} from '@mui/material';
const Contact = () => {
  return (
    <Wrapper type={'contact'}>
      <Navigation page={'contact'} />
      <FormHeader />
      <Form />
      <ActionCall />
      <Footer />
    </Wrapper>
  );
};

export default Contact;
