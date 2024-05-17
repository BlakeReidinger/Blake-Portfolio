import React from "react";
import "../Styles/EducationStyle.css";

function Education() {
  return (
    <React.Fragment>
      <div className="education-details"></div>
      <summary className="education-pointer">
        {""}
        Education
      </summary>
      <div className="education-drop-down">
        <div className="education-item"></div>
      </div>
    </React.Fragment>
  );
}

export default Education;
