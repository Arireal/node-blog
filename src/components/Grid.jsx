import React from "react";
import "./../styles/Grid.css";

const Grid = () => {
  return (
      <section className="grid">
        <div className="grid-title">
              <h3>Highlights</h3>
          </div>
      <div className="grid-container">
            <div className="grid-item">
        <h3>Article of the Month</h3>
        <a href="https://www.aogaroi.com/exploring-the-depths-of-boredom-unraveling-the-intriguing-game-of-life-in-a-cursed-city" target="_blank" rel="noopener noreferrer" className="image-link">
            <img src="/images/1.png" alt="New A. O. Garoi Article" />
            <div className="hover-text">Check it out</div>
        </a>
        </div>

        <div className="grid-item">
        <h3>Bookish Partners</h3>
        <a href="https://www.instagram.com/p/C84xhshAqQs/?igsh=ZDA3ODdndW1pejg4" target="_blank" rel="noopener noreferrer" className="image-link">
            <img src="/images/2.png" alt="A. O. Garoi Retailers" />
            <div className="hover-text">Check it out</div>
        </a>
        </div>
        <div className="grid-item">
        <h3>The Art of Complex World-Building in Hofinda Series</h3>
        <a href="https://www.garoihouse.com" target="_blank" rel="noopener noreferrer" className="image-link">
            <img src="/images/3.png" alt="Hofinda Series" />
            <div className="hover-text">Coming Soon</div>
        </a>
        </div>
        <div className="grid-item">
        <h3>New in the Shop</h3>
        <a href="https://www.adwstudium.com" target="_blank" rel="noopener noreferrer" className="image-link">
            <img src="/images/4.png" alt="OAK, Extended Halloween Days T-shirt" />
            <div className="hover-text">Check it out</div>
        </a>
        </div>
        <div className="grid-item">
        <h3>Article: The Need for Inclusive Characters in Young Adult Literature</h3>
        <a href="https://www.garoihouse.com" target="_blank" rel="noopener noreferrer" className="image-link">
            <img src="/images/5.png" alt="OAK, Extended Halloween Days" />
            <div className="hover-text">Coming Soon</div>
        </a>
        </div>
        <div className="grid-item">
        <h3>New Partners in the Art Direction Wing</h3>
        <a href="https://www.arianegaroi.com/arianegaroi-partnerships" target="_blank" rel="noopener noreferrer" className="image-link">
            <img src="/images/6.png" alt="Ariane Garoi Partnerships" />
            <div className="hover-text">Check it out</div>
        </a>
        </div>
      </div>
  </section>
  
  );
};

export default Grid;
