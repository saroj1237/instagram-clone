import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { Avatar } from "@material-ui/core";
import AddPost from "../components/AddPost";
import SignInModal from "../components/SignUpModal";
import SignUpModal from "../components/SignInModal";

function Profile() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({ username: "", email: "", password: "" });
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
    <div>
      <SignUpModal
        user={user}
        setUser={setUser}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
      <SignInModal
        user={user}
        setUser={setUser}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />

      <div className="bg-green-600">
        {!isAuthenticated ? (
          <p
            name="login"
            className="mx-2 p-2 rounded-xl border-2 cursor-pointer bg-gray-400 hover:bg-red-700 text-black font-bold hover:text-white transition ease-out duration-500 "
            onClick={handleOpen}
          >
            SignIn
          </p>
        ) : (
          <p
            className="mx-2 p-2 rounded-xl border-2 cursor-pointer bg-red-400 hover:bg-red-700 text-black font-bold hover:text-white transition ease-out duration-500 "
            onClick={logout}
          >
            Logout
          </p>
        )}
        {isAuthenticated ? (
          <div></div>
        ) : (
          <p
            name="signup"
            className="mx-2 p-2 rounded-xl border-2 cursor-pointer bg-gray-400 hover:bg-red-700 text-black font-bold hover:text-white transition ease-out duration-500 "
            onClick={handleOpen}
          >
            Signup
          </p>
        )}
      </div>
      <div className="bg-yellow-200 flex justify-center">
        <div className="w-4/5">
          {/* profile info */}
          <div className="bg">
            <Avatar />
            <div>
              {isAuthenticated ? (
                <h4>{auth.currentUser.displayName}</h4>
              ) : (
                <div></div>
              )}

              <div className="flex justify-evenly">
                <div className="flex text-gray-700">
                  <p className="font-bold">12</p>
                  <p>Posts</p>
                </div>
                <div className="flex text-gray-700">
                  <p className="font-bold">12</p>
                  <p>Posts</p>
                </div>
                <div className="flex text-gray-700">
                  <p className="font-bold">12</p>
                  <p>Posts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddPost
        isAuthenticated={isAuthenticated}
      />
    </div>
  );
}

export default Profile;
