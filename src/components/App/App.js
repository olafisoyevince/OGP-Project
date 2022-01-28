import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Section1 from '../Section1/Section-1';
import Section2 from'../Section2/Section-2';
import path from "../../routes.js"

function App() {
  return (
    <>
      {/* <Navbar />
      <Section1 /> */}
      <Section2/>
      <Routes>
        <Route exact path={path.home} />
        <Route exact path={path.reports} />
        <Route exact path={path.about} />
        <Route exact path={path.dashboard} />
      </Routes>
    </>
  );
}

export default App;