import React from "react";
import "./Navbar.css";

const NavBar = () => (
  <>
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-inner-container">
          <div className="navbar-icon">
            <img src="https://i.ibb.co/2S0PzTc/logo.png" alt="LOGO" />
          </div>
          <div className="logo-title">
            <div className="logo-title-top">SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY</div>
            <div className="logo-title-down">Exam Scheduler</div>
          </div>
        </div>
        <div className="navbar-inner-container">
          <div className="login-icon">
            <img
              alt=" "
              src="https://i.ibb.co/ckcWSdS/healthicons-ui-user-profile.png"
            />
          </div>
          <div className="login-name">Waseem</div>
        </div>
      </div>
    </div>
  </>
);

export default NavBar;
