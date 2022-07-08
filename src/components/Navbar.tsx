import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={"/"} className="brand-logo">
          Home
        </Link>
        <ul id="nav-mobile" className="nav-wrapper--ul">
          <Link to={"/"}>Home</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
