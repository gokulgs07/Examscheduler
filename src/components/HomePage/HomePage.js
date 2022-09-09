import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => (
  <>
    <div className="homepage-container">
      <img alt=" " src="https://i.ibb.co/m6n1ZR4/Events-rafiki-1.png" />
      <div className="homepage-info">
        There are no schedules get started by creating schedules
      </div>
      <Link to="/exam-scheduler">
        <button className="create-new-button">+ Create New</button>
      </Link>
    </div>
  </>
);

export default HomePage;
