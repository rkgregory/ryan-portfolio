import React, { useState, useEffect } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./Footer.css";

function Footer(props) {
  return (
    <React.Fragment>
      <div className="footer-container">
        <div className="footer-wrapper">
          <p className="footer-company-name">accept what comes next</p>

          {/* <div className="footer-links">
            <p className="footer-links-title">Links</p>
            <a href="/" className="footer-link">
              <p>Home</p>
            </a>
            <a href="/about" className="footer-link">
              <p>About</p>
            </a>
          </div> */}

          <div className="footer-icons">
            <a
              href="https://www.instagram.com/kingyosef_/?hl=en"
              target="_blank"
            >
              <i className="fa fa-instagram footer-icon"></i>
            </a>
            <a
              href="https://twitter.com/KingYosef_?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="_blank"
            >
              <i className="fa fa-twitter footer-icon"></i>
            </a>
            <a
              href="https://open.spotify.com/artist/2pFb8zX41Fp6v3ImkPzy8S"
              target="_blank"
            >
              <i className="fa fa-spotify footer-icon"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCFhM2JJ2TTE1MbV0N7DuB2Q"
              target="_blank"
            >
              <i className="fa fa-youtube footer-icon"></i>
            </a>
          </div>
          <p className="footer-text">&copy; 2020 KING YOSEF</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
