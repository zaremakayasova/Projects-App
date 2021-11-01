import React, { useState } from "react";
import "./Tour.css";

const Tour = ({ id, name, image, info, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className='tour'>
      <img src={image} />
      <div className='tour-info'>
      <h2>{name}</h2>
      <span>$ {price}</span>
      <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
      <button className='tour-read-more' onClick={() => setReadMore(!readMore)}>
        {readMore ? "Show Less" : "Read More"}
      </button>
      <button className='tour-remove' onClick={() => removeTour(id)}>Not interested</button>
      </div>
    </div>
  );
};

export default Tour;
