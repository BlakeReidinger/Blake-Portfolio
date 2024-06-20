import React from "react";
import "../Styles/ProjectStyle.css";
import { AiFillGithub } from "react-icons/ai";
import commentImage from "../assets/comments.png";
import reactImage from "../assets/react.png";
import mySqlImage from "../assets/mysql.png";
import myStyledComponentsImage from "../assets/styledcomponents.png";
import axiosImage from "../assets/axios.png";
import vsCodeImage from "../assets/vscode.png";
import npmImage from "../assets/npm.png";
import githubImage from "../assets/github.png";
import gitImage from "../assets/git.png";
import bootstrapImage from "../assets/bootstrap.png";
import postmanImage from "../assets/postman.png";
import trelloImage from "../assets/trello.png";
import netImage from "../assets/.net.png";
import netcoreImage from "../assets/.netcore.png";
import restapiImage from "../assets/restapi.png";
import htmlImage from "../assets/html.png";
import cssImage from "../assets/css.png";
import javaScriptImage from "../assets/javascript.png";
import sqlImage from "../assets/sql.png";
import jsonbsonImage from "../assets/jsonbson.png";
import bashshellImage from "../assets/bashshell.png";
import csharpImage from "../assets/csharp.png";
function Project() {
  return (
    <React.Fragment>
      <summary className="project-cursor"></summary>
      <div className="project-drop-down">
        <div className="project-item">
          <div className="project-header">
            <h3 className="project-item-style">Comments</h3>
            <h3 className="repository-style">
              <abbr title="View this repository on GitHub">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/BlakeReidinger/Tabi-Comments"
                >
                  <AiFillGithub className="siteColor btnStyle" />
                </a>
              </abbr>
            </h3>
          </div>
          <img className="project-img" src={commentImage} alt="Axios"></img>
          <h4 className="project-title-style">
            <span className="project-title-color">Description</span>
            <br />
            <br />
            This <span className="project-title-color">full-stack</span>{" "}
            application includes a comments section for a food and drink
            ordering app, enabling users to leave and reply to comments on their
            orders. The backend is built with SQL, storing comments in a
            hierarchical structure to support nested replies. An API in C#
            handles creating, retrieving, and managing comments, ensuring data
            integrity by marking comments as deleted rather than removing them.
            The frontend is created with React, using Formik for form handling
            and Yup for validation. A form at the top lets users submit comments
            with an optional subject line, while a table below displays comments
            and their replies, indented to show the parent-child relationships.
            Each comment entry includes the authors name, subject, and text,
            with options to edit or reply. This project demonstrates the
            integration of complex data structures into a user-friendly
            interface, ensuring both functionality and a positive user
            experience.
          </h4>
          <h4 className="project-title-style">
            <span className="project-title-color">Technology Used:</span>
            <p className="project-style-left">
              <img
                className="project-small-img"
                src={reactImage}
                alt="Git"
              ></img>
              <img
                className="project-small-img"
                src={mySqlImage}
                alt="Git"
              ></img>
              <img
                className="project-small-img"
                src={myStyledComponentsImage}
                alt="Git"
              ></img>
              <img
                className="project-small-img"
                src={axiosImage}
                alt="Git"
              ></img>
              <img
                className="project-small-img"
                src={vsCodeImage}
                alt="Git"
              ></img>
              <img
                className="project-small-img"
                src={githubImage}
                alt="Git"
              ></img>
              <img className="project-small-img" src={gitImage} alt="Git"></img>
              <img
                className="project-small-img"
                src={bootstrapImage}
                alt="Git"
              ></img>
              <img
                className="project-small-img"
                src={postmanImage}
                alt="Git"
              ></img>
              <img
                className="project-small-img"
                src={trelloImage}
                alt="Git"
              ></img>
              <img className="project-small-img" src={netImage} alt="Git"></img>
              <img
                className="project-small-img"
                src={netcoreImage}
                alt="Git"
              ></img>
              <img
                className="project-small-img"
                src={restapiImage}
                alt="Git"
              ></img>
              <img className="project-small-img" src={npmImage} alt="Git"></img>
            </p>
          </h4>
          <h4 className="project-title-style">
            <span className="project-title-color">Languages Used:</span>
            <p className="project-style-left">
              <img
                className="project-small-img"
                src={htmlImage}
                alt="Git"
              ></img>
              <img className="project-small-img" src={cssImage} alt="Git"></img>
              <img
                className="project-small-img"
                src={javaScriptImage}
                alt="Git"
              ></img>
              <img className="project-small-img" src={sqlImage} alt="Git"></img>
              <img
                className="project-small-img"
                src={jsonbsonImage}
                alt="Git"
              ></img>
              <img
                className="project-small-img"
                src={bashshellImage}
                alt="Git"
              ></img>
              <img
                className="project-small-img"
                src={csharpImage}
                alt="Git"
              ></img>
              <img className="project-small-img" src={npmImage} alt="Git"></img>
            </p>
          </h4>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Project;
