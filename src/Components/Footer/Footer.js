import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <ul>
        <li>
          <a href="https://github.com/Bryang09">
            <i className="fab fa-github fa-3x" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/bryan-gonzalez09/">
            <i className="fab fa-linkedin fa-3x" />
          </a>
        </li>
        <li>
          <a href="mailto:'bryan.gonzalez1020.bg@gmail.com'">
            <i className="fas fa-envelope fa-3x" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
