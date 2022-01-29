import React from 'react';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SectionOne from '../Section1/SectionOne';
import Section4 from '../Section4/Section4';
import '../Section4/Section4.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <SectionOne />
      <Section4 />
      <Routes>
        <Route path='/' />
        <Route path='/reports' />
        <Route path='/about' />
        <Route path='/dashboard' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
