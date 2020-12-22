import React, { useState, useEffect } from "react";
import { FaGithubAlt, FaTimes } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // this function sets click to true, which opens the menu bar and shows the times button
  const handleClick = () => {
    setClick(!click);
  };

  // this will change the click function from menu to times
  const closeMobileMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    // this width needs to be set equal to the width of media query
    if (window.innerWidth <= 900) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //to avoid the sign up button to appear when the screen is refreshed
  //the empty array means that the useEffect will run onMount.
  useEffect(() => {
    if (window.innerWidth <= 900) {
      setButton();
    }
  }, []);

  // the sign up button disappers when the screen is lower than 760px
  window.addEventListener("resize", showButton);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          {/* slash (/) means home  */}
          <Link
            to="/website_react/"
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            GNY <FaGithubAlt className="nav-icon" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <FaTimes className="click-icon-times" />
            ) : (
              <FiMenu className="click-icon-menu" />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/website_react/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Offers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signup"
                className="nav-signup"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button ? (
            <Button myPath={"signup"} buttonStyle="btn--outline">
              JOIN US
            </Button>
          ) : (
            ""
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
