import React from "react";
import { useState, useEffect } from "react";
import "../style/shopcard.scss";
import initialProjects from "../data/projectsData.json";

function Men() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState("n");

  useEffect(() => {
    setProjects(
      initialProjects.filter((project) => {
        // console.log(project)
        if (
          // searchTerm === "" ||
          project.imageDescription
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.thePrice.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return project;
        }
      })
    );
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="projects-wrapper">
      <h2>Projects</h2>
      <input
        type="text"
        placeholder="Search ..."
        className="inputSearch"
        onChange={handleSearch}
      />
      <p>Hier verkaufen wir kleidung</p>
      <div className="projects-cards-wrapper">
        {projects.map((projectCard) => {
          return (
            <div className="project-card">
              <img src={projectCard.imageURL} alt={projectCard.imageTitle} />
              <p>
                {projectCard.imageDescription}
              </p>
              <p className="price">{projectCard.thePrice}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Men;

