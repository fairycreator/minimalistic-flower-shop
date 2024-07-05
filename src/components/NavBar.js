import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/actions/authActions";
import styled from "styled-components";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Nav>
      <NavLogo to="/">Flower Shop</NavLogo>
      <NavMenu>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/shop">Shop</NavItem>
        {user ? (
          <>
            <NavItem to="/admin">Admin</NavItem>
            <NavButton onClick={handleLogout}>Logout</NavButton>
          </>
        ) : (
          <>
            <NavItem to="/login">Login</NavItem>
            <NavItem to="/register">Register</NavItem>
          </>
        )}
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #333;
  color: white;
`;

const NavLogo = styled(Link)`
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled(Link)`
  margin-left: 2rem;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const NavButton = styled.button`
  margin-left: 2rem;
  padding: 0.5rem 1rem;
  background: #555;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #777;
  }
`;

export default Navbar;
