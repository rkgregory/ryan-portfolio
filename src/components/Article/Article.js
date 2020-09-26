import React, { useState, useEffect, useRef } from "react";
import "./Article.css";
import "../theme.css";
import moment from "moment";

import FA from "react-fontawesome";

import { useSwipeable, Swipeable } from "react-swipeable";

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Article = (props) => {
  const myRef = useRef(null);
  const { showArticle, item, setOpen, isOpen } = props;

  // const [setExpanded, isExpanded] = useState(false);
  const [isExpanded, setExpanded] = useState(false);

  const [activeImage, setActiveImage] = useState(item.imageLink);

  const [altImages, setAltImages] = useState([]);

  const [shortenedDescription, setShortenedDescription] = useState("");
  const [shortenedTitle, setShortenedTitle] = useState("");

  const handlers = useSwipeable({ onSwipedRight: () => setOpen(!isOpen) });
  const imageSwipeHandlers = useSwipeable({
    onSwipedLeft: () => swipeLeftSwitchImage(),
  });

  useEffect(() => {}, []);

  // console.log("Active image: ");
  // console.log(activeImage);

  // const [articleBody, setArticleBody] = useState(item.body);

  useEffect(() => {
    let description = item.description;

    if (description) {
      // Limit item description to 240 characters
      if (description.length > 240) {
        description = description.substring(0, 240) + "...";
      }
      setShortenedDescription(description);
    }

    let title = item.title;

    if (title) {
      // Limit item title to 100 characters
      if (title.length > 100) {
        title = title.substring(0, 100) + "...";
      }
      setShortenedTitle(title);
    }

    setActiveImage(item.imageLink);
    // console.log("Active image: ");
    // console.log(activeImage);
    // console.log("ITEM in NEWS ARTICLE");
    // console.log(item);

    setAltImages(item.altImageLinks);

    const cleanArticleBody = () => {
      // let newBody = item.body.toString().replace(/(\[.*?\])/g, "");
      // console.log(item.body);
      // console.log(newBody);
      // setArticleBody(newBody);
    };
    if (item.body) cleanArticleBody();
    // scrollToRef(myRef);
  }, [item]);

  const swipeLeftSwitchImage = () => {
    console.log("IN SWIPELEFT SWITCH IMAGE...");

    let activeIndex = item.altImageLinks.indexOf(activeImage);
    console.log("active Image index: ", activeIndex);
    let nextIndex = 0;
    let nextImage = "";

    if (activeIndex === -1) {
      nextIndex = 0;
      nextImage = item.altImageLinks[nextIndex];
    } else if (activeIndex !== item.altImageLinks.length - 1) {
      nextIndex++;
      nextImage = item.altImageLinks[nextIndex];
    } else {
      // if last in altImages, set to main image
      nextImage = item.imageLink;
    }

    setActiveImage(nextImage);
  };
  const closeCardClicked = () => {
    setOpen(!isOpen);
  };

  const expandCardClicked = () => {
    console.log("expanded card clicked ");
    setExpanded(!isExpanded);
  };

  // default img src on img error
  const addDefaultSrc = (ev) => {
    ev.target.src =
      "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png";
  };

  const prettyDate = moment(item.pubDate).format("MMM Do  h:mm a");

  const cardExpanded = isExpanded ? " card-expanded " : "";

  // console.log("showArticle is ", showArticle);
  return (
    <React.Fragment>
      <div className={cardExpanded} {...handlers}>
        <div
          className={
            (showArticle
              ? "article-container dark-card-bg-color dark-font-color open-width"
              : "article-container dark-card-bg-color dark-font-color collapsed-width") +
            cardExpanded
          }
        >
          {/* Close Button  */}
          <button
            type="button"
            className="close article-close dark-font-color no-bs-border"
            aria-label="Close"
            onClick={() => closeCardClicked()}
          >
            <FA name="times" className="fa-close-btn" />
          </button>

          {/* Article  */}

          <div className="outer-article">
            <div className="body-container">
              {/* Title (Caption)  */}
              <h1 className="article-title" ref={myRef}>
                {shortenedTitle}
              </h1>

              {/* Main Image */}
              <div className="article-img-frame" {...imageSwipeHandlers}>
                <img
                  className="article-img"
                  alt={"article image " + item.publisher}
                  src={activeImage}
                  onError={addDefaultSrc}
                />
              </div>

              {/* Alt Images  */}
              <div className="alt-images-container">
                <div className="img-switcher-btn-container">
                  <img
                    src={item.imageLink}
                    className="img-switcher-btn"
                    onClick={() => setActiveImage(item.imageLink)}
                  />
                </div>
                {altImages &&
                  altImages.map((altImageLink) => (
                    <div className="img-switcher-btn-container">
                      <img
                        src={altImageLink}
                        className="img-switcher-btn"
                        onClick={() => setActiveImage(altImageLink)}
                      />
                    </div>
                  ))}
              </div>

              {/* Title (Caption)  */}
              {/* <h1 className="article-title-2" ref={myRef}>
                {item.title}
              </h1> */}

              {/* Size Tag */}
              <div class="size-tag-container">
                <div className="size-tag">
                  <p className="size">{item.tagSize}</p>
                </div>
              </div>

              {/* Price  */}
              <h2 className="article-price">${item.price}</h2>

              {/* Buy Button */}
              <a
                className="btn btn-light buy-btn no-bs-border "
                target="_blank"
                rel="noopener noreferrer"
                // href={item.link.toString()}
              >
                Buy Now
              </a>

              {/* Description  */}
              <p className="article-description">{shortenedDescription}</p>

              {/* Scroll padding  */}
              <div className="scroll-padding"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Article;
