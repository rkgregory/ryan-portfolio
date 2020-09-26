import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import "bootstrap/dist/css/bootstrap.css";
import "./LottieAnimation.css";

{
  /* 
  Ex:

  import serverLottie from "../../resources/lotties/server.json";

  <LottieAnimation src={serverLottie} width={250} />
  // or
  <LottieAnimation src={serverLottie} width={250} height={250} /> 

*/
}

function LottieAnimation(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: props.src,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <React.Fragment>
      <div>
        <Lottie
          options={defaultOptions}
          height={props.height}
          width={props.width}
        />
      </div>
    </React.Fragment>
  );
}

export default LottieAnimation;
