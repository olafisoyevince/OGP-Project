import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Section1 from '../Section1/Section-1';
import path from "../../routes.js";
import Section4 from '../Section4/Section4';
import "../Section4/Section4.css"

function App() {
    return ( 
    <>
        <Navbar />
        <Section1 />
        <Section4 />
        <Routes >
            <Route exact path = {path.home} /> 
            <Route exact path = {path.reports}/> 
            <Route exact path = {path.about}/> 
            <Route exact path = {path.dashboard}/>
        </Routes> 
    </>
    );
}

export default App;