// IMPORT LIBRARIES
import React from "react";

// IMPORT STYLES
import "../styles/home.css";

// IMPORT IMAGES
import akImage from "../assets/images/vinay.jpg";

// IMPORT ICONS
import LinkedinIcon from "../assets/icons/linkedin";
import GithubIcon from "../assets/icons/github";
import EmailIcon from "../assets/icons/email";
// import InstagramIcon from "../assets/icons/instagram";

const Home = () => {
  return (
    <div className="home-container">
      <img src={akImage} className="home-img" alt=""></img>

      <div className="home-intro">
        <p className="home-university">Hello World!</p>
        <p className="home-name">I am Vinay Muppa </p>
        <p className="home-university">
          Master's in Computer Science | Ex-ASE @Accenture
        </p>
        <p className="home-address">Alpharetta, Georgia, USA</p>
      </div>

      <div className="home-icons-wrapper">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/vinay-m-11b971289/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="home-icons linkedin" />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/VinayMuppa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="home-icons github" />
            </a>
          </li>

          <li>
            <a
              href="mailto:muppavinay@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon className="home-icons email" />
            </a>
          </li>
        </ul>
      </div>

      <div className="download-section">
        <a href="/resume.pdf" className="resume-download">
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Home;
