import React, { useEffect, useState } from "react";
import AppHeader from "./components/AppHeader";
import Posts from "./pages/Posts";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import AddPost from "./components/AddPost";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Router>
        <Switch>
          <Route exact path="/">
            <Posts />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/addpost">
            <AddPost />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
