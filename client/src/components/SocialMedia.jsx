import React from "react";
import "../Styles/SocialMediaStyles.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function SocialMedia() {
  return (
    <React.Fragment>
      <div className="SMContainer">
        <div className="SMListSection">
          <div className="SMListItem">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/BlakeReidinger"
            >
              <AiFillGithub className="siteColor btnStyle" />
            </a>{" "}
          </div>
          <div className="SMListItem">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/blake-reidinger/"
            >
              <AiFillLinkedin className="siteColor btnStyle" />
            </a>{" "}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SocialMedia;
