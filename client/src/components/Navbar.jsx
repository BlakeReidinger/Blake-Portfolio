import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/NavbarStyle.css";
import logoImage from "../assets/BRLogo.png";
function Navbar() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="websiteNavContainer">
        <div className="mainNavContentContainer">
          <img className="navigationImg" src={logoImage} alt="BlakeReidinger" />
          <div className="navigationButtonContainer">
            <button className="navigationButton" onClick={() => navigate("/")}>
              Home
            </button>
            <button
              className="navigationButton"
              onClick={() => navigate("/resume")}
            >
              Resume
            </button>
            <button
              className="navigationButton"
              onClick={() => navigate("/contact")}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
