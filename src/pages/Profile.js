import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { Avatar } from "@material-ui/core";
import AddPost from "../components/AddPost";
import SignInModal from "../components/SignUpModal";
import SignUpModal from "../components/SignInModal";
import Post from "../components/Post";
import "../styles/profile.css";
import ProfileHeader from "../components/ProfileHeader";

function Profile() {
  const currentUser = {
    id: 1,
    username: "saroj1237",
    bio: `Electronics and communication Engineering
saroj@gmail.com`,
    profilImage:
      "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png",
    isFollowing: false,
    posts:[
      {
        id:2,
        imageUrl:"https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png",
        postStatus:"This is fucking hell"
      },
      {
        id:3,
        imageUrl:"https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png",
        postStatus:"This is fucking hell"
      }
    ]
  };

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({ username: "", email: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        setIsAuthenticated(false);
        alert("Log Out successful :(");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(`${user.username} is signed in`);
        // console.log(user);
        setIsAuthenticated(true);
      } else {
        console.log("User is not signed in:");
        setIsAuthenticated(false);
      }
    });
  }, []);

  const handleOpen = (e) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //return ----------------------------*************************
  return (
    <>
      <div className="profile-page">
      <ProfileHeader currentUser={currentUser}/>
      </div>
      <hr/>
      <div class="posts">
      {currentUser.posts.map((post) => {
        return (
          <Post
            key={post.id}
            userName={currentUser.userName}
            avatarUrl={currentUser.avatarUrl}
            imageUrl={post.imageUrl}
            postStatus={post.postStatus}
          />
        );
      })}
      </div>
    </>
  );
}

export default Profile;
