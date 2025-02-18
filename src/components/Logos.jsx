import React from "react";
import "./../styles/Logos.css";

const Logo = () => {
  return (
      <section className="logos">
        <div className="collaborators">
              <h3>Collaborators</h3>
          </div>
          <div className="logos-container"> 
              <div className="logo-item"> <img src="/images/logo1.png" alt="Logo1" /></div>  
              <div className="logo-item"><img src="/images/logo2.png" alt="Logo1" /></div>  
              <div className="logo-item"><img src="/images/logo3.png" alt="Logo1" /></div>  
          </div>
      </section>
  );
};

export default Logo;
