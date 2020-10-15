import React from "react";
import "./AppHeader.css";
import HomeIcon from "@material-ui/icons/Home";
import TelegramIcon from "@material-ui/icons/Telegram";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function AppHeader() {
  return (
    <div className="app-header">
    
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
        <input className="search" placeholder="Search" />
   
      <div className="app-header-icons">
        <HomeIcon />
        <TelegramIcon />
        <ExploreIcon />
        <FavoriteBorderIcon />
      </div>
    </div>
  );
}

export default AppHeader;
