import React from "react";
import "./navbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="nav-left">
          <span className="logo">netflixadmin</span>
        </div>
        <div className="nav-right">
          <div className="nav-right-cont">
            <NotificationsNoneIcon />
            <span className="badge">2</span>
          </div>
          <div className="nav-right-cont">
            <LanguageIcon />
            <span className="badge">2</span>
          </div>
          <div className="nav-right-cont">
            <SettingsIcon />
          </div>
          <img
            src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp"
            className="avatar"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
