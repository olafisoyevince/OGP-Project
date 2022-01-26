import React from 'react';
import { Nav, Bars, NavMenu, NavLink, NavBtnLink } from './NavbarElements';
import path from "../../routes.js";


const Navbar = () => {
  return (
  <>
    <Nav>
      <div to={path.home} style={{display: 'flex', alignItems: 'center' }}>
        <img src="../images/ogp-logo.png" alt="ogp-logo" style={{ width: '150px' }} />
      </div>
      <Bars />
      <NavMenu>
        <NavLink to={path.home} activestyle="true">
          Home
        </NavLink>
        <NavLink to={path.reports} activestyle="true">
          Reports
        </NavLink>
        <NavLink to={path.about} activestyle="true">
          About
        </NavLink>
        <NavLink to={path.dashboard} activestyle="true">
          Dashboard
        </NavLink>
        <NavBtnLink to={path.login}>Login</NavBtnLink>
      </NavMenu>
    </Nav>
  </>
  );
};

export default Navbar;
