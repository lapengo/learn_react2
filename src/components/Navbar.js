import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  bg-dark ">
      <Link className="navbar-brand" to="/">
        Learn React
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink exact className="nav-item nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-item nav-link" to="/Image">
            Image
          </NavLink>
          <NavLink className="nav-item nav-link" to="/About">
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
