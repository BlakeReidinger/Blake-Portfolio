import React from "react";
import "../Styles/HomeStyle.css";
import SocialMedia from "../components/SocialMedia";

function Home() {
  return (
    <React.Fragment>
      <div className="home-page">
        <div className="home-main-container">
          <h1 className="home-name-header">Blake Reidinger</h1>
          <h1 className="home-title-header">
            Full-Stack Software Developer
            <SocialMedia />
          </h1>
          <h1 className="bar ml-auto"></h1>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
