import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="hero">  {/* Changed from classnameName to className */}
      <div className="logo">  {/* Changed from classnameName to className */}
        <img src="/api/placeholder/120/120" alt="Logo" />
      </div>
      <div className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`menu ${menuOpen ? "active" : ""}`}>  {/* Changed from classnameName to className */}
        <ul>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
    </section>
  );
};

export default Hero;
