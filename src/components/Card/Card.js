import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Card.css";
import moment from "moment";

const Card = (props) => {
  const { item, setOpen, setItem, textImagePref } = props;
  const [shortenedTitle, setShortenedTitle] = useState("");

  let prettyDate = "";
  let today = Date.now();
  if (moment(item.pubDate).isSame(today, "day")) {
    prettyDate += "Today, ";
  }

  prettyDate += moment(item.pubDate).format("MMM Do  h:mm a");

  const cardClicked = () => {
    setItem(item);
    setOpen(true);
  };

  // default img src on img error
  const addDefaultSrc = (ev) => {
    ev.target.src =
      "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png";
  };

  console.log("showImage is: " + textImagePref);
  // const showImage = textImagePref ? "" : " hide-img";

  useEffect(() => {
    let title = item.title;

    if (title) {
      // Limit item title to 50 characters
      if (title.length > 50) {
        title = title.substring(0, 50) + "...";
      }
      setShortenedTitle(title);
    }
  }, [item]);

  return (
    <div
      className="clothing-card"
      onClick={() => cardClicked()}
      aria-controls="example-collapse-text"
    >
      <div className="card-img-frame">
        <img
          className="card-img "
          alt={"card image " + item.publisher}
          onError={addDefaultSrc}
          src={item.imageLink}
        />
      </div>
      <p className="card-title">{shortenedTitle}</p>
      {/* <p className="card-publisher na-blue-font">{item.publisher}</p> */}
      {/* <p className="card-date">{prettyDate}</p> */}
      <div className="card-details">
        {/* Size Tag */}
        <div class="size-tag-container card-size">
          <div className="size-tag">
            <p className="size">{item.tagSize}</p>
          </div>
        </div>
        {/* Price  */}
        <p className="card-price">${item.price}</p>
      </div>
    </div>
  );
};

export default Card;
