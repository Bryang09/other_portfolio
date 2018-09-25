import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="text">
        <h1>Bryan Gonzalez | Front End Developer</h1>
      </div>

      <div className="HomeIcons">
        <ul>
          <li>
            <a href="https://github.com/Bryang09">
              <i className="fab fa-github fa-4x" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/bryan-gonzalez09/">
              <i className="fab fa-linkedin fa-4x" />
            </a>
          </li>
          <li>
            <a href="mailto:'bryan.gonzalez1020.bg@gmail.com'">
              <i className="fas fa-envelope fa-4x" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
