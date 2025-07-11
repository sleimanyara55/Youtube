import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <a href="/" className="logo-link" aria-label="Homepage">YouTube</a>
      </div>
      <ul className="sidebar-links">
        <li>Home</li>
        <li>Subscriptions</li>
        <li>Library</li>
        <li>Watch Later</li>
      </ul>
    </div>
  );
}

export default Navbar;
