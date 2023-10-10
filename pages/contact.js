import React from 'react';
import Contact from '../src/Components/Contact/Contact';
import Head from 'next/head';
import { Box } from '@mui/material';

const ContactPage = () => {
  return (
    <Box>
      <Head>
        <title> Contact | UI / UX Web Developer </title>

        <meta
          name="description"
          content="I'm Wilfredo Colina, a UI/UX Web developer who loves to face new challenges every day.
                      I am located in Houston Texas, and I am a graduated in Web development Applications. "
        />
        <meta charSet="utf-8" />
      </Head>
      <Contact />
    </Box>
  );
};

export default ContactPage;
