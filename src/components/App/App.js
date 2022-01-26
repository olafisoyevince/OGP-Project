import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Section1 from '../Section-1';
import path from "../../routes.js"

function App() {
  return (
    <>
      <Navbar />
      <Section1 />
      <Routes>
        <Route path={path.home} />
        <Route path={path.reports} />
        <Route path={path.about} />
        <Route path={path.dashboard} />
      </Routes>
    </>
  );
}

export default App;