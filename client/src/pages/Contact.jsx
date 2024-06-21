import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/ContactStyle.css";
import "../Styles/HomeStyle.css";
import { BsLink45Deg } from "react-icons/bs";

const Contact = () => {
  const form = useRef(null);
  const [ifEmailSent, setIfEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tyoh5qi",
        "template_w052f9b",
        form.current,
        "rZriKEByVmElKHB9i"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIfEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <React.Fragment>
      <div className="website-container">
        <div className="contact-main-container">
          <br />
          <br />
          <br />
          <h1
            style={{
              margin: "-2.5rem 0 3rem 0",
              fontSize: "42px",
              paddingBottom: "3rem",
              borderBottom: "1px solid #d68b52",
            }}
          >
            Get in touch with me
          </h1>
          <h3>Contact:</h3>
          <ul className="contact-list">
            <li className="list-item">
              Email:{" "}
              <span style={{ color: "#d68b52" }}>Breidinger98@hotmail.com</span>
            </li>
            <li className="list-item">
              LinkedIn:{" "}
              <a
                className="link-item"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/blake-reidinger/"
              >
                <BsLink45Deg />
                <em>View Profile</em>
              </a>
            </li>
            <li className="list-item">
              GitHub:{" "}
              <a
                className="link-item"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/BlakeReidinger"
              >
                <BsLink45Deg />
                <em>View Profile</em>
              </a>
            </li>
          </ul>
          {!ifEmailSent ? (
            <>
              <h1
                style={{
                  margin: "-.01rem 0 2rem 0",
                  fontSize: "42px",
                  paddingBottom: "3rem",
                  borderBottom: "1px solid #d68b52",
                }}
              ></h1>
              <h3>Or, send me an email from here:</h3>
              <div style={{ width: "100%", display: "flex" }}>
                <form className="email-form" ref={form} onSubmit={sendEmail}>
                  <div className="left-section">
                    <div className="small-input-container">
                      <label>
                        Name: <br />
                        <input
                          className="small-input"
                          placeholder="Enter your full name..."
                          type="text"
                          name="user_name"
                          required
                        />
                      </label>
                    </div>
                    <div className="small-input-container">
                      <label>
                        Email: <br />
                        <input
                          className="small-input"
                          placeholder="Enter your email address..."
                          type="email"
                          name="user_email"
                          required
                        />
                      </label>
                    </div>
                  </div>
                  <div style={{ width: "50%", float: "right" }}>
                    <div style={{ width: "100%", height: "8rem" }}>
                      <label>
                        Message: <br />
                        <textarea
                          className="large-input"
                          placeholder="Enter your message..."
                          name="message"
                          required
                        />
                      </label>
                    </div>
                  </div>
                  <input className="submit-button" type="submit" value="Send" />
                  <br />
                  <br />
                </form>
              </div>
              <br />
              <br />
            </>
          ) : (
            <>
              <h1
                style={{
                  margin: "-.01rem 0 2rem 0",
                  fontSize: "42px",
                  paddingBottom: "3rem",
                  borderBottom: "1px solid #d68b52",
                }}
              ></h1>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "42px",
                  background: "rgba(255, 255, 255, 0.11)",
                  padding: "1rem",
                  borderRadius: "10px",
                }}
              >
                Thank you for your message!
              </div>
              <br />
              <br />
            </>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
