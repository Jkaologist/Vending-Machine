import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <NavLink exact to="/">Home</NavLink>
      <p></p>
      <NavLink exact to="/soda">Soda</NavLink>
      <p></p>
      <NavLink exact to="/chips">Chips</NavLink>
      <p></p>
      <NavLink exact to="/sardines">Sardines</NavLink>
    </div>
  )
};

export default NavBar;