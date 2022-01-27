import React from 'react';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Section1 from '../components/Section1/Section-1';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Section1 />
      <Routes>
        <Route path="/" />
        <Route path="/reports" />
        <Route path="/about" />
        <Route path="/dashboard" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;