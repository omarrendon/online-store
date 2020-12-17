import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export const NavBar = () => {
  return (
    <header className="navbar">
      <nav className="navbar-nav">
        <NavLink activeClassName="active" className="navbar-link" exact to="/">
          Home
        </NavLink>

        <NavLink
          activeClassName="active"
          className="navbar-link"
          exact
          to="/favorites"
        >
          Favorites
        </NavLink>
        <NavLink
          activeClassName="active"
          className="navbar-link navbar-cart"
          exact
          to="/my-cart"
        >
          Cart
        </NavLink>
      </nav>
    </header>
  );
};
