import React from "react";
import "../Styles/SkillStyle.css";
import websiteImage from "../assets/website.png";
import webappImage from "../assets/webapp.png";
import databaseImage from "../assets/database.png";
import backendImage from "../assets/backend.png";
import gitImage from "../assets/git.png";
import apiImage from "../assets/api.png";
import aspImage from "../assets/asp.png";

function Skill() {
  return (
    <React.Fragment>
      <summary className="skill-cursor"></summary>
      <div className="skill-dropdown">
        <div className="skill-item">
          <div className="skill-item-style">
            <div className="skill-icon">
              <img src={websiteImage} alt="BlakeReidinger"></img>
            </div>
            <h3 className="skill-title">Websites</h3>
            <h6>Dynamic, responsive front-end websites</h6>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-item-style">
            <div className="skill-icon">
              <img src={webappImage} alt="BlakeReidinger"></img>
            </div>
            <h3 className="skill-title">Web Applications</h3>
            <h6>Full-Stack Web Applications</h6>
            <h6 className="skill-information">Front-End & Back-End</h6>
            <h6 className="skill-information">
              Client / API / Server / Database Management
            </h6>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-item-style">
            <div className="skill-icon">
              <img src={databaseImage} alt="BlakeReidinger"></img>
            </div>
            <h3 className="skill-title">Database Management</h3>
            <h6>Full-Stack Web Applications</h6>
            <h6 className="skill-information">Front-End & Back-End</h6>
            <h6 className="skill-information">
              Efficient data handling with SQL Server
            </h6>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-item-style">
            <div className="skill-icon">
              <img src={backendImage} alt="BlakeReidinger"></img>
            </div>
            <h3 className="skill-title">Backend Development</h3>
            <h6>Robust APIs with .NET and C#</h6>
            <h6 className="skill-information">
              Backend logic and services with C#
            </h6>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-item-style">
            <div className="skill-icon">
              <img src={gitImage} alt="BlakeReidinger"></img>
            </div>
            <h3 className="skill-title">Version Control</h3>
            <h6>Git and GitHub proficiency</h6>
            <h6 className="skill-information">Semantic versioning</h6>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-item-style">
            <div className="skill-icon">
              <img src={apiImage} alt="BlakeReidinger"></img>
            </div>
            <h3 className="skill-title">Restful APIs</h3>
            <h6>Designing and consuming RESTful APIs</h6>
            <h6 className="skill-information">HTTP Requests / Responses</h6>
            <h6 className="skill-information">Postman For API Testing</h6>
          </div>
        </div>
        <div className="skill-item">
          <div className="skill-item-style">
            <div className="skill-icon">
              <img src={aspImage} alt="BlakeReidinger"></img>
            </div>
            <h3 className="skill-title">ASP.NET</h3>
            <h6>Building robust web applications with ASP.NET</h6>
            <h6 className="skill-information">
              Server-side logic and routings
            </h6>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Skill;
