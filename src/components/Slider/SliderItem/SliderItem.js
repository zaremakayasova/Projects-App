import React, { useState, useEffect } from "react";
import "./SliderItem.css";
import data from "../data";
import Slider from "../Slider/Slider";

const SliderItem = () => {
  const [index, setIndex] = useState(0);
  const [review, setReview] = useState(data[index]);

  useEffect(() => {
    setReview(data[index]);
  }, [index]);

  const incrementCount = () => {
    if (index > data.length - 1) {
      setIndex(0);
    }
    setIndex(index + 1);
  };

  const decrementCount = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
    setIndex(0);
  };

  return (
    <div className="slider-item">
      <h1>Reviews</h1>
      <Slider
        key={review.id}
        review={review}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
    </div>
  );
};

export default SliderItem;
