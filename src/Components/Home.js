import React from "react";
import "../style/home.scss";
import universeBGImage from "../assets/vincentiu-solomon-ln5drpv_ImI-unsplash.jpg";

function Home() {
  return (
    <div
      className="home-wrapper"
      style={{ backgroundImage: `url(${universeBGImage})` }}
    >
      <div>
        Welcome, To <h1>Online Shop</h1>.
      </div>
      <p>Enjoy shopping.</p>
    </div>
  );
}

export default Home;
