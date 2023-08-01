import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavDesktop() {
  return (
    <nav className="nav-desktop">
      <div className="nav-item">
        <Link to={"/"} className="nav-title">
          <h1>
            <span className="text-honey">GC</span> PARTNERS
          </h1>
        </Link>
      </div>

      <div className="nav-item">
        <div className="nav-links">
          <NavLink to={"/"} end>
            Home
          </NavLink>
          <NavLink to={"/services"}>Services</NavLink>
          <NavLink to={"/Partners"}>Partners</NavLink>
          <NavLink to={"/About"}>About</NavLink>
        </div>
      </div>

      <div className="nav-item">
        <div className="user-status">
          <Link to={"/sign-in"} className="sign-in">
            Sign In
          </Link>
          <Link to={"/sign-up"} className="sign-up">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavDesktop;
