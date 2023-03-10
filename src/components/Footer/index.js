import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a
          href="https://github.com/nathannguyen0102"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../assets/logos/github-logo.png")}
            alt="Github"
            className="logo"
          ></img>
        </a>
      </div>
      <div>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img
            src={require("../../assets/logos/linkedin-logo.png")}
            alt="LinkedIn"
            className="logo"
          ></img>
        </a>
      </div>
      <div>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img
            src={require("../../assets/logos/twitter-logo.png")}
            alt="Twitter"
            className="logo"
          ></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
