import React from "react";
import "../Styles/ResumeStyle.css";
import resumeImage from "../assets/resume.png";

function Resume() {
  return (
    <React.Fragment>
      <div className="resume-container">
        <div className="resume-main-container">
          <h1 className="resume-title-style">My Resume</h1>
          <h1 className="resume-position"></h1>
          <img src={resumeImage} alt="BlakeReidingerResume" />
          <br />
          <br />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Resume;
