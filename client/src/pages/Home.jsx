import React, { useState } from "react";
import "../Styles/HomeStyle.css";
import SocialMedia from "../components/SocialMedia";
import Education from "../components/Education";
import Skill from "../components/Skill";
import Technology from "../components/Technology";
import Language from "../components/Language";
import Project from "../components/Project";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

function Home() {
  // State to manage dropdown visibility for all Components
  const [isEducationDropdownVisible, setIsEducationDropdownVisible] =
    useState(false);

  const [isSkillsDropdownVisible, setIsSkillsDropdownVisible] = useState(false);
  const [isTechnologiesDropdownVisible, setIsTechnologiesDropdownVisible] =
    useState(false);
  const [isLanguagesDropdownVisible, setIsLanguagesDropdownVisible] =
    useState(false);
  const [isProjectsDropdownVisible, setIsProjectsDropdownVisible] =
    useState(false);

  // State to manage arrow direction for all Components
  const [isEducationArrowDown, setIsEducationArrowDown] = useState(false);
  const [isSkillsArrowDown, setIsSkillsArrowDown] = useState(false);
  const [isTechnologiesArrowDown, setIsTechnologiesArrowDown] = useState(false);
  const [isLanguagesArrowDown, setIsLanguagesArrowDown] = useState(false);
  const [isProjectsArrowDown, setIsProjectsArrowDown] = useState(false);

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

  // Toggle function for Languages dropdown
  const toggleLanguagesDropdown = () => {
    setIsLanguagesDropdownVisible(!isLanguagesDropdownVisible);
    setIsLanguagesArrowDown(!isLanguagesArrowDown);
  };

  // Toggle function for Projects dropdown
  const toggleProjectsDropdown = () => {
    setIsProjectsDropdownVisible(!isProjectsDropdownVisible);
    setIsProjectsArrowDown(!isProjectsArrowDown);
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
              <span>
                {isEducationArrowDown ? (
                  <IoMdArrowDropdown />
                ) : (
                  <IoMdArrowDropright />
                )}
              </span>{" "}
              Education
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
                {isSkillsArrowDown ? (
                  <IoMdArrowDropdown />
                ) : (
                  <IoMdArrowDropright />
                )}
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
              className="technology-dropdown-button"
            >
              {/* Arrow symbol */}
              <span className="arrow-icon">
                {isTechnologiesArrowDown ? (
                  <IoMdArrowDropdown />
                ) : (
                  <IoMdArrowDropright />
                )}
              </span>
              Technologies
            </button>
            {/* Conditionally render Technology component */}
            {isTechnologiesDropdownVisible && (
              <div className="education-content">
                <Technology />
              </div>
            )}
          </div>
          <div className="education-section">
            {/* Dropdown Button for Languages */}
            <button
              onClick={toggleLanguagesDropdown}
              className="language-dropdown-button"
            >
              {/* Arrow symbol */}
              <span className="arrow-icon">
                {isLanguagesArrowDown ? (
                  <IoMdArrowDropdown />
                ) : (
                  <IoMdArrowDropright />
                )}
              </span>
              Languages
            </button>
            {/* Conditionally render Language component */}
            {isLanguagesDropdownVisible && (
              <div className="education-content">
                <Language />
              </div>
            )}
          </div>
          <div className="education-section">
            {/* Dropdown Button for Projects */}
            <button
              onClick={toggleProjectsDropdown}
              className="project-dropdown-button"
            >
              {/* Arrow symbol */}
              <span className="arrow-icon">
                {isProjectsArrowDown ? (
                  <IoMdArrowDropdown />
                ) : (
                  <IoMdArrowDropright />
                )}
              </span>
              Projects
            </button>
            {/* Conditionally render Project component */}
            {isProjectsDropdownVisible && (
              <div className="education-content">
                <Project />
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
