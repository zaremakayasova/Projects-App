import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <Link class="link" to="/mytodo-list">
        My Todo List
      </Link>
      <Link class="link" to="/birthday-reminder">
        Birthday Reminder
      </Link>
      <Link class="link" to="/tours">
        Tours
      </Link>
      <Link class="link" to="/reviews">
        Reviews
      </Link>
      <Link class="link" to="/accordion">
        Accordion
      </Link>
      <Link class="link" to="/menu">
        Menu
      </Link>
      <Link class="link" to="/tabs">
        Tabs
      </Link>
    </div>
  );
};

export default HomePage;
