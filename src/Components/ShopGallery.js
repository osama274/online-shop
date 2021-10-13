import React from "react";
import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "../style/shopcard.scss";

function Men(props) {
  const [projects, setProjects] = useState(props.articlesDataJson);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setProjects(
      props.articlesDataJson.filter((project) => {
        if (
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
  }, [props.articlesDataJson, searchTerm]);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="projects-wrapper">
      <input
        type="text"
        placeholder="Search ..."
        className="inputSearch"
        onChange={handleSearch}
      />
      <div className="projects-cards-wrapper">
        {projects.map((projectCard, index) => {
          return (
            <div key={index} className="project-card">
              <img src={projectCard.imageURL} alt={projectCard.imageTitle} />
                <div className="parg"><p>{projectCard.imageDescription}</p></div>
              <div className="desc">
              <button className="icon">
                  <FaShoppingCart />
                </button>
                <p className="price">{projectCard.thePrice}</p>
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Men;
