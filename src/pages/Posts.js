import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import Post from "../components/Post";

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const user = auth.currentUser;
    db.collection("posts")
      .doc("gZ8QlELjjThIr9L25OL1f2rZZ6j2")
      .collection("userPosts")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return { id: doc.id, post: doc.data() };
          })
        );
      });
  }, []);
  return (
    <div>
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
  );
}

export default Posts;
