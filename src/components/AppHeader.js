import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import TelegramIcon from "@material-ui/icons/Telegram";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Posts from "../pages/Posts";
import Profile from "../pages/Profile";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import App from "../App";

function AppHeader() {
  return (
    <div className="flex justify-between p-4 border-b w-full">
      <div>
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
      </div>
      <div className="flex items-center">
        <SearchIcon />
        <input
          className="border ml-1 border-gray-400 rounded text-center focus:outline-none"
          placeholder="Search"
        />
      </div>
      <div className="hidden md:flex">
        <Router>
          <Link to="/">
            <HomeIcon className="ml-4 cursor-pointer" />
          </Link>
          <Link to="/login">
            <TelegramIcon className="ml-4 cursor-pointer" />
          </Link>
          <Link to="/signup">
            <ExploreIcon className="ml-4 cursor-pointer" />
          </Link>
          <Link to="/addpost">
            <FavoriteBorderIcon className="ml-4 cursor-pointer" />
          </Link>
          <Link to="/profile">
            <PersonIcon className="ml-4 cursor-pointer" />
          </Link>
        </Router>
      </div>
    </div>
  );
}

export default AppHeader;
