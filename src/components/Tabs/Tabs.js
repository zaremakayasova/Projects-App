import React, { useState, useEffect } from "react";
import "./Tabs.css";
import { FaAngleDoubleRight } from "react-icons/fa";

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
    <div className="job">
      <h1>Experience</h1>
      <hr />
      <div>
        {positions.map((position, index) => (
          <button
            className={`${index === number ? "active-button" : "job-buttons"}`}
            key={position.id}
            onClick={() => setNumber(index)}
          >
            {position.company}
          </button>
        ))}
      </div>
      <div className="job-info">
        <h3>{title}</h3>
        <span className="job-name">{company}</span>
        <span className="job-dates">{dates}</span>
        {duties.map((duty, index) => (
          <div className="job-text">
            <span className="job-text-icon">
              <FaAngleDoubleRight />
            </span>
            <p key={index}>{duty}</p>
          </div>
        ))}
      </div>
      <button className="more-info-btn">More info</button>
    </div>
  );
};

export default Tabs;
