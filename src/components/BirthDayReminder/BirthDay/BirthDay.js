import React from "react";
import data from "../data";
import List from "../List/List";

const BirthDayReminder = () => {
  return (
    <div className="birthday">
      <h1>{data.length} birthdays today</h1>
      {data.map((item) => (
        <List {...item} />
      ))}
      <button>Clear All</button>
    </div>
  );
};

export default BirthDayReminder;
