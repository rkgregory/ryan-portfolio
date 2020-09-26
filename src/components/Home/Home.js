import React, { useState, useEffect } from "react";
// import "./node_modules/bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";
import Crown from "../../resources/yosef-crown-white-fix.png";

function Home(props) {
  return (
    <React.Fragment>
      {/* <Nav /> */}
      <div className="home-container">
        <BackgroundVideo />
        {/* <video id="bg-video" playsinline="" muted="" autoplay="" loop="" class="bg-video">
      <source src="resources/script-type-vid.mp4" type="video/mp4">
      <source src="resources/script-type-vid.webm" type="video/webm">
      <source src="resources/script-type-vid.ogg" type="video/ogg">
    </video> */}

        <div className="content-wrapper">
          <h1 className="landing-title">KING YOSEF</h1>
          <div className="landing-btn-container">
            <a className="crown-btn-link" href="/about">
              <img src={Crown} alt="" className="landing-btn" />
            </a>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default Home;
