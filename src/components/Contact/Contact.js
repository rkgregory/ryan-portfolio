import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./Contact.css";
import "../theme.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
// import FA from "react-fontawesome";

import loadingWheelLottie from "../../lotties/loading-wheel.json";

function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [showSendingAlert, setShowSendingAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailAlert, setShowFailAlert] = useState(true);

  const defaultErrorMessage = "Something went wrong...";
  const [errorMessage, setErrorMessage] = useState(defaultErrorMessage);

  useEffect(() => {
    setShowFailAlert(false);
  }, [name]);
  useEffect(() => {
    setShowFailAlert(false);
  }, [email]);

  const handleSubmit = () => {
    const templateId = "kbd_contact_form";

    let validEmail = checkEmail(email);
    let validName = checkValid(name);

    if (validEmail && validName) {
      setShowFailAlert(false);
      setErrorMessage(defaultErrorMessage);
      sendFeedback(templateId, {
        user_message: message,
        user_name: name,
        user_email: email,
        client_email: "kingyosefofficial@gmail.com",
        client_name: "King Yosef",
      });

      setName("");
      setEmail("");
      setMessage("");
    } else {
      console.log("setting error message?");
      if (!validEmail) {
        setErrorMessage("Invalid Email Address");
      }
      if (!validName) {
        setErrorMessage("Name cannot be empty");
      }
      console.log("showing fail alert");
      setShowFailAlert(true);
    }
  };

  const checkEmail = (email) => {
    console.log(email);
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const checkValid = (message) => {
    if (message == "" || message == null || message == undefined) {
      return false;
    } else {
      return true;
    }
  };

  const sendFeedback = (templateId, variables) => {
    setShowSendingAlert(true);
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
        setShowSuccessAlert(true);
        setShowSendingAlert(false);
        setTimeout(function () {
          setShowSuccessAlert(false);
        }, 3000);
      })
      .catch((err) => {
        setShowFailAlert(true);
        setTimeout(function () {
          setShowFailAlert(false);
        }, 3000);
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        );
      });
  };

  return (
    <React.Fragment>
      <Nav />
      <img
        src="https://ryan-photo-hosting-bucket.s3-us-west-1.amazonaws.com/king-yosef/photos/yosef-pic-4.jpeg"
        alt=""
        className="contact-img"
      />
      <div className="contact-container">
        <div className="content-wrapper">
          <div className="contact-form-bg">
            <h1 className="contact-header">INQUIRIES</h1>

            <div className="container form-container text-left">
              <p className="contact-description">
                For inquiries on production, song writing, mixing or anything
                else music related, please use the form below.
              </p>
              <form>
                <div className="form-group">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Message</label>
                  <textarea
                    name=""
                    id=""
                    className="form-control"
                    placeholder="Add a brief description of your project and budget"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                {showSuccessAlert && (
                  <div className="alert success-alert alert-contact">
                    <p>Email successfully sent!</p>
                  </div>
                )}

                {showSendingAlert && (
                  <div className="alert sending-alert alert-contact">
                    <p>Sending Email</p>
                    {/* <div className="lottie-container">
                    <UncontrolledLottie
                      lottieJson={loadingWheelLottie}
                      height={50}
                      width={50}
                    />
                  </div> */}
                  </div>
                )}

                {showFailAlert && (
                  <div className="alert fail-alert alert-contact">
                    <p>{errorMessage}</p>
                  </div>
                )}
                <div className="contact-btn-container">
                  <input
                    type="button"
                    value="SUBMIT"
                    className="contact-btn"
                    onClick={handleSubmit}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Contact;
