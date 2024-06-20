import React from "react";
import "../Styles/TechnologyStyle.css";
import reactImage from "../assets/react.png";
import nodeImage from "../assets/node.png";
import mySqlImage from "../assets/mysql.png";
import myViteImage from "../assets/vite.png";
import myStyledComponentsImage from "../assets/styledcomponents.png";
import axiosImage from "../assets/axios.png";
import vsCodeImage from "../assets/vscode.png";
import npmImage from "../assets/npm.png";
import gitImage from "../assets/git.png";
import githubImage from "../assets/github.png";
import gitlabImage from "../assets/gitlab.png";
import bootstrapImage from "../assets/bootstrap.png";
import vueImage from "../assets/vue.png";
import postmanImage from "../assets/postman.png";
import trelloImage from "../assets/trello.png";
import netImage from "../assets/.net.png";
import netcoreImage from "../assets/.netcore.png";
import restapiImage from "../assets/restapi.png";

function Technology() {
  return (
    <React.Fragment>
      <summary className="technology-cursor"></summary>
      <div className="technology-dropdown">
        <div className="technology-item">
          <div className="iconContainer">
            <div className="techIcon">
              <img src={reactImage} alt="BlakeReidinger"></img>
            </div>
            <div className="techDescription">React</div>
          </div>
        </div>
        <div className="technology-item">
          <div className="iconContainer">
            <div className="techIcon">
              <img src={nodeImage} alt="BlakeReidinger"></img>
            </div>
            <div className="techDescription">Node</div>
          </div>
        </div>
        <div className="technology-item">
          <div className="iconContainer">
            <div className="techIcon">
              <img src={mySqlImage} alt="BlakeReidinger"></img>
            </div>
            <div className="techDescription">MySQL</div>
          </div>
        </div>
        <div className="technology-item">
          <div className="iconContainer">
            <div className="techIcon">
              <img src={myViteImage} alt="BlakeReidinger"></img>
            </div>
            <div className="techDescription">Vite</div>
          </div>
        </div>
        <div className="technology-item">
          <div className="iconContainer">
            <div className="techIcon">
              <img src={myStyledComponentsImage} alt="BlakeReidinger"></img>
            </div>
            <div className="techDescription">Styled Components</div>
          </div>
        </div>
        <div className="technology-item">
          <div className="iconContainer">
            <div className="techIcon">
              <img src={axiosImage} alt="BlakeReidinger"></img>
            </div>
            <div className="techDescription">Axios</div>
          </div>
        </div>
        <div className="technology-item">
          <div className="iconContainer">
            <div className="techIcon">
              <img src={vsCodeImage} alt="BlakeReidinger"></img>
            </div>
            <div className="techDescription">VScode</div>
          </div>
        </div>
        <div className="technology-item">
          <div className="iconContainer">
            <div className="techIcon">
              <img src={vsCodeImage} alt="BlakeReidinger"></img>
            </div>
            <div className="techDescription">Visual Studio</div>
          </div>
        </div>
        <div className="technology-item">
          <div className="iconContainer">
            <div className="techIcon">
              <img src={npmImage} alt="BlakeReidinger"></img>
            </div>
            <div className="techDescription">NPM</div>
          </div>
        </div>
        <div className="technology-item">
          <div className="iconContainer">
            <div className="techIcon">
              <img src={gitImage} alt="BlakeReidinger"></img>
            </div>
            <div className="techDescription">Git</div>
          </div>
        </div>
        <div className="technology-item">
          <div className="iconContainer">
            <div className="techIcon">
              <img src={githubImage} alt="BlakeReidinger"></img>
            </div>
            <div className="techDescription">GitHub</div>
          </div>
        </div>
        <div className="technology-item">
          <div className="iconContainer">
            <div className="techIcon">
              <img src={gitlabImage} alt="BlakeReidinger"></img>
            </div>
            <div className="techDescription">GitLab</div>
          </div>
        </div>
        <div className="technology-item">
          <div className="iconContainer">
            <div className="techIcon">
              <img src={bootstrapImage} alt="BlakeReidinger"></img>
            </div>
            <div className="techDescription">Bootstrap</div>
          </div>
        </div>
        <div className="technology-item">
          <div className="iconContainer">
            <div className="techIcon">
              <img src={vueImage} alt="BlakeReidinger"></img>
            </div>
            <div className="techDescription">Vue</div>
          </div>
        </div>
        <div className="technology-item">
          <div className="iconContainer">
            <div className="techIcon">
              <img src={postmanImage} alt="BlakeReidinger"></img>
            </div>
            <div className="techDescription">Postman</div>
          </div>
        </div>
        <div className="technology-item">
          <div className="iconContainer">
            <div className="techIcon">
              <img src={trelloImage} alt="BlakeReidinger"></img>
            </div>
            <div className="techDescription">Trello</div>
          </div>
        </div>
        <div className="technology-item">
          <div className="iconContainer">
            <div className="techIcon">
              <img src={netImage} alt="BlakeReidinger"></img>
            </div>
            <div className="techDescription">.NET</div>
          </div>
        </div>
        <div className="technology-item">
          <div className="iconContainer">
            <div className="techIcon">
              <img src={netcoreImage} alt="BlakeReidinger"></img>
            </div>
            <div className="techDescription">.NET Core</div>
          </div>
        </div>
        <div className="technology-item">
          <div className="iconContainer">
            <div className="techIcon">
              <img src={restapiImage} alt="BlakeReidinger"></img>
            </div>
            <div className="techDescription">REST.API</div>
          </div>
        </div>
        <div className="technology-item">
          <div className="iconContainer">
            <div className="techIcon">
              <img src={reactImage} alt="BlakeReidinger"></img>
            </div>
            <div className="techDescription">Formik</div>
          </div>
        </div>
        <div className="technology-item">
          <div className="iconContainer">
            <div className="techIcon">
              <img src={reactImage} alt="BlakeReidinger"></img>
            </div>
            <div className="techDescription">Yup</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Technology;
