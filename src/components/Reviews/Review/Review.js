import React from "react";
import "./Review.css";
import { FaAngleRight, FaAngleLeft, FaQuoteRight } from "react-icons/fa";

const Review = ({
  name,
  job,
  image,
  text,
  showNext,
  showPrevious,
  surpriseMe,
}) => {
  return (
    <div className="review">
      <div className="img-container">
        <img src={image} alt="profile-picture" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h2>{name}</h2>
      <h3>{job}</h3>
      <p>{text}</p>
      <button className="review-switch" onClick={() => showPrevious()}>
        <FaAngleLeft />
      </button>
      <button className="review-switch" onClick={() => showNext()}>
        <FaAngleRight />
      </button>
      <div>
        <button className="review-surprise" onClick={() => surpriseMe()}>
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Review;
