import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithubAlt,
  FaInstagram,
  FaYoutube,
  FaTwitterSquare,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-header">
          Join our newsletter and receive the best vacation deals.
        </p>
        <p className="footer-subscription-text">
          Here you can unsubscribe, but we will miss you.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button myPath={"singup"} buttonStyle="btn--outline">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-items">
          <h2>About Us</h2>
          <Link to="/singup">How it works </Link>
          <Link to="/website_react/">Testimonials </Link>
          <Link to="/website_react/">Career</Link>
          <Link to="/website_react/">Privacy Police</Link>
          <Link to="/website_react/">Terms of Service</Link>
        </div>
        <div className="footer-link-items">
          <h2>Contact Us</h2>
          <Link to="/website_react/">Contact </Link>
          <Link to="/website_react/">Support</Link>
          <Link to="/website_react/">Destination</Link>
          <Link to="/website_react/">Sponsorship</Link>
        </div>
        <div className="footer-link-items">
          <h2>Social Media</h2>
          <Link to="/website_react/">Instagram</Link>
          <Link to="/website_react/">Facebook</Link>
          <Link to="/website_react/">Youtube</Link>
          <Link to="/website_react/">Twitter</Link>
        </div>
      </div>
      <section className="social-media">
        <div className="footer-logo">
          <Link to="/website_react/" className="social-logo">
            GNY <FaGithubAlt className="footer-icon" />
          </Link>
        </div>
        <small className="website-rights">GNY © 2020 </small>
        <div className="social-icons">
          <Link
            to="/website_react/"
            //_blank is used to be oppened in a new window
            target="_blank"
            //   this type of label does not add the name to the screen
            aria-label="facebook"
            className="social-icon-link facebook"
          >
            <FaFacebook />
          </Link>
          <Link
            to="/website_react/"
            target="_blank"
            aria-label="instagram"
            className="social-icon-link instagram"
          >
            <FaInstagram />
          </Link>
          <Link
            to="/website_react/"
            target="_blank"
            aria-label="youtube"
            className="social-icon-link youtube"
          >
            <FaYoutube />
          </Link>
          <Link
            to="/website_react/"
            target="_blank"
            aria-label="twitter"
            className="social-icon-link twitter"
          >
            <FaTwitterSquare />
          </Link>
        </div>
      </section>
      <p className="attribution">
        Coded by{" "}
        <a href="https://www.linkedin.com/in/gyokota/">Giovana Yokota</a>
      </p>
    </div>
  );
};

export default Footer;
