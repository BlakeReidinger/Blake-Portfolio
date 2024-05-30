import React, { useState } from "react";
import "../Styles/HomeStyle.css";
import SocialMedia from "../components/SocialMedia";
import Education from "../components/Education";
import Skill from "../components/Skill";
import Technology from "../components/Technology";

function Home() {
  // State to manage dropdown visibility for all Components
  const [isEducationDropdownVisible, setIsEducationDropdownVisible] =
    useState(false);

  const [isSkillsDropdownVisible, setIsSkillsDropdownVisible] = useState(false);
  const [isTechnologiesDropdownVisible, setIsTechnologiesDropdownVisible] =
    useState(false);

  // State to manage arrow direction for all Components
  const [isEducationArrowDown, setIsEducationArrowDown] = useState(false);
  const [isSkillsArrowDown, setIsSkillsArrowDown] = useState(false);
  const [isTechnologiesArrowDown, setIsTechnologiesArrowDown] = useState(false);

  // Toggle function for Education dropdown
  const toggleEducationDropdown = () => {
    setIsEducationDropdownVisible(!isEducationDropdownVisible);
    setIsEducationArrowDown(!isEducationArrowDown);
  };

  // Toggle function for Skills dropdown
  const toggleSkillsDropdown = () => {
    setIsSkillsDropdownVisible(!isSkillsDropdownVisible);
    setIsSkillsArrowDown(!isSkillsArrowDown);
  };

  // Toggle function for Technologiess dropdown
  const toggleTechnologiesDropdown = () => {
    setIsTechnologiesDropdownVisible(!isTechnologiesDropdownVisible);
    setIsTechnologiesArrowDown(!isTechnologiesArrowDown);
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
            {/* Dropdown Button for Education */}
            <button
              onClick={toggleEducationDropdown}
              className="dropdown-button"
            >
              {/* Arrow symbol */}
              <span>{isEducationArrowDown ? "▼" : "►"}</span> Education
            </button>
            {/* Conditionally render Education component */}
            {isEducationDropdownVisible && (
              <div className="education-content">
                <Education />
              </div>
            )}
          </div>
          <div className="education-section">
            {/* Dropdown Button for Skills */}
            <button
              onClick={toggleSkillsDropdown}
              className="skills-dropdown-button"
            >
              {/* Arrow symbol */}
              <span className="arrow-icon">
                {isSkillsArrowDown ? "▼" : "►"}
              </span>
              Skills
            </button>
            {/* Conditionally render Skill component */}
            {isSkillsDropdownVisible && (
              <div className="education-content">
                <Skill />
              </div>
            )}
          </div>
          <div className="education-section">
            {/* Dropdown Button for Technologies */}
            <button
              onClick={toggleTechnologiesDropdown}
              className="skills-dropdown-button"
            >
              {/* Arrow symbol */}
              <span className="arrow-icon">
                {isTechnologiesArrowDown ? "▼" : "►"}
              </span>
              Technologies
            </button>
            {/* Conditionally render Skill component */}
            {isTechnologiesDropdownVisible && (
              <div className="education-content">
                <Technology />
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
