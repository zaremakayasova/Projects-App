import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className='home-page'>
      <Link class='link' to="/mytodo-list">My Todo List</Link>
      <Link class='link' to="/birthday-reminder">Birthday Reminder</Link>
      <Link class='link' to="/tours">Tours</Link>
    </div>
  );
};

export default HomePage;
