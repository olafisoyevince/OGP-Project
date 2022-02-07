import React from 'react';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SectionOne from '../Section1/SectionOne';
import Section2 from '../Section2/Section-2';
import Section4 from '../Section4/Section4';
import HomeSection from '../HomeSection/HomeSection';
import '../HomeSection/HomeSection.css';
import '../Section4/Section4.css';
import Section3 from '../Section3/Section3';
import Footer from '../Footer/Footer';
import path from '../../routes';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HomeSection />
      <SectionOne />
      <Section2 />
      <Section3 />
      <Section4 />
      <Routes>
        <Route exact path={path.home} />
        <Route exact path={path.reports} />
        <Route exact path={path.about} />
        <Route exact path={path.dashboard} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
