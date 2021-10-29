import React, { useState } from "react";
import "./Birthday.css";
import data from "../data";
import List from "../List/List";

const BirthDayReminder = () => {
  const [list, setList] = useState(data);
  return (
    <div className="birthday">
      <h1>{list.length} birthdays today</h1>
      {list.map((item) => (
        <List {...item} />
      ))}
      <button onClick={() => setList([])}>Clear All</button>
    </div>
  );
};

export default BirthDayReminder;
