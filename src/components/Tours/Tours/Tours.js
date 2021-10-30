import React, { useEffect, useState } from "react";
import "./Tours.css";
import Tour from "../Tour/Tour";

const Tours = () => {
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

  return (
    <div className="tours">
      <h2>Our Tours</h2>
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} removeTour={removeTour} />
      ))}
    </div>
  );
};

export default Tours;
