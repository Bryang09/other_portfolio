import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  state = {
    Projects: [
      {
        id: 4,
        img: "restaurant.jpg",
        title: "Restaurant Application",
        desc: "A modern website that advertises a mock restauarant.",
        demo: "https://bryang09.github.io/restaurant/#/",
        code: "https://github.com/Bryang09/restaurant",
        tech: ["React", "React-Router", "Flexbox"]
      },
      {
        id: 3,
        img: "recipe.jpg",
        title: "Recipe Application",
        desc:
          "This app makes use of the Food2Fork api. It is designed to deliver a number of recipes for any craving.",
        demo: "https://bryang09.github.io/recipe/#/",
        code: "https://github.com/Bryang09/recipe",
        tech: ["React", "React-Router", "Flexbox", "Axios"]
      },
      {
        id: 1,
        img: "movie.jpg",
        title: "The Movie App",
        desc:
          " An application making use of the MovieDb api. There is no movie you can't find information for.",
        demo: "https://bryang09.github.io/movies/ ",
        code: " https://github.com/Bryang09/movies",
        tech: ["React", "React-Router", "Flexbox", "Axios"]
      },
      {
        id: 6,
        img: "glasses.jpg",
        title: "The Glasses App",
        desc: "A landing site for a company that sells glasses.",
        demo: "https://bryang09.github.io/glasses/ ",
        code: " https://github.com/Bryang09/glasses",
        tech: ["React", "React-Router", "Flexbox"]
      },
      {
        id: 5,
        img: "shelter.jpg",
        title: "Shelter App",
        desc:
          "  An application which constantly searches for both shelters and animals based on their ZIP Code.",
        demo: "https://bryang09.github.io/adoption/#/",
        code: "https://github.com/Bryang09/adoption",
        tech: ["React", "React-Router", "Flexbox", "Axios"]
      },
      {
        id: 0,
        img: "clothing.jpg",
        title: "Clothing Store",
        desc:
          " An application that makes use of the MERN Stack, Bryan's Clothing Store shows a mock online retail store.",
        demo: "https://pure-tundra-64712.herokuapp.com/",
        code: "https://github.com/Bryang09/clothing ",
        tech: [
          "React",
          "React-Router",
          "Flexbox",
          "Axios",
          "MongoDB",
          "Express"
        ]
      },

      {
        id: 2,
        img: "estate.jpg",
        title: "Real Estate App",
        desc:
          " As with the Clothing Store, This application uses the MERN Stack to display some mock listings",
        demo: "https://arcane-bayou-79440.herokuapp.com/",
        code: "https://github.com/Bryang09/real-estate",
        tech: [
          "React",
          "React-Router",
          "Flexbox",
          "Axios",
          "MongoDB",
          "Express"
        ]
      }
    ]
  };

  render() {
    const projects = this.state.Projects.map(project => {
      return (
        <div className="Project" key={project.id}>
          <div className="img">
            <img src={require(`./Images/${project.img}`)} alt={project.title} />
          </div>
          <div className="ProjectText">
            <h2>{project.title}</h2>
            <h3>{project.desc}</h3>
            <div className="technology">
              <ul>
                {project.tech
                  ? project.tech.map((t, i) => {
                      return <li key={i}>{t}</li>;
                    })
                  : null}
              </ul>
            </div>
            <div className="Buttons">
              <a href={project.demo} target="_blank">
                <h5 className="Demo">Demo</h5>
              </a>
              <a href={project.code} target="_blank">
                <h5 className="Code">Code</h5>
              </a>
            </div>
          </div>
        </div>
      );
    });
    return (
      <section className="Projects" id="projects">
        <h2
          style={{ marginBottom: 0, backgroundImage: "none", color: "#706f6f" }}
        >
          My Projects
        </h2>
        <hr style={{ width: "25%", marginBottom: "2vh" }} />
        <div className="MyProjects">{projects}</div>
      </section>
    );
  }
}

export default Projects;
