import React from 'react';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SectionOne from '../Section1/SectionOne';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <SectionOne />
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
