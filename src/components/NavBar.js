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
    <NavContainer>
      <NavLogo to="/">Flower Shop</NavLogo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        {user ? (
          <>
            <NavLink to="/cart">Cart</NavLink>
            <NavButton onClick={handleLogout}>Logout</NavButton>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </NavLinks>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #333;
  color: white;
`;

const NavLogo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  margin-left: 1rem;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const NavButton = styled.button`
  margin-left: 1rem;
  background: #555;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background: #777;
  }
`;

export default Navbar;
