import React from "react";

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import "../styles/navbar.css";

export const NavBar = () => {
  const state = useSelector((state) => state.cart);

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
          Cart({state.item.length})
        </NavLink>
      </nav>
    </header>
  );
};
