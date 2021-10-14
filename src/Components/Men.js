import React from "react";
import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "../style/men.scss";

function Men(props) {
  const initialProducts = props.articlesDataJson.filter(
    (product) => product.gender === "men"
  );
  const [displayProducts, setDisplayProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setDisplayProducts(initialProducts);
  }, [initialProducts, props.articlesDataJson]);

  useEffect(() => {
    setDisplayProducts(
      initialProducts.filter((project) => {
        return (
          project.imageDescription
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          project.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.thePrice.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
    );
  }, [initialProducts, searchTerm]);

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
        {displayProducts.map((projectCard, index) => {
          return (
            <div key={index} className="project-card">
              <img src={projectCard.imageURL} alt={projectCard.imageTitle} />
              <div className="parg">
                <p>{projectCard.imageDescription}</p>
              </div>
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
