import * as React from 'react';
import Home from '../src/Components/Home';
import { Box } from '@mui/material';
import Head from 'next/head';

const Index = () => {
  return (
    <Box>
      <Head>
        <title> Wilfredo Colina | Web Developer </title>
        <meta
          name="description"
          content="I'm Wilfredo Colina, Web developer who loves to face new challenges every day. I am in Austin Texas, and I am a graduated in Web development Applications. Software development, React developer with Next.js, Typescript, and Node.js."
        />
        <meta charSet="utf-8" />
      </Head>
      <Home />
    </Box>
  );
};
export default Index;
