import React from "react";
import "./../styles/Grid.css";

const Grid = () => {
  return (
      <section className="grid">
      <div className="grid-container">
          <div className="grid-item">
              <h3>B-Lish Cosmetics</h3>
              <img src="/images/grid1.png" alt="B-Lish Cosmetics" />
          </div>
          <div className="grid-item">
              <h3>Retro Jukebox</h3>
              <img src="/images/grid2.png" alt="Retro Jukebox" />
          </div>
          <div className="grid-item">
              <h3>Candy Cones</h3>
              <img src="/images/grid3.png" alt="Candy Cones" />
          </div>
          <div className="grid-item">
              <h3>Candle Stop</h3>
              <img src="/images/grid4.png" alt="Candle Stop" />
          </div>
          <div className="grid-item">
              <h3>NUJO BUJO</h3>
              <img src="/images/grid5.png" alt="NUJO BUJO" />
          </div>
          <div className="grid-item">
              <h3>Darcy Davies</h3>
              <img src="/images/grid6.png" alt="Darcy Davies" />
          </div>
      </div>
  </section>
  
  );
};

export default Grid;
