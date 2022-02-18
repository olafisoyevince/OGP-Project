import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #003B49;
  display:flex;
  align-items: center;
  text-decoration: none;
  margin: 0 1rem;
  padding-bottom: 3px;
  font-weight: 500;


  &.active {
    color: #FF7D45;
    border-bottom: 2px solid #FF7D45;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #FF7D45;
    border-bottom: 2px solid #FF7D45;
  }
`;

export const Bars = styled( HiMenuAlt3 )`
  display: none;
  color: #003B49;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  // margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  background: #003B49;
  padding: 15px 30px;
  color: #fff;
  border: none;
  outline: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: 400;
  margin-left: 24px;

  &:hover {
    background: #0E2E36;
    color: #fff;
  }
`;