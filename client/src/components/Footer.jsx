import React from "react";
import "../Styles/FooterStyle.css";

function Footer() {
  const current = new Date();
  const thisYear = `${current.getFullYear()}`;

  return (
    <React.Fragment>
      <div className="footer-container">
        <div>© All Rights Reserved {thisYear} Blake Reidinger</div>
        <div className="footer-list-section">
          <a
            className="link-item"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/BlakeReidinger/Blake-Portfolio"
          >
            Here
          </a>
        </div>
        <br />
        <br />
        <br />
      </div>
    </React.Fragment>
  );
}

export default Footer;
