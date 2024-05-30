import React from "react";
import "../Styles/TechnologyStyle.css";
import reactImage from "../assets/react.png";

function Technology() {
  return (
    <React.Fragment>
      <summary className="technology-cursor"></summary>
      <div className="technology-dropdown">
        <div className="technology-item">
          <div className="iconContainer">
            <div className="techIcon">
              <img src={reactImage} alt="BlakeReidinger"></img>
            </div>
            <div className="techDescription">React</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Technology;
