import React from "react";
import "./Review.css";

const Review = ({ name, job, image, text }) => {
  return (
    <div>
      <img src={image} alt="profile-picture" />
      <h2>{name}</h2>
      <h3>{job}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Review;
