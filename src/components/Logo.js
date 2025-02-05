import React from "react";
import "./Logo.css";

const Logo = () => {
    return (
        <section className="logos">
            <div className="logos-container">  {/* Changed from classnameName to className */}
                <div className="logo-item">Logo 1</div>  {/* Changed from classnameName to className */}
                <div className="logo-item">Logo 2</div>  {/* Changed from classnameName to className */}
                <div className="logo-item">Logo 3</div>  {/* Changed from classnameName to className */}
            </div>
        </section>
    );
};

export default Logo;
