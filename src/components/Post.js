import React from "react";
import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Post({ userName, avatarUrl, imageUrl, postStatus }) {
  return (
    <div className="flex justify-center">
      <div className="bg-gray-200 my-2 mx-2 rounded border border-gray-400 md:w-2/5 ">
        <div className=" p-2 flex justify-between items-center">
          <div className="flex items-center">
            <Avatar className="border border-gray-600" alt="" src={avatarUrl} />
            <h4 className="ml-2 font-semibold">{userName}</h4>
          </div>
          <div>
            <a>
              <MoreHorizIcon className="text-gray-800 cursor-pointer " />
            </a>
          </div>
        </div>
        <div>
          <img className="w-full object-cover" src={imageUrl} />
        </div>
        <div className="flex ml-2 my-2">
          <h4 className="font-semibold">{userName} </h4>
          <p className="mx-1">{postStatus}</p>
        </div>
        <div className="flex items-center">
          <input
            className="border w-full h-8 p-2 focus:outline-none"
            type="text"
            placeholder="Add a comment.."
          />
          <a>
            <h1 className="p-2 text-blue-800 font-bold">Post</h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Post;
