import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div>
      <NavLink
        activeClassName="active"
        className="nav-item nav-link"
        exact
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        activeClassName="active"
        className="nav-item nav-link"
        exact
        to="/user"
      >
        User
      </NavLink>
      <NavLink
        activeClassName="active"
        className="nav-item nav-link"
        exact
        to="/favorites"
      >
        Favorites
      </NavLink>
      <NavLink
        activeClassName="active"
        className="nav-item nav-link"
        exact
        to="/my-cart"
      >
        Cart
      </NavLink>
    </div>
  );
}
