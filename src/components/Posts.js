import React, { useState } from "react";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState([
    {
      avatarUrl:
        "https://images.unsplash.com/photo-1602780349120-3d3a66309a80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      imageUrl:
        "https://images.unsplash.com/photo-1602780349120-3d3a66309a80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      postStatus: "Forest",
      userName: "saroj",
    },
  ]);
  const [input, setInput] = useState({
    avatarUrl: "",
    imageUrl: "",
    postStatus: "",
    userName: "",
  });

  const handleSubmit = (e, posts, setPosts, input, setInput) => {
    e.preventDefault();
    setPosts([
      ...posts,
      {
        avatarUrl: input.avatarUrl,
        imageUrl: input.imageUrl,
        postStatus: input.postStatus,
        userName: input.userName,
      },
    ]);
    setInput({
      avatarUrl: "",
      imageUrl: "",
      postStatus: "",
      userName: "",
    });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e, posts, setPosts, input, setInput);
        }}
      >
        <input
          type="text"
          placeholder="avatarUrl"
          name="avatarUrl"
          value={input.avatarUrl}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="imageUrl"
          name="imageUrl"
          value={input.imageUrl}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="postStatus"
          name="postStatus"
          value={input.postStatus}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="userName"
          name="userName"
          value={input.userName}
          onChange={onChange}
        />

        <button>Post</button>
      </form>
      {posts.map((post) => (
        <Post
          userName={post.userName}
          avatarUrl={post.avatarUrl}
          imageUrl={post.imageUrl}
          postStatus={post.postStatus}
        />
      ))}
    </div>
  );
}

export default Posts;
