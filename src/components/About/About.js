import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./About.css";
import "../theme.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import aboutImg from "../../resources/yosef-1.jpg";
import Gallery from "../Gallery/Gallery";
import CrownEmote from "../../resources/crown-emote.png";
import ThroneEmote from "../../resources/throne-emote.png";
import BladeEmote from "../../resources/blade-emote.png";

function About(props) {
  return (
    <React.Fragment>
      <Nav />

      <div className="about-container">
        <div className="about-h-container">
          <h1 className="about-header">KING YOSEF</h1>
          <h2 className="about-sub-header">
            <img src={BladeEmote} className="title-emote"></img>
            <p className="key-text">ENGINEER</p>
            <img src={CrownEmote} className="title-emote"></img>
            <p className="key-text">PRODUCER</p>
            <img src={ThroneEmote} className="title-emote"></img>
            <p className="key-text">SONGWRITER</p>
          </h2>
          <Gallery />
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default About;
