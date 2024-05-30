import React from "react";
import "../Styles/EducationStyle.css";
import logo1 from "../assets/logo-devry-university.png";
import logo2 from "../assets/logo-central-texas-college.png";

function Education() {
  return (
    <React.Fragment>
      <summary className="education-pointer">{""}</summary>
      <div className="education-drop-down">
        <div className="education-item">
          <div className="education-item-style">
            <div className="education-icon">
              <img src={logo1} alt="BlakeReidinger"></img>
              <h3 className="educaction-title">DeVry University</h3>
              <h6 className="degree-title">Bachelors Degree (BS)</h6>
              <h6 className="degree-description">
                Major: <em>Computer Science (Software Development)</em>
              </h6>
              <h6 className="degree-description">
                Minor: <em>Computer Information Systems</em>
              </h6>
              <h6 className="degree-description">
                Accoloades:{" "}
                <em>
                  <ul>
                    <li>3.8/4.00 GPA</li>
                    <li>Lead Dev Team for Final SE Project</li>
                    <li>Deans List honors(x2)</li>
                    <li>Mentored Peers on React/JavaScript</li>
                  </ul>
                </em>
              </h6>
              <h6 className="degree-description">
                Activities:{" "}
                <em>
                  <ul>
                    <li>Weather API Project (Using PANDAS/Python)</li>
                    <li>Cashier System For a startup (using JAVA/C#)</li>
                    <li>
                      Created Tool Managment System For Manufactuing Companies
                    </li>
                  </ul>
                </em>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="education-details"></div>
      <summary className="education-pointer">{""}</summary>
      <div className="education-drop-down">
        <div className="education-item">
          <div className="education-item-style">
            <div className="education-icon">
              <img src={logo2} alt="BlakeReidinger"></img>
              <h3 className="educaction-title">Central Texas College</h3>
              <h6 className="degree-title">
                SAP S/4HANA 1709 Certificication (BS)
              </h6>
              <h6 className="degree-description">
                Certified Application: <em>Buisiness Process (Intergration)</em>
              </h6>
              <h6 className="degree-description">
                Concentration: <em>SAP Technologies</em>
              </h6>
              <h6 className="degree-description">
                Skills:{" "}
                <em>
                  <ul>
                    <li>Skilled In SAP S/4HANA And SQL</li>
                    <li>SAP business process configuration & Implementation</li>
                    <li>
                      Experience With End-To-End Business Process Integration
                    </li>
                    <li>Mentored Peers For SQL Queries</li>
                  </ul>
                </em>
              </h6>
              <h6 className="degree-description">
                Projects:{" "}
                <em>
                  <ul>
                    <li>Implemented MRP Solution Using SAP S/4HANA</li>
                    <li>
                      Implemented A Business Process Integration Demo Using SAP
                      S/4HANA
                    </li>
                    <li>
                      Created An SQL Database For Managing Course Materials
                    </li>
                  </ul>
                </em>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Education;
