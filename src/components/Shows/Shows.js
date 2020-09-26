import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Shows.css";
import "../theme.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function Shows(props) {
  return (
    <React.Fragment>
      <Nav />

      <img
        src="https://ryan-photo-hosting-bucket.s3-us-west-1.amazonaws.com/king-yosef/photos/yosef-pic-1-fix.jpg"
        alt=""
        className="shows-img-container"
      />

      <div className="container shows-container">
        <div className="content-wrapper">
          <h1 className="shows-header">SHOWS</h1>
          <div className="shows-list">
            <h2 className="shows-location">LAS VEGAS</h2>
            <div className="shows-card">
              <h3 className="shows-info">
                11/1/20 HOUSE OF BLUES <br /> 8PM PST
              </h3>
              <div className="shows-btn-container">
                <a className="shows-btn" href="">
                  TICKETS
                </a>
              </div>
            </div>
            <div className="shows-card">
              <h3 className="shows-info">
                11/2/20 FRANKIE'S TIKI BAR <br /> 11PM PST
              </h3>
              <div className="shows-btn-container">
                <a className="shows-btn" href="">
                  TICKETS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Shows;
