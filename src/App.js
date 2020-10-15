import React, { useEffect, useState } from "react";
import AppHeader from "./components/AppHeader";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import { db, auth, storage } from "./firebase";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, [posts]);

  return (
    <div className="App">
      <AppHeader />
      <PostForm />
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          userName={post.userName}
          avatarUrl={post.avatarUrl}
          imageUrl={post.imageUrl}
          postStatus={post.postStatus}
        />
      ))}
    </div>
  );
}

export default App;
