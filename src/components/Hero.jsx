import React, { useState } from "react";
import "./../styles/Hero.css";

const Hero = ({ scrollToAbout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Update scrollToAbout to also close the menu
  const handleScrollToAbout = () => {
    scrollToAbout();
    toggleMenu(); // Close the menu after scrolling
  };

  return (
    <section className="hero">
      <div className="logo">
        <img src="/images/300x300.png" alt="Logo" />
      </div>
      
      {/* Menu Toggle */}
      <div className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Exit X Button - Fixed position */}
      <div className={`exit-x ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
      </div>

      {/* Navigation Menu */}
      <nav className={`menu ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          {/* Use handleScrollToAbout to scroll to the About Us button and close the menu */}
          <li><a href="#about-button" onClick={handleScrollToAbout}>About Us</a></li>
          <li><a href="#portfolio" onClick={toggleMenu}>Bookish Wing</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Visual Storytelling Wing</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Daily Designs Wing</a></li>
        </ul>
      </nav>
    </section>
  );
};

export default Hero;
