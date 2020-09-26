import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../theme.css";
import "../Stems/Stems.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function Stems(props) {
  return (
    <React.Fragment>
      <Nav />

      <div className="about-container">
        <div className="stems-container">
          <a
            className="stems-link"
            href="https://www.dropbox.com/sh/4ziw2ut0wvyx8hu/AACwqlpK66v86H2r87uWC_ita?dl=0"
          >
            <h1 className="stems-text">PITY CASE STEMS.</h1>
          </a>
          <a
            className="stems-link"
            href="https://www.dropbox.com/sh/hj4vud8j0feg25v/AADDzhKqMOf5uays8fH9cKEsa?dl=0"
          >
            <h1 className="stems-text">THE DULL BLADE STEMS.</h1>
          </a>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Stems;
