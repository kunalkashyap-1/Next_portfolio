"use client";
import config from "@/config";
import React, { useState } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <a href="/" className="logo">
        <Image
          src="https://raw.githubusercontent.com/kunalkashyap-1/Next_portfolio/master/src/icons/logo.png"
          alt="logo"
          width={70}
          height={70}
          style={{
            width: "70",
            height: "auto",
          }}
        />
      </a>
      <div
        className={`menu-icon ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        {config.navLinks.map(({ name, url }, i: number) => (
          <li
            key={i}
          >
            <a href={url} onClick={toggleMenu} className="w-full text-center">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;