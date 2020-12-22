import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import img9 from "../images/img-9.jpg";
import img8 from "../images/img-8.jpg";
import img7 from "../images/img-7.jpg";
import img6 from "../images/img-6.jpg";
import img5 from "../images/img-5.jpg";
import img4 from "../images/img-4.jpg";

const Card = () => {
  return (
    <div className="card">
      <h1>Check out these AWSOME Destinations!</h1>
      <div className="card-container">
        <ul className="card-item">
          <CardItem
            src={img9}
            text="Nulla officia sint eu velit dolor labore."
            label="Looking for Adventure"
            path="/sevices"
          />
          <CardItem
            src={img8}
            text="Excepteur ea magna magna enim enim do aute."
            label="Discovering the Desert"
            path="/sevices"
          />
          <CardItem
            src={img7}
            text="Ad cillum id officia laborum laboris esse nostrud id."
            label="Challenge Yourself"
            path="/sevices"
          />
          <CardItem
            src={img6}
            text="Excepteur ea magna magna enim enim do aute."
            label="Big City"
            path="/sevices"
          />
          <CardItem
            src={img5}
            text="Non veniam cupidatat excepteur aute officia dolore cillum labore reprehenderit proident."
            label="Best Hotels"
            path="/sevices"
          />
          <CardItem
            src={img4}
            text="Cupidatat ullamco consectetur id consectetur reprehenderit reprehenderit adipisicing ullamco magna ad."
            label="Place to relax"
            path="/sevices"
          />
        </ul>
      </div>
    </div>
  );
};

export default Card;
