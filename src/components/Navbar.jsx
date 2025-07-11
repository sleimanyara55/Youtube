import React from "react";
import "./Navbar.css";
import logo from "../img/logo.png"; // adjust path if your img/ folder is deeper

function Navbar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-icon" />
        <a href="/" className="logo-link" aria-label="Homepage">YouTube</a>
      </div>
      <ul className="sidebar-links">
        <li>Home</li>
        <li>Explore</li>
        <li>Subscriptions</li>
        <li>Library</li>
        <li>Watch Later</li>
        <li>History</li>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li>News</li>    
        <li>Live</li>
      </ul>
    </div>
  );
}

export default Navbar;
