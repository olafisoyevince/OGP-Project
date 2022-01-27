import React from 'react';
import { Nav, Bars, NavMenu, NavLink, NavBtnLink } from './NavbarElements';
import OgpLogo from '../../assets/images/ogp-logo.png';

const Navbar = () => {
  return (
  <>
    <Nav>
      <div to="/" style={{display: 'flex', alignItems: 'center' }}>
        <img src={ OgpLogo } alt="ogp-logo" style={{ width: '150px' }} />
      </div>
      <Bars />
      <NavMenu>
        <NavLink to="/home" activeStyle>
          Home
        </NavLink>
        <NavLink to="/reports" activeStyle>
          Reports
        </NavLink>
        <NavLink to="/about" activeStyle>
          About
        </NavLink>
        <NavLink to="/dashboard" activeStyle>
          Dashboard
        </NavLink>
        <NavBtnLink to="/login/register">Login/Register</NavBtnLink>
      </NavMenu>
    </Nav>
  </>
  );
};

export default Navbar;
