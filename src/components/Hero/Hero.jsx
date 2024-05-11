import React from "react";
import "./Hero.css";
import arrow from "../../assets/arrow.svg";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Where Flavor Meets Tradition</h1>
        <p>Taste the Heritage at Our Traditional Resto!</p>
        <button className="btn">
          Order Now <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
