// import React from "react";
import React, { useState, useEffect } from "react";

import classes from "./BackgroundVideo.css";

const BackgroundVideo = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  const videoSource =
    "https://photo-hosting-bucket.s3-us-west-1.amazonaws.com/king-yosef/home/yosef-home-bg.mp4";
  const thumb =
    "https://photo-hosting-bucket.s3-us-west-1.amazonaws.com/king-yosef/home/yosef-home-thumb-min.png";
  return (
    <React.Fragment>
      {!isVideoLoaded && (
        <img
          src={thumb}
          alt=""
          className="video-thumb tiny"
          style={{ opacity: isVideoLoaded ? 0 : 1 }}
        />
      )}
      <div className="video-container">
        <video
          autoPlay="autoplay"
          playsInline
          loop="loop"
          muted
          className="video"
          onLoadedData={onLoadedData}
          style={{ opacity: isVideoLoaded ? 1 : 0 }}
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={classes.Content}>
          {/* <div className={classes.SubContent}>
          <img
            src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            alt="profile"
          />
        </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default BackgroundVideo;
