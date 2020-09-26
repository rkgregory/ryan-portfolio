import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../theme.css";
import "../Join/Join.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { postEmail } from "../../services/requestService";
import { checkValidEmail } from "../../services/util";

function Join(props) {
  const [email, setEmail] = useState("");

  const [showSendingAlert, setShowSendingAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailAlert, setShowFailAlert] = useState(false);
  const defaultErrorMessage = "Something went wrong...";
  const [errorMessage, setErrorMessage] = useState(defaultErrorMessage);

  const handleEmaiSubmit = async () => {
    console.log("submit button clicked email is: " + email);

    let validEmail = checkValidEmail(email);

    if (validEmail) {
      setShowFailAlert(false);
      setShowSendingAlert(true);
      setEmail("");

      try {
        await postEmail(email);
      } catch (e) {
        setShowFailAlert(true);
        setErrorMessage("Something went wrong...");
        console.log("ERROR: ");
        console.log(e);
      }

      setShowSuccessAlert(true);
      setShowSendingAlert(false);
      setTimeout(function () {
        setShowSuccessAlert(false);
      }, 3000);
    } else {
      console.log("setting error message?");
      setErrorMessage("Invalid Email Address");

      console.log("showing fail alert");
      setShowFailAlert(true);
    }
  };

  return (
    <React.Fragment>
      <Nav />
      <img
        src="https://ryan-photo-hosting-bucket.s3-us-west-1.amazonaws.com/king-yosef/photos/yosef-pic-5.jpeg"
        alt=""
        className="join-img"
      />

      <div className="join-container">
        <div className="join-form-bg">
          <h1 className="join-header">JOIN</h1>
          <div className="join-input form-group">
            <input
              type="text"
              className="form-control"
              placeholder="enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="join-btn-container">
            <div className="join-btn" onClick={handleEmaiSubmit}>
              SUBMIT
            </div>
          </div>
        </div>
        {showSuccessAlert && (
          <div className="alert success-alert">
            <p>successfully joined</p>
          </div>
        )}

        {showSendingAlert && (
          <div className="alert sending-alert">
            <p>sending email...</p>
          </div>
        )}

        {showFailAlert && (
          <div className="alert fail-alert">
            <p>{errorMessage}</p>
          </div>
        )}
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Join;
