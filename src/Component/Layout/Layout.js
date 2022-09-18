import React from 'react';
import Section1 from '../Sections/Section1/Section1';
import Section2 from '../Sections/Section1_/Section1_';
import Section3 from '../Sections/Section3/Section3';
import Section4 from '../Sections/Section4/Section4';
import Header from './Header/Header';
// eslint-disable-next-line
import Classes from './Layout.module.css';
import Footer from './Footer/Footer';
import Dialog from '../../Container/Dialog/Dialog';
const Layout = () => {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Dialog />
      <Section4 />
      <Footer />
    </>
  );
};
export default Layout;
