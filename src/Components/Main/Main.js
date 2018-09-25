import React from "react";

import Home from "../Home/Home";
import About from "../About/About";
import Graph from "../About/Graph/Graph";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div className="Main" style={{ overflowX: "hidden" }}>
      <Home />
      <About />
      <Graph />
      <Projects />
      <Footer />
    </div>
  );
};

export default Main;
