import React, { useEffect, useState } from "react";
import "./ToursContainer.css";
import Tours from "../Tours/Tours";

const ToursContainer = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://course-api.com/react-tours-project"
      );
      const tours = await response.json();
      setTours(tours);
    };
    fetchData();
  }, []);

  const removeTour = (id) => {
    const filteredTours = tours.filter((tour) => tour.id !== id);
    setTours(filteredTours);
  };

  if (tours.length === 0) {
    return (
      <div className='tours-container'>
        <h2>No tours left</h2>
      </div>
    );
  }

  return <Tours tours={tours} removeTour={removeTour} />;
};

export default ToursContainer;
