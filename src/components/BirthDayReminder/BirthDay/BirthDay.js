import React, { useState } from "react";
import "./Birthday.css";
import data from "../data";
import Baloons from "../images/birthday.png";
import List from "../List/List";

const BirthDayReminder = () => {
  const [list, setList] = useState(data);
  return (
    <div className="birthday-container">
      <div className="birthday">
        <img src={Baloons} />
        <h1>{list.length} birthdays today</h1>
        {list.map((item) => (
          <List {...item} />
        ))}
        <button onClick={() => setList([])}>Clear All</button>
      </div>
    </div>
  );
};

export default BirthDayReminder;
