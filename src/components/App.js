import React from 'react';
//import Navbar from '../Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Section1 from '../Section1/Section-1';
import path from "../routes.js";
import Section3 from './Section3/Section3';

function App() {
  return (
    <BrowserRouter>

      <Section3 />

      <Routes>
        <Route exact path={path.home} />
        <Route exact path={path.reports} />
        <Route exact path={path.about} />
        <Route exact path={path.dashboard} />
      </Routes>

    </BrowserRouter>
  );
  }

  export default App;