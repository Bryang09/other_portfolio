import React from "react";

import "./About.css";

const About = () => {
  return (
    <div className="About">
      <h3>What Do I Have to Offer?</h3>
      <hr />
      <div className="skills">
        <div className="skill">
          <img src={require("./coding.svg")} alt="" />
          <h4>Best Practice</h4>
          <h5>
            I believe it's important to write code that is legible in order to
            maintain a smooth and organized working environment.
          </h5>
        </div>
        <div className="skill">
          <img src={require("./responsive.svg")} alt="" />
          <h4>Responsive Designs</h4>
          <h5>
            With the undeniable increase in mobile browsing, creating webistes
            that are designed for mobile users is a must.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default About;
