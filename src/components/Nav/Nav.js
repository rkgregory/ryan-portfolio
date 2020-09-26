import React, { useState } from "react";
import "./Nav.css";
import "../theme.css";
import NavItem from "./NavItem";

// import Home from "../Home/Home";

const Nav = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [colNum, setColNum] = useState(6);
  const [textImagePref, setTextImagePref] = useState(true);

  const [isToggleOn, setIsToggleOn] = useState(false);
  const [isImageToggleOn, setIsImageToggleOn] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const colDropDownItemClicked = (col) => {
    setMenuOpen(false);
    setIsToggleOn(!isToggleOn);
    setColNum(col);
  };

  const imgDropDownItemClicked = (pref) => {
    setMenuOpen(false);
    setIsImageToggleOn(!isImageToggleOn);
    setTextImagePref(pref);
  };

  // const hideImageDropDown = () => {
  //   setIsImageToggleOn(false);
  // };

  const show = menuOpen ? "show" : "";
  const navBorderRadius = menuOpen ? "navbar-radius" : "";

  return (
    <React.Fragment>
      <div className="nav-container">
        <nav
          className={
            "navbar navbar-expand-xl navbar-dark custom-navbar" +
            navBorderRadius
          }
        >
          <a className="nav-link-logo" href="/">
            <h1 className="nav-company-name">KING YOSEF</h1>
          </a>

          <button
            className="navbar-toggler no-bs-border"
            type="button"
            onClick={() => toggleMenu()}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={"collapse  navbar-collapse " + show}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <NavItem path="/about" name="ABOUT" />
              <NavItem path="/shows" name="SHOWS" />
              <NavItem path="/contact" name="INQUIRIES" />
              <NavItem path="/thedullblade" name="THE DULL BLADE" />
              <NavItem path="/stems" name="STEMS" />
              <NavItem path="/join" name="JOIN" />
              <NavItem path="/map" name="REQUEST A SHOW" />
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Nav;
