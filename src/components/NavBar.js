import React from "react";
import { NavLink } from "react-router-dom";
// import Actors from "./Actors";
// import Directors from "./Directors";

function NavBar() {
  return(
    <div className="navbar">
      <ul>
      <li><NavLink exact to="/">Home </NavLink></li>
      <li><NavLink to="/movies">Movies </NavLink></li>
      <li><NavLink to="/directors">Directors </NavLink></li>
      <li><NavLink to="/actors">Actors </NavLink></li>
      </ul>
    </div>
  )
}

export default NavBar;
