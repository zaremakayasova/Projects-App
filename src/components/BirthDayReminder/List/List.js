import React from "react";
import './List.css';

const List = ({ name, age, image }) => {
  return (
    <div className="list">
      <img src={image} alt="profile-picture" />
      <div className="list-info">
        <h1> name {name}</h1>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default List;
