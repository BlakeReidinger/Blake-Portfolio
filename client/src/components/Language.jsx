import React from "react";
import "../Styles/LanguageStyle.css";
import htmlImage from "../assets/html.png";
import cssImage from "../assets/css.png";
import javaScriptImage from "../assets/javascript.png";
import jQueryImage from "../assets/jquery.png";
import pythonImage from "../assets/python.png";
import javaImage from "../assets/java.png";
import sqlImage from "../assets/sql.png";
import markdownImage from "../assets/markdown.png";
import jsonbsonImage from "../assets/jsonbson.png";
import bashshellImage from "../assets/bashshell.png";
import csharpImage from "../assets/csharp.png";
function Language() {
  return (
    <React.Fragment>
      <summary className="language-cursor"></summary>
      <div className="language-dropdown">
        <div className="language-item">
          <div className="iconContainer">
            <div className="languageIcon">
              <img src={htmlImage} alt="BlakeReidinger"></img>
            </div>
            <div className="languageDescription">HTML</div>
          </div>
        </div>
        <div className="language-item">
          <div className="iconContainer">
            <div className="languageIcon">
              <img src={cssImage} alt="BlakeReidinger"></img>
            </div>
            <div className="languageDescription">CSS</div>
          </div>
        </div>
        <div className="language-item">
          <div className="iconContainer">
            <div className="languageIcon">
              <img src={javaScriptImage} alt="BlakeReidinger"></img>
            </div>
            <div className="languageDescription">JavaScript</div>
          </div>
        </div>
        <div className="language-item">
          <div className="iconContainer">
            <div className="languageIcon">
              <img src={jQueryImage} alt="BlakeReidinger"></img>
            </div>
            <div className="languageDescription">jQuery</div>
          </div>
        </div>
        <div className="language-item">
          <div className="iconContainer">
            <div className="languageIcon">
              <img src={pythonImage} alt="BlakeReidinger"></img>
            </div>
            <div className="languageDescription">Python</div>
          </div>
        </div>
        <div className="language-item">
          <div className="iconContainer">
            <div className="languageIcon">
              <img src={javaImage} alt="BlakeReidinger"></img>
            </div>
            <div className="languageDescription">Java</div>
          </div>
        </div>
        <div className="language-item">
          <div className="iconContainer">
            <div className="languageIcon">
              <img src={sqlImage} alt="BlakeReidinger"></img>
            </div>
            <div className="languageDescription">T-SQL</div>
          </div>
        </div>
        <div className="language-item">
          <div className="iconContainer">
            <div className="languageIcon">
              <img src={markdownImage} alt="BlakeReidinger"></img>
            </div>
            <div className="languageDescription">Markdown</div>
          </div>
        </div>
        <div className="language-item">
          <div className="iconContainer">
            <div className="languageIcon">
              <img src={jsonbsonImage} alt="BlakeReidinger"></img>
            </div>
            <div className="languageDescription">JSON / BSON</div>
          </div>
        </div>
        <div className="language-item">
          <div className="iconContainer">
            <div className="languageIcon">
              <img src={bashshellImage} alt="BlakeReidinger"></img>
            </div>
            <div className="languageDescription">Bash / Shell</div>
          </div>
        </div>
        <div className="language-item">
          <div className="iconContainer">
            <div className="languageIcon">
              <img src={csharpImage} alt="BlakeReidinger"></img>
            </div>
            <div className="languageDescription">C#</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Language;
