import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../theme.css";
import "../TheDullBlade/TheDullBlade.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { Col } from "react-bootstrap";

function TheDullBlade(props) {
  return (
    <React.Fragment>
      <Nav />

      <div className="gallery-container">
        <div className="container">
          <div className="row">
            <div className="blade-img mb-4 col-sm-6">
              <img
                className="img-fluid"
                src="https://ryan-photo-hosting-bucket.s3-us-west-1.amazonaws.com/king-yosef/the-dull-blade/dull-blade-1.jpg"
                alt=""
              />
            </div>
            <div className="blade-img mb-4 col-sm-6">
              <img
                className="img-fluid"
                src="https://ryan-photo-hosting-bucket.s3-us-west-1.amazonaws.com/king-yosef/the-dull-blade/dull-blade-2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="blade-img mb-4 col-sm-4">
              <img
                className="img-fluid"
                src="https://ryan-photo-hosting-bucket.s3-us-west-1.amazonaws.com/king-yosef/the-dull-blade/dull-blade-3.jpg"
                alt=""
              />
            </div>
            <div className="blade-img mb-4 col-sm-4">
              <img
                className="img-fluid"
                src="https://ryan-photo-hosting-bucket.s3-us-west-1.amazonaws.com/king-yosef/the-dull-blade/dull-blade-4.jpg"
                alt=""
              />
            </div>
            <div className="blade-img mb-4 col-sm-4">
              <img
                className="img-fluid"
                src="https://ryan-photo-hosting-bucket.s3-us-west-1.amazonaws.com/king-yosef/the-dull-blade/dull-blade-5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="blade-img mb-4 col-sm-6">
              <img
                className="img-fluid"
                src="https://ryan-photo-hosting-bucket.s3-us-west-1.amazonaws.com/king-yosef/the-dull-blade/dull-blade-6.jpg"
                alt=""
              />
            </div>
            <div className="blade-img mb-4 col-sm-6">
              <img
                className="img-fluid"
                src="https://ryan-photo-hosting-bucket.s3-us-west-1.amazonaws.com/king-yosef/the-dull-blade/dull-blade-7-crop.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="container text-center">
            <h2 className="dull-blade-header">THE DULL BLADE</h2>
            <p className="blade-text ">
              I wrote this song as a reflection on a lot of people in my life
              passing in the last few years. I always thought that was something
              that happened when you got older but, here I am in my 20's
              learning how to keep moving forward with all these people gone.
              Eventually you start to go numb from it all to keep moving but it
              keeps chipping away at you until you don't realize how broken down
              you are cause you've neglected to look at those circumstances from
              the fog you're in. You then get down to the point where you want
              to die, but when its all said and done, I think despite all those
              feelings, I want to live and if it was my time I'd be horrified to
              see I had wasted my life sitting in the fog I cast on myself.
            </p>
          </div>
          <iframe
            className="blade-vid"
            width="560"
            height="410"
            src="https://www.youtube.com/embed/FlJZqrZXFag"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default TheDullBlade;
