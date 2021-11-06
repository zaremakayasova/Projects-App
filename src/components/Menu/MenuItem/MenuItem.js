import React from "react";
import "./MenuItem.css";

const MenuItem = ({ title, price, img, desc }) => {
  return (
    <div className="menu-item">
      <div className="img-container">
        <img src={img} alt={title} />
      </div>
      <div className="menu-item-info">
        <div className="menu-item-text">
          <h2>{title}</h2>
          <span>$ {price}</span>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default MenuItem;
