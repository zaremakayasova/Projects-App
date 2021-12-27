import React from "react";
import "./Slider.css";

const Slider = ({
  review: { image, name, title, quote },
  decrementCount,
  incrementCount,
}) => {
  return (
    <div className="slider">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <span>{title}</span>
      <p>{quote}</p>
      <button onClick={() => decrementCount()}>Decrement</button>
      <button onClick={() => incrementCount()}>Increment</button>
    </div>
  );
};

export default Slider;
