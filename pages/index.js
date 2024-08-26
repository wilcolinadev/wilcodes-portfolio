import * as React from 'react';
import Home from '../src/Components/Home';
import { Box } from '@mui/material';
import Head from 'next/head';
import Script from 'next/script';

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
        <link rel="preconnect" href="https://res.cloudinary.com" />
      </Head>
      <Script
        id="GA-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-PSN0TYFHRH`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PSN0TYFHRH', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Home />
    </Box>
  );
};
export default Index;