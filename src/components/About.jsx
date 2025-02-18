import React from "react";
import "./../styles/About.css";


const About = () => {
  return (
    <section className="about">  {/* Changed from classnameName to className */}
      <div className="about-content">  {/* Changed from classnameName to className */}
        <div className="about-text">  {/* Changed from classnameName to className */}
          <h2>
          Boredom: A Curse, a <span>Catalyst</span>, or Something More?
         
          </h2>
          <p>
          What if boredom wasn’t just dull—but a force that shapes the way we think, create, and seek meaning? In OAK, Extended Halloween Days, a city trapped in endless Halloween becomes the stage for a deeper question: does monotony drive us to escape, to control, or to connect?
<br />
<br />
Through a cursed game, a restless wizardess, and a golem’s silent love, this article reflects a little on the philosophy of boredom — how it haunts us, moves us, and reveals what we truly seek.  
          </p>
          <br />
          <p>Curious?</p>
          <a href="https://www.aogaroi.com/exploring-the-depths-of-boredom-unraveling-the-intriguing-game-of-life-in-a-cursed-city" target="_blank" rel="noopener noreferrer" className="round-button">
  Read More
</a>

        </div>
        <div className="about-image">  
          <img src="/images/1.png" alt="About" />
        
        </div>
      </div>
    </section>
  );
};

export default About;
