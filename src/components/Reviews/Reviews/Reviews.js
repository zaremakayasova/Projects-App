import React, { useState } from "react";
import "./Reviews.css";
import Review from "../Review/Review";
import data from "../data";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const review = data[index];

  const showNext = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      if (newIndex > data.length - 1) {
        return 0;
      }
      return newIndex;
    });
  };
  const showPrevious = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      if (newIndex < 0) {
        return data.length - 1;
      }
      return newIndex;
    });
  };

  const surpriseMe = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    if (randomNumber > data.length - 1) {
      randomNumber = 0;
    }
    setIndex(randomNumber);
  };

  return (
    <div>
      <h1>Our Reviews</h1>
      <Review {...review} />
      <button onClick={() => showPrevious()}>Previous</button>
      <button onClick={() => showNext()}>Next</button>
      <button onClick={() => surpriseMe()}>Surprise Me</button>
    </div>
  );
};

export default Reviews;
