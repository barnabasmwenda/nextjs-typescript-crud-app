"use client";
import { useState } from "react";
import Link from "next/link";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      document.body.style.overflow = "none";
    }
  };

  return (
    <nav className="navbar wrapper-padding">
      <div className="navContainer">
        <div className="logo">
          <Link href="/">Achieve it.</Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "change" : ""}`}></div>
          <div className={`bar ${menuOpen ? "change" : ""}`}></div>
          <div className={`bar ${menuOpen ? "change" : ""}`}></div>
        </div>
        <div className={`menu ${menuOpen ? "menuOpen" : ""} wrapper-padding`}>
          <Link href="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/sign-in" onClick={toggleMenu}>
            Sign in
          </Link>
          <Link href="/sign-up" onClick={toggleMenu}>
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
