import React, { useState } from "react";
import { db, auth } from "../firebase";

function AddPost({ isAuthenticated }) {
    const [post, setPost] = useState({
        userName: "",
        postStatus: "",
        avatarUrl: "",
        imageUrl: "",
      });

    const submitPost = () => {
        if (!isAuthenticated) {
          return;
        }
        const email = auth.currentUser.email;
        const uid = auth.currentUser.uid;
        const displayName = auth.currentUser.displayName;
        setPost({
          ...post,
          userName: displayName,
          photoUrl: email,
          avatarUrl: email,
        });
        db.collection("posts").doc(uid).collection("userPosts").doc().set(post);
      };
  return (
    <div>
      <form onSubmit={submitPost}>
        <div className="mt-2">
          <textarea
            className="focus:outline-none rounded w-full px-2 border-2"
            placeholder="Caption"
            value={post.postStatus}
            onChange={(e) => {
              setPost({ ...post, postStatus: e.target.value });
            }}
          />
        </div>
        <div className="flex justify-between">
          <input
            type="file"
            className="rounded cursor-pointer focus:outline-none"
          />
          <div
            onClick={submitPost}
            className="p-2 bg-blue-200 rounded cursor-pointer"
          >
            Post
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddPost;
