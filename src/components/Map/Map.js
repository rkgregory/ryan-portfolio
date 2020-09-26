import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import "bootstrap/dist/css/bootstrap.css";
import MapChart from "./MapChart";
import { postCityState, getAllCityStates } from "../../services/requestService";
import LottieAnimation from "../LottieAnimation/LottieAnimation";

import loadingLottie from "../../lotties/loading-wheel.json";

// import { checkValidEmail, checkValidName } from "../../services/util";

// import RequestShow from "./RequestShow";

import "./Map.css";

// import allStates from "./data/allstates.json";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function Map(props) {
  const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

  const [content, setContent] = useState("");
  const [cities, setCities] = useState([]);
  const [showRequestButton, setShowRequestButton] = useState(false);
  const [showCitiesButtons, setShowCitiesButtons] = useState(false);
  const [showStateHeader, setShowStateHeader] = useState(false);

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [requestData, setRequestData] = useState([]);
  const [showRequestData, setShowRequestData] = useState(false);

  const [showMapChart, setShowMapChart] = useState(true);

  const [showLoading, setShowLoading] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const handleCityClick = (state, city) => {
    setShowCitiesButtons(false);
    setShowRequestButton(true);

    setSelectedState(state);
    setSelectedCity(city);
  };

  useEffect(() => {
    if (cities != []) {
      setShowStateHeader(true);
      setShowCitiesButtons(true);
    }
  }, [cities]);

  const handleNevermind = () => {
    setShowRequestButton(false);
    setShowCitiesButtons(true);
  };

  const handleRequestClick = async () => {
    setShowRequestButton(false);
    setShowStateHeader(false);
    setShowMapChart(false);
    // show loading wheel
    setShowLoading(true);
    setContent(
      "REQUESTED SHOWS"
      // selectedCity.toUpperCase() +
      // ", " +
      // selectedState.toUpperCase() +
      // " Show Requested!"
    );
    await postCityState(selectedCity, selectedState);

    let reqData = await getAllCityStates();

    console.log("RESP: " + JSON.stringify(reqData.data));

    setRequestData(reqData.data);

    console.log(requestData);

    // not loading anymore
    setShowLoading(false);
    setShowStateHeader(true);
    setShowRequestData(true);

    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <React.Fragment>
      <Nav />
      <div className="map-container">
        {showMapChart && (
          <div className="map-chart-container">
            <h1 className="map-chart-header">SELECT STATE TO REQUEST SHOW</h1>
            <div className="">
              <MapChart
                setTooltipContent={setContent}
                setTooltipCities={setCities}
              />
              <ReactTooltip>{content}</ReactTooltip>
            </div>
          </div>
        )}
        <div className="map-selected-content">
          {showStateHeader && <h1 className="map-chart-header">{content}</h1>}
          <div className="btns-container">
            {showCitiesButtons &&
              cities.map((city) => (
                <div key={city}>
                  <button
                    className="act-btn"
                    onClick={() => handleCityClick(content, city)}
                  >
                    {city}
                  </button>
                </div>
              ))}

            {showRequestButton && (
              <div>
                <button
                  className="act-btn green-btn-bg"
                  onClick={() => handleRequestClick()}
                >
                  Request a show in {selectedCity}, {selectedState}
                </button>
                <button
                  className="act-btn gray-btn-bg"
                  onClick={() => handleNevermind()}
                >
                  Nevermind
                </button>
              </div>
            )}

            {showRequestData &&
              requestData.map((entry) => (
                <div>
                  <p className="request-data">
                    {entry.city.toUpperCase()}, {entry.state.toUpperCase()}:{" "}
                    {entry.count + 1}
                  </p>
                </div>
              ))}

            {showLoading && <LottieAnimation src={loadingLottie} width={250} />}

            {showAlert && (
              <div className="request-success-alert">
                A Show in {selectedCity}, {selectedState} has been requested!
              </div>
            )}
          </div>
        </div>
      </div>
      {!showLoading && <Footer />}
    </React.Fragment>
  );
}

export default Map;
