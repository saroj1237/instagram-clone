import React, { useEffect, useState } from "react";
import AppHeader from "./components/AppHeader";
import Posts from "./components/Posts";
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <AppHeader />
        <Posts />
    </div>
  );
}

export default App;
