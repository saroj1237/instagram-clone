import React from "react";
import { Avatar, colors } from "@material-ui/core";
import "./Post.css";
function Post({ avatarUrl, userName, imageUrl, postStatus }) {
  return (
    <>
      <div className="post">
        <div className="post-header">
          <Avatar alt="" src={avatarUrl} />
          <p>{userName}</p>
        </div>
        <img className="post-image" src={imageUrl} />
        <div className="post-status">
          <p>
            <span style={{ color: "black", fontWeight: "bold" }}>
              {userName}
            </span>
           {postStatus}
          </p>
        </div>
      </div>
    </>
  );
}

export default Post;
