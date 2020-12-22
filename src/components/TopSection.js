import React from "react";
import { Button } from "./Button";
import "./TopSection.css";
import { AiFillPlayCircle } from "react-icons/ai";
import Video3 from "../videos/Video3.mp4";

const TopSection = () => {
  return (
    <div className="top-container">
      <video autoPlay loop muted id="video">
        <source src={Video3} type="video/mp4" />
      </video>
      <h1>FIND YOUR PLACE</h1>
      <p>What are you wating for?</p>
      <div className="top-section-btns">
        <Button
          myPath={"signup"}
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          START IT
        </Button>
        <Button
          myPath={"products"}
          buttonStyle=" btn--primary"
          buttonSize="btn--large"
        >
          <div className="top-btn">
            EXPERIENCE IT <AiFillPlayCircle className="top-section-icon" />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default TopSection;
