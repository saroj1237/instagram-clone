import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";
import Profile from "./Profile";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => {
          return { id: doc.id, post: doc.data() };
        })
      );
    });
  }, []);
  return (
    <div className="flex">
      <div className="md:w-1/2 ">
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              userName={post.post.userName}
              avatarUrl={post.post.avatarUrl}
              imageUrl={post.post.imageUrl}
              postStatus={post.post.postStatus}
            />
          );
        })}
      </div>
      <Profile />
    </div>
  );
}

export default Posts;
