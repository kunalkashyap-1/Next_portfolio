"use client";
import config from "../config";
import { NavLink } from "../../models/configModel";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-brand">My Website</h1>
      <div
        className={`menu-icon ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        {config.navLinks.map(({ name, url }: NavLink, i: number) => (
          <li key={i}>
            <a href={url}>{name}</a>
          </li>
        ))}
        <li>
          <a href="/resume" target="_blank">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
