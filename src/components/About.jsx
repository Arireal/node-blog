import React from "react";
import "./../styles/About.css";

const About = () => {
  return (
    <section className="about">  {/* Changed from classnameName to className */}
      <div className="about-content">  {/* Changed from classnameName to className */}
        <div className="about-text">  {/* Changed from classnameName to className */}
          <h2>
            My Name is Juno and I am <span>OBSESSED</span> with making products
            and brands look SLICK
          </h2>
          <p>
            I'm a photographer with 10 years of experience working directly with
            brands, focusing on raising their product photography game. In turn,
            lifting their sales from mediocre to MAJOR!
          </p>
        </div>
        <div className="about-image">  {/* Changed from classnameName to className */}
          <img src="/api/placeholder/500/400" alt="About" />
          <div className="social-icons">  {/* Changed from classnameName to className */}
            <a href="https://yourlink.com">
              <img src="/api/placeholder/20/20" alt="Social Icon 1" />
            </a>
            <a href="https://yourlink.com">
              <img src="/api/placeholder/20/20" alt="Social Icon 2" />
            </a>
            <a href="https://yourlink.com">
              <img src="/api/placeholder/20/20" alt="Social Icon 3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
