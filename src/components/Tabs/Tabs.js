import React, { useState, useEffect } from "react";
import "./Tabs.css";

const url = "https://course-api.com/react-tabs-project";

const Tabs = () => {
  const [positions, setPosition] = useState([]);
  const [number, setNumber] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setPosition(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  const { title, dates, duties, company } = positions[number];

  return (
    <div>
      <h1>Experience</h1>
      <hr />
      <div>
        {positions.map((position, index) => (
          <button key={position.id} onClick={() => setNumber(index)}>
            {position.company}
          </button>
        ))}
      </div>
      <div>
        <h2>{title}</h2>
        <span>{company}</span>
        <span>{dates}</span>
        {duties.map((duty, index) => (
          <p key={index}>{duty}</p>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
