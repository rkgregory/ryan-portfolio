import React, { useState, useEffect } from "react";

import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Gallery.css";
import galleryItems from "./albums.json";
import CrownEmote from "../../resources/crown-emote.png";
import ThroneEmote from "../../resources/throne-emote.png";
import BladeEmote from "../../resources/blade-emote.png";
import FA from "react-fontawesome";

function Gallery(props) {
  const [items, setItems] = useState([]);
  const checkRole = (role, target) => {
    if (role.includes(target)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    setItems(galleryItems);
    console.log(galleryItems);
  });

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          {items.map((item) => (
            // 12-single, 6-double, 4-triple, 3-quad,
            <Col xs={12} sm={12} md={6} lg={6} key={item.id}>
              <div className="gallery-img-container">
                <a href={item.mediaLink}>
                  <img className="gallery-img" src={item.imageLink}></img>
                </a>
              </div>
              <div className="img-description">
                <a className="album-info" href={item.mediaLink} target="_blank">
                  <p className="album-title ">{item.title}</p>
                </a>
                <a className="album-info" href={item.mediaLink} target="_blank">
                  <p className="album-artist">{item.artist}</p>
                </a>
                {item.role.includes("e") && (
                  <img src={BladeEmote} className="gallery-emote"></img>
                )}
                {item.role.includes("p") && (
                  <img src={CrownEmote} className="gallery-emote"></img>
                )}
                {item.role.includes("s") && (
                  <img src={ThroneEmote} className="gallery-emote"></img>
                )}

                {/* {checkPriceExists(item.price) && <p>${item.price}</p>} */}
              </div>
            </Col>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Gallery;
