import React from 'react';
import "./../styles/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
    
      {/* Main content of AboutPage */}
      <div className="about-container">
        <section className="section intro">
          <h1>About Us</h1>
          <p>Welcome to <span className="highlight">The House of the Wind that Welcomes</span> – A Dynamic Space for Creativity and Exploration</p>
        </section>

        <section className="section what-we-offer">
          <h2>What We Offer</h2>
          <ul>
            <li><strong>Art & Design</strong> – Explore a universe of visually striking creations, from digital illustrations and multimedia projects to thoughtfully designed products and interactive experiences.</li>
            <li><strong>Literary Worlds</strong> – Step into the rich narratives of A. O. Garoi, where speculative fiction meets deep storytelling. Each book is accompanied by stunning visuals that enhance the reading experience.</li>
            <li><strong>Innovative Digital Experiences</strong> – Through ADW Studio, we craft UX/UI designs, web solutions, motion graphics, and branding that blend functionality with artistic expression.</li>
          </ul>
        </section>

        <section className="section creativity">
          <h2>Experience Creativity in Motion</h2>
          <p>This is not just a place where different creative disciplines meet—it’s a space where you experience them in a dynamic way. Through interactive projects, multimedia storytelling, and thoughtfully curated content, <span className="highlight">The House of the Wind that Welcomes</span> invites you to engage with creativity like never before.</p>
        </section>

        <section className="section join-us">
          <h2>Join the Journey</h2>
          <p>We believe in the power of collaboration and community. Whether you’re here to explore, create, or be inspired, you’re part of this evolving artistic landscape. Follow along as we bring new projects to life, share insights into our creative process, and develop experiences that blur the lines between art, design, and storytelling.</p>
        </section>
      </div>

    </div>
  );
};

export default AboutPage;
