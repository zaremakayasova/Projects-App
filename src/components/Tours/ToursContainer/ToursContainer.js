import React, { useEffect, useState } from "react";
import "./ToursContainer.css";
import Tours from "../Tours/Tours";
import Loading from "../Loading/Loading";

const ToursContainer = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeTour = (id) => {
    const filteredTours = tours.filter((tour) => tour.id !== id);
    setTours(filteredTours);
  };

  const fetchTours = async () => {
    try {
      const response = await fetch(
        "https://course-api.com/react-tours-project"
      );
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <div className="tours-container">
        <h2>No tours left</h2>
        <button onClick={() => fetchTours()}>Refresh</button>
      </div>
    );
  }

  return <Tours tours={tours} removeTour={removeTour} />;
};

export default ToursContainer;
