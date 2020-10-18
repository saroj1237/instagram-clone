import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";
import Profile from "./Profile";

function Posts() {
  const [posts, setPosts] = useState([
    // {
    //   userName: "@saroj1237",
    //   avatarUrl:
    //     "https://images.unsplash.com/photo-1602917648808-e0aa2cd2c737?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //   imageUrl:
    //     "https://images.unsplash.com/photo-1602917648808-e0aa2cd2c737?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //   postStatus: "Feeling sad and hungry",
    // },
    // {
    //   userName: "@saroj1237",
    //   avatarUrl:
    //     "https://images.unsplash.com/photo-1602917648808-e0aa2cd2c737?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //   imageUrl:
    //     "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    //   postStatus: "Feeling sad and hungry",
    // },
    // {
    //   userName: "@saroj1237",
    //   avatarUrl:
    //     "https://images.unsplash.com/photo-1602917648808-e0aa2cd2c737?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    //   imageUrl:
    //     "https://images.ctfassets.net/l3l0sjr15nav/75GQyJ9qGktaUv46CKtRV5/76b7bef28646ba63c322aecfabf7bda2/product-updates-at-smallpdf_2x.png?w=2000",
    //   postStatus: "Feeling sad and hungry",
    // },
  ]);

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
      <div className="md:w-1/2 bg-black">
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
