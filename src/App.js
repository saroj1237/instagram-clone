import React, { useEffect, useState } from "react";
import AppHeader from "./components/AppHeader";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import { db, auth, storage } from "./firebase";
import Posts from "./components/Posts";

function App() {
 

  return (
    <div className="App">
      <AppHeader />
      <Posts />
    </div>
  );
}

export default App;
