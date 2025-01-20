"use client";
import config from "@/config";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <Link href="/" className="logo">
        <Image
          src="/logo.png"
          alt="logo"
          width={70}
          height={70}
          style={{ width: "70", height: "auto" }}
        />
      </Link>

      <div
        className={`menu-icon ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <motion.div
          className="bar"
          animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        />
        <motion.div
          className="bar"
          animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
        />
        <motion.div
          className="bar"
          animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        />
      </div>

      <AnimatePresence>
        <motion.ul
          className={`navbar-menu ${isMenuOpen ? "open" : ""}`}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
        >
          {config.navLinks.map(({ name, url }, i: number) => (
            <motion.li key={i}>
              <a href={url} onClick={() => setIsMenuOpen(false)}>
                {name}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
