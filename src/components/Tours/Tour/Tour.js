import React, { useState } from "react";
import "./Tour.css";

const Tour = ({ id, name, image, info, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div>
      <img src={image} />
      <h2>{name}</h2>
      <span>$ {price}</span>
      <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
      <button onClick={() => setReadMore(!readMore)}>
        {readMore ? "Show Less" : "Read More"}
      </button>
      <button onClick={removeTour(id)}>Not interested</button>
    </div>
  );
};

export default Tour;
