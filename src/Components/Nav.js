import React from "react";
import "../style/nav.scss";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar-wrapper">
      <ul>
        <li>
          <NavLink activeClassName="selected" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/men">
            Men
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/women">
            Women
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/children">
            Children
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
