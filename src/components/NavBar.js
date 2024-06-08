import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => (
  <Nav>
    <Logo>Flower Shop</Logo>
    <NavLinks>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </NavLinks>
  </Nav>
);

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  a {
    margin: 0 1rem;
    text-decoration: none;
    color: #333;
  }
`;

export default Navbar;
