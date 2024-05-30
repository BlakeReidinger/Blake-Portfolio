import React, { useState } from "react";
import "../Styles/HomeStyle.css";
import SocialMedia from "../components/SocialMedia";
import Education from "../components/Education";

function Home() {
  // State to manage dropdown visibility
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // State to manage arrow direction
  const [isArrowDown, setIsArrowDown] = useState(false);

  // Toggle function
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
    setIsArrowDown(!isArrowDown);
  };
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
          <div className="education-section">
            {/* Dropdown Button */}
            <button onClick={toggleDropdown} className="dropdown-button">
              {/* Arrow symbol */}
              <span>{isArrowDown ? "▼" : "►"}</span> Education
            </button>
            {/* Conditionally render Education component */}
            {isDropdownVisible && (
              <div className="education-content">
                <Education />
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
