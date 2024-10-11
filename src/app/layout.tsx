import React from "react";
import './globals.scss';
import Navbar from '../components/home-page/navbar/index';
// import Footer from '@components/footer';
// import Navbar from '@components/navbar/navbar';
// import '@fontsource-variable/inter/index.css';
// import '@fontsource-variable/bricolage-grotesque';
// import { Helmet } from 'react-helmet';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
};

